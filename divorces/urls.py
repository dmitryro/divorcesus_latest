"""divorces URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth.models import User
from django.views.generic import RedirectView
from django.views.generic import TemplateView
import django.template.loader
# Rules 
import rules_light
import restless
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers, serializers, viewsets
from rest_framework import generics
from rest_framework import viewsets, routers
from rest_framework.authtoken import views as drf_views

from custom.gui.views import DashboardLogoutView
from custom.signup.views import SendEmailView
from custom.signup.views import logout_view
from custom.blog.views import AddPostView
from custom.blog.views import GetPostsView
from custom.blog.views import DeletePostView
from custom.blog.views import ReadPostView
from custom.blog.views import GetAllPostsView
from custom.blog.views import SavePostView

router = routers.DefaultRouter()

#router.register(r'profiles',ProfileViewSet,base_name='profiles')

admin.autodiscover()
urlpatterns = [
#    url(r'^', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^grappelli/', include('grappelli.urls')),

#    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')), 
    url(r'^django-rq/', include('django_rq.urls')),
    url(r'^accounts_api/', include('registration_api.urls')),
    url(r'^api/',include('rest_framework.urls', namespace='rest_framework')),
    url(r'api/accounts/', include('rest_framework.urls', namespace='rest_framework')), 
    url(r'^$', 'custom.gui.views.home'),
    url(r'^dashboard/$', 'custom.gui.views.dashboard'),
    url(r'^accounts/login/?next=/signout/$','custom.gui.views.home'),
    url(r'^accounts/login/$','custom.gui.views.home'),
    url(r'^login/linkedin/$','custom.gui.views.home'),
    url(r'^login/linkedin/','custom.gui.views.home'),
    url(r'^sendmail/$',SendEmailView.as_view()),
    url(r'^toast/$', 'custom.gui.views.toast'),
    url(r'^signout/$', 'custom.gui.views.logout'),
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^froala_editor/', include('froala_editor.urls')),
    url(r'^redactor/', include('redactor.urls')),
    url(r'^postblog',AddPostView.as_view()),
    url(r'^deleteblog',DeletePostView.as_view()),
    url(r'^getposts',GetPostsView.as_view()),
    url(r'^getallposts',GetAllPostsView.as_view()),
    url(r'^readpost',ReadPostView.as_view()),
    url(r'^savepost',SavePostView.as_view()),
    url(r'^search/', include('haystack.urls')),
#    url(r'^divorce/$', 'custom.gui.views.divorce'),
#    url(r'^pricing/$', 'custom.gui.views.pricing'),
    url(r'^services/(?P<service>[^/]+)/$', 'custom.gui.views.services'),
    url(r'^blog/$','custom.gui.views.post'),
    url(r'^blog/(?P<page>[^/]+)/$','custom.gui.views.posts'),
    url(r'^blog/','custom.gui.views.post'),
    url(r'^about/','custom.gui.views.about'),
    url(r'^qualify/','custom.gui.views.check_qualify'),
    url(r'^contacts/$', 'custom.gui.views.contact'),
    url(r'^contact/$', 'custom.gui.views.contact'),
    url(r'^payment/$', 'custom.gui.views.payment'),
    url(r'^ask/$', 'custom.gui.views.ask'),
    url('', include('social.apps.django_app.urls', namespace='social')),
]
