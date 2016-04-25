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


def environment(**options):
    env = Environment(**options)
    env.globals.update({
       'static': staticfiles_storage.url,
       'url': reverse,
    })
    return env

@ensure_csrf_cookie
def home(request):
    return render(request, 'index-0.html',{'home':'index-0.html'})

@ensure_csrf_cookie
def about(request):
    return render(request, 'index-1.html',{'about':'index-1.html'})

@ensure_csrf_cookie
def services(request):
    return render(request, 'index-2.html',{'services':'index-2.html'})

@ensure_csrf_cookie
def pricing(request):
    return render(request, 'index-3.html',{'pricing':'index-3.html'})

@ensure_csrf_cookie
def ask(request):
    return render(request, 'ask.html',{'ask':'ask.html'})

@ensure_csrf_cookie
def contacts(request):
    return render(request, 'index-4.html',{'contacts':'index-4.html'})

@ensure_csrf_cookie
def payment(request):
    return render(request, 'index-5.html',{'payment':'index-5.html'})

@ensure_csrf_cookie
def blog(request):
    return render(request, 'blog.html',{'blog':'blog.html'})

@ensure_csrf_cookie
def divorce(request):
    return render(request, 'divorce.html',{'divorce':'divorce.html'})


