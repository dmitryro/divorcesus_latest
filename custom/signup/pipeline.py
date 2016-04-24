# This is where our intelligence shines
# Pipeline is where we manage user accounts

import urllib2
import json
from simplejson import loads
import urllib
from datetime import date
from django.core.exceptions import ObjectDoesNotExist
import django.contrib.auth as auth
from django.shortcuts import redirect
from social.pipeline.partial import partial
from django.contrib.auth import logout
from django.core.files.base import ContentFile
from django.contrib.auth import authenticate, login
from django.core.exceptions import ObjectDoesNotExist
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.core.files.storage import default_storage as storage
from django.core.files.base import ContentFile
from django.db.models import Min
from social.apps.django_app.views import _do_login
from social.backends.facebook import FacebookOAuth2
from requests import request, HTTPError
from django.core.files.base import ContentFile
from django.template.defaultfilters import slugify
import facebook
import open_facebook
from open_facebook import OpenFacebook
from open_facebook import utils
from open_facebook import api
from django_facebook.utils import get_user_model, mass_get_or_create, \
    cleanup_oauth_url, get_profile_model, parse_signed_request, hash_key, \
    try_get_profile, get_user_attribute

import logging

from StringIO import StringIO
import PIL
from PIL import Image
import urllib2
import random
import json
import os
import re
import sys
