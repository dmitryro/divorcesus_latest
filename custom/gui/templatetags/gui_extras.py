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

