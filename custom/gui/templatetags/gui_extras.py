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
