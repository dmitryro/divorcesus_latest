import logging
import re
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

register = template.Library()

kw_pat = re.compile(r'^(?P<key>[\w]+)=(?P<value>.+)$')
logger = logging.getLogger('sorl.thumbnail')

"""
 Get the logo meta
"""
@register.simple_tag
def user_meta(a, b,  *args, **kwargs):

    try:
        try:
            user = User.objects.get(id=int(a))
            profile = Profile.objects.get(id=int(a))
        except Exception, R:
            return ""

        if (b==1):
            return user.first_name
        elif (b==2):
            return user.last_name
        elif (b==3):
            return profile.profile_image_path
        elif (b==4):
            return user.email 

  
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
            return service.description

        elif (b==4):
            return service.service

      except TypeError:
        print "Invalid argument type"

      except NameError:
        print "No result for this id"
