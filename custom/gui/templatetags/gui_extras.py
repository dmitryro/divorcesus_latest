import logging
import re
from lxml import html, etree

import sys
from urlparse import urlparse
from django.template import Library, Node, NodeList, TemplateSyntaxError
from django.utils.encoding import smart_str
from django import template
from django.template.defaultfilters import stringfilter
import urllib2 as urllib			
from cStringIO import StringIO
from django.contrib.auth.models import User
from custom.users.models import Profile
from custom.users.models import TeamMember
from custom.users.models import AboutUs
from custom.users.models import MileStone
from custom.users.models import Advantage
from custom.users.models import AdvantageLink
from custom.gui.models import Logo
from custom.gui.models import ContactInfo
from custom.gui.models import Service
from custom.messaging.models import Message
from custom.blog.models import Post
from custom.blog.models import Comment

register = template.Library()

kw_pat = re.compile(r'^(?P<key>[\w]+)=(?P<value>.+)$')
logger = logging.getLogger('sorl.thumbnail')

register = Library()

css_cleanup_regex = re.compile('((font|padding|margin)(-[^:]+)?|line-height):\s*[^;]+;')
def _cleanup_elements(elem):
    """
    Removes empty elements from HTML (i.e. those without text inside).
    If the tag has a 'style' attribute, we remove the css attributes we don't want.
    """
    if elem.text_content().strip() == '':
        elem.drop_tree()
    else:
        if elem.attrib.has_key('style'):
            elem.attrib['style'] = css_cleanup_regex.sub('', elem.attrib['style'])
        for sub in elem:
            _cleanup_elements(sub)

def cleanup_html(string):
    """
    Makes generated HTML (i.e. ouput from the WYSISYG) look almost decent.
    """
    try:
        elem = html.fromstring(string)
        _cleanup_elements(elem)
        html_string = html.tostring(elem)
        lines = []

        for line in html_string.splitlines():
            line = line.rstrip()
            if line != '': lines.append(line)

        return '\n'.join(lines)

    except etree.XMLSyntaxError:
        return string


"""
 Get the dashboard meta
"""
@register.simple_tag
def dashboard_meta(a, b,  *args, **kwargs):
    try:
       user = User.objects.get(id=int(a))
    except Exception as e:
       return 'invalid user'

    if b==1:
        try:
           messages = Message.objects.filter(receiver_id=user.id)
           return len(messages)
        except Exception as e:
           return 0

    elif b==2:
       try:
          messages = Message.objects.filter(sender_id=user.id)
          return len(messages)
       except Exception as e:
          return 0

    elif b==3:
       try:
          posts = Post.objects.filter(author_id=user.id)
          return len(posts)
       except Exception as e:
          return 0

    elif b==4:
       try:
          comments = Comment.objects.filter(author_id=user.id)
          return len(comments)
       except Exception as e:
          return 0


"""
 Get the logo meta
"""
@register.simple_tag
def user_meta(a, b,  *args, **kwargs):

    try:
        try:
            user = User.objects.get(id=int(a))
            profile = user.profile
        except Exception, R:
            print R

        if (b==1):
            return '' if user.first_name is None else user.first_name

        elif (b==2):
            return '' if user.last_name is None else user.last_name

        elif (b==3):
            
            if not  profile.profile_image_path or len(profile.profile_image_path)==0:
               return '/media/avatars/default.png'

            return profile.profile_image_path

        elif (b==4):
            return user.email 

        elif (b==5):
            return profile.phone

 
 
    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"


"""
 Get the logo meta
"""
@register.simple_tag
def aboutus_meta(a, b,  *args, **kwargs):

    try:
        try:
            aboutus = AboutUs.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return aboutus.title

        elif (b==2):
            return aboutus.subtitle

        elif (b==3):
            return aboutus.body 

        elif (b==4):
            return aboutus.avatar

    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"


"""
 Get the logo meta
"""
@register.simple_tag
def member_meta(a, b,  *args, **kwargs):

    try:
        try:
            member = TeamMember.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return member.title
        elif (b==2):
            return member.bio
        elif (b==3):
            return member.avatar

    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"

"""
 Get the logo meta
"""
@register.simple_tag
def milestone_meta(a, b,  *args, **kwargs):

    try:
        try:
            milestone = MileStone.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return milestone.title
        elif (b==2):
            return milestone.year
        elif (b==3):
            return milestone.body

    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"



"""
 Get the advantage data
"""
@register.simple_tag
def advantage_meta(a, b,  *args, **kwargs):

    try:
        try:
            advantage = Advantage.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return advantage.title
        elif (b==2):
            return advantage.section_one
        elif (b==3):
            return advantage.section_two
        elif (b==4):
            return advantage.section_three


    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"




"""
 Get the logo  data
"""
@register.simple_tag
def logo_meta(a, b,  *args, **kwargs):

    try:
        try:
            logo = Logo.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return logo.logo
        elif (b==2):
            return logo.width
        elif (b==3):
            return logo.height
        elif (b==4):
            return logo.color


    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"




"""
 Get the contact  info data
"""
@register.simple_tag
def contact_meta(a, b,  *args, **kwargs):

    try:
        try:
            contact = ContactInfo.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return contact.statement

        elif (b==2):
            return contact.address1

        elif (b==3):
            return contact.address2

        elif (b==4):
            return contact.city

        elif (b==5):
            return contact.state

        elif (b==6):
            return contact.zipcode

        elif (b==7):
            return contact.tollfree

        elif (b==8):
            return contact.phone

        elif (b==9):
            return contact.fax

        elif (b==10):
            return contact.email

        elif (b==0):
            return contact.header





    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"



"""
 Get the service provided  info data
"""
@register.simple_tag
def service_meta(a, b,  *args, **kwargs):

    try:
        try:
            service = Service.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return service.title

        elif (b==2):
            return service.statement

        elif (b==3):
            return cleanup_html(service.description)

        elif (b==4):
            return service.service

    except TypeError:
        print "Invalid argument type"

    except NameError:
        print "No result for this id"
