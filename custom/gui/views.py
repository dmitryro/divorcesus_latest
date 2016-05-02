from __future__ import absolute_import  # Python 2 only
from jinja2 import Environment
from django.contrib.staticfiles.storage import staticfiles_storage
from django.core.urlresolvers import reverse
from rest_framework.authentication import SessionAuthentication
from rest_framework.authentication import  BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status
from rest_framework import generics
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from django.core.urlresolvers import reverse
from django.contrib.auth import logout
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.contrib import messages
from django.forms.formsets import formset_factory
from django.shortcuts import render_to_response
from django.template.context import RequestContext
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.views.decorators.csrf import ensure_csrf_cookie
from custom.utils.models import Logger
from django.contrib.auth import logout
from braces import views
from braces.views import AnonymousRequiredMixin
from braces.views import LoginRequiredMixin
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import TemplateView
from django.views.generic.base import View
from custom.utils.models import Logger

@ensure_csrf_cookie
def environment(**options):
    env = Environment(**options)
    env.globals.update({
       'static': staticfiles_storage.url,
       'url': reverse,
    })
    return env

@ensure_csrf_cookie
def index(request):
    return render(request, 'index.html',{'home':'index.html'})

@ensure_csrf_cookie
def home(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = '' 
        except Exception, R:
           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''
 
    return render(request, 'index-0.html',{'logout':logout,
                                           'user_id':user_id,
                                           'first':first_name,
                                           'last':last_name,
                                           'profile_image':profile_image_path})

@ensure_csrf_cookie
def about(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = ''
        except Exception, R:
           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''


    return render(request, 'index-1.html',{'logout':logout,
                                           'user_id':user_id,
                                           'first':first_name,
                                           'last':last_name,
                                           'profile_image':profile_image_path})

@ensure_csrf_cookie
def services(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           profile = User.objects.get(id=request.user.id)
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = profile.profile_image_path
        except Exception, R:
           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''

    return render(request, 'index-2.html',{'logout':logout,
                                           'user_id':user_id,
                                           'first':first_name,
                                           'last':last_name,
                                           'profile_image':profile_image_path})
@ensure_csrf_cookie
def pricing(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           profile = User.objects.get(id=request.user.id)
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = profile.profile_image_path
        except Exception, R:
           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''

    return render(request, 'index-3.html',{'logout':logout,
                                           'user_id':user_id,
                                           'first':first_name,
                                           'last':last_name,
                                           'profile_image':profile_image_path})

@ensure_csrf_cookie
def ask(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           profile = User.objects.get(id=request.user.id)
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = profile.profile_image_path
        except Exception, R:
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''

    return render(request, 'index-3.html',{'logout':logout,
                                           'user_id':user_id,
                                           'first':first_name,
                                           'last':last_name,
                                           'profile_image':profile_image_path})

@ensure_csrf_cookie
def contacts(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           profile = User.objects.get(id=request.user.id)
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = profile.profile_image_path
 
        except Exception, R:
           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''

    return render(request, 'index-4.html',{'logout':logout,
                                           'user_id':user_id,
                                           'first':first_name,
                                           'last':last_name,
                                           'profile_image':profile_image_path})

@ensure_csrf_cookie
def payment(request):
    if request.user.is_authenticated():
        logout=True
        try:
           user_id = request.user.id
           profile = User.objects.get(id=request.user.id)
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = profile.profile_image_path
        except Exception, R:
           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        user_id = -1
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''

    return render(request, 'index-5.html',{'logout':logout,
                                           'first':first_name,
                                           'user_id':user_id,
                                           'last':last_name,
                                           'profile_image':profile_image_path})

@ensure_csrf_cookie
def blog(request):
    if request.user.is_authenticated():
        logout=True
    else:
        logout=False

    return render(request, 'blog.html',{'blog':'blog.html'})

@ensure_csrf_cookie
def divorce(request):
    if request.user.is_authenticated():
        logout=True
        try: 
           user_id = request.user.id
           username = request.user.username
           first_name = request.user.first_name
           last_name = request.user.last_name
           profile_image_path = profile.profile_image_path
        except Exception, R:

           log = Logger(log='WE GOT SOME ERROR'+str(R))
           log.save()
           user_id = -1
           username = ''
           first_name = ''
           last_name = ''
           profile_image_path = ''

    else:
        logout=False
        username = ''
        first_name = ''
        last_name = ''
        profile_image_path = ''

    return render(request, 'divorce.html',{'divorce':'divorce.html','logout':logout,
                                                                    'user_id':user_id,
                                                                    'first':first_name,
                                                                    'last':last_name,
                                                                    'profile_image':profile_image_path})

@ensure_csrf_cookie
def logout(request):
    logout(request)
    return render(request, 'index-0.html',{'home':'index-0.html','logout':False})   

class DashboardLogoutViewMixin(object):
    def get_context_data(self,**kwargs):
        context = super(DashboardLogoutViewMixin,
                  self).get_context_data(**kwargs)
        return context


class DashboardLogoutView(LoginRequiredMixin,DashboardLogoutViewMixin, TemplateView):
    template_name = "inedex-0.html"
    def get(self, request):
        threshold=180
        if request.user.is_authenticated():
               logout(request)
        #  user = request.user


        return render(request, 'index-0.html',{ 'FB_APP_ID' : settings.SOCIAL_AUTH_FACEBOOK_KEY,'logout':False })
 
