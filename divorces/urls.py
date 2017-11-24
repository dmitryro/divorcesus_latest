"""divorces URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
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
from django.conf.urls import include, url
from django.contrib import admin
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

from custom.gui.views import resend_activation_view
from custom.gui.views import confirm_account_view
from custom.gui.views import GlobalSearchList
from custom.gui.views import DashboardLogoutView
from custom.gui.views import GetSearchResultsView
from custom.signup.views import SendEmailView
from custom.signup.views import SubscribeView
from custom.signup.views import logout_view
from custom.blog.views import AddPostView
from custom.blog.views import AddCommentView
from custom.blog.views import SaveCommentView
from custom.blog.views import GetPostsView
from custom.blog.views import DeletePostView
from custom.blog.views import ReadPostView
from custom.blog.views import GetAllPostsView
from custom.blog.views import SavePostView
from custom.blog.views import PostViewSet
from custom.blog.views import CommentViewSet
from custom.blog.views import GetCommentsView
from custom.blog.views import DeleteCommentView
from custom.blog.feeds import RssSiteNewsFeed, AtomSiteNewsFeed
from custom.messaging.views import outgoing_messages_view
from custom.messaging.views import incoming_messages_view
from custom.messaging.views import msg_duplication_view
from custom.messaging.views import SendMessageView
from custom.messaging.views import UpdateMessageView
from custom.messaging.views import NotificationTypeViewSet
from custom.messaging.views import NotificationViewSet
from custom.messaging.views import MessageViewSet
from custom.messaging.views import MessagingSettingsList
from custom.messaging.views import MessagingSettingsViewSet
from custom.messaging.views import OutgoingMessagesList
from custom.messaging.views import IncomingMessagesList
from custom.messaging.views import ReadMessageView
from custom.messaging.views import DeleteMessageView
from custom.messaging.views import UserViewSet
from custom.messaging.views import UserList
from custom.payments.views import SendConfirmationEmailView
from custom.payments.views import PaymentsList
from custom.payments.views import PastPaymentsList
from custom.services.views import ServiceViewSet
from custom.services.views import PackageViewSet
from custom.services.views import ServiceList
from custom.services.views import PackageList
import custom
router = routers.DefaultRouter()



admin.autodiscover()
#router.register(r'bushwick',BushwickArtistViewSet)
router.register(r'msgsettings', MessagingSettingsViewSet)
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'notificationtypes', NotificationTypeViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'packages', PackageViewSet)


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^grappelli/', include('grappelli.urls')),


    url(r'^chatbot/', include('custom.chatbot.urls')),
    url(r'^api-auth/', include('rest_framework.urls', 
                       namespace='rest_framework')), 
    url(r'^django-rq/', include('django_rq.urls')),
    url(r'^api/', include('rest_framework.urls', 
                  namespace='rest_framework')),

    url(r'api/accounts/', include('rest_framework.urls', 
                          namespace='rest_framework')), 
    url(r'^$',custom.gui.views.home),
    url(r'^userlist/(?P<username>.+)/$', UserList.as_view()),
    url(r'^dashboard/$', custom.gui.views.dashboard),
    url(r'^accounts/login/?next=/signout/$',custom.gui.views.home),
    url(r'^accounts/login/$',custom.gui.views.home),
    url(r'^login/linkedin/$',custom.gui.views.home),
    url(r'^login/linkedin/',custom.gui.views.home),
    url(r'^sendmail/$',SendEmailView.as_view()),
    url(r'^toast/$', custom.gui.views.toast),
    url(r'^signout/$', custom.gui.views.logout),
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
   # url(r'^froala_editor/', include('froala_editor.urls')),
    url(r'^redactor/', include('redactor.urls')),
    url(r'^postblog',AddPostView.as_view()),
    url(r'^deleteblog',DeletePostView.as_view()),
    url(r'^getposts',GetPostsView.as_view()),
    url(r'^getcomments/$',GetCommentsView.as_view()),
    url(r'^getallposts',GetAllPostsView.as_view()),
    url(r'^readpost',ReadPostView.as_view()),
    url(r'^readmessage',ReadMessageView.as_view()),
    url(r'^savepost',SavePostView.as_view()),
    url(r'^subscribe/$',SubscribeView.as_view()),
    url(r'^addcomment',AddCommentView.as_view()),
    url(r'^search/', include('haystack.urls')),
    url(r'^confirm/',SendConfirmationEmailView.as_view()),
    url(r'^deletecomment/',DeleteCommentView.as_view()),
    url(r'^savecomment/$',SaveCommentView.as_view()),
    url(r'^sendmessage/',SendMessageView.as_view()),
    url(r'^updatemessage/',UpdateMessageView.as_view()),
    url(r'^deletemessage/',DeleteMessageView.as_view()),
    url(r'^outgoing/$', outgoing_messages_view),
    url(r'^incoming/$', incoming_messages_view),
    url(r'^duplication/$', msg_duplication_view),
    url(r'^pastpayments/(?P<user_id>.+)/$', PaymentsList.as_view()),
    url(r'^msgsettings/(?P<user_id>.+)/$', MessagingSettingsList.as_view()),
    url(r'^pastpayments/', PastPaymentsList.as_view()),
    url(r'^packagelist/$', PackageList.as_view()),
    url(r'^servicelist/$', ServiceList.as_view()),
    url(r'^incoming/$',IncomingMessagesList.as_view()),


    url(r'^accounts/login/?next=/signout/$',custom.gui.views.home),
    url(r'^accounts/login/$',custom.gui.views.home),
    url(r'^login/linkedin/$',custom.gui.views.home),
    url(r'^login/linkedin/',custom.gui.views.home),
    url(r'^toast/$', custom.gui.views.toast),
    url(r'^signout/$', custom.gui.views.logout),
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
   # url(r'^froala_editor/', include('froala_editor.urls')),
    url(r'^redactor/', include('redactor.urls')),
    url(r'^postblog',AddPostView.as_view()),
    url(r'^deleteblog',DeletePostView.as_view()),
    url(r'^getposts',GetPostsView.as_view()),
    url(r'^getcomments/$',GetCommentsView.as_view()),
    url(r'^getallposts',GetAllPostsView.as_view()),
    url(r'^readpost',ReadPostView.as_view()),
    url(r'^readmessage',ReadMessageView.as_view()),
    url(r'^savepost',SavePostView.as_view()),
    url(r'^subscribe/$',SubscribeView.as_view()),
    url(r'^addcomment',AddCommentView.as_view()),
    url(r'^search/', include('haystack.urls')),
    url(r'^confirm/',SendConfirmationEmailView.as_view()),
    url(r'^outgoing/(?P<sender_id>.+)/$',OutgoingMessagesList.as_view()),
    url(r'^outgoing/$',OutgoingMessagesList.as_view()),
    url(r'^incoming/(?P<receiver_id>.+)/$',IncomingMessagesList.as_view()),
    url(r'^pastpayments/(?P<user_id>.+)/$',PaymentsList.as_view()),
    url(r'^pastpayments/', PastPaymentsList.as_view()),
    url(r'^packagelist/$', PackageList.as_view()),
    url(r'^servicelist/$', ServiceList.as_view()),
    url(r'^incoming/$',IncomingMessagesList.as_view()),
#    url(r'^divorse/$', 'custom.gui.views.divorce'),
#    url(r'^pricing/$', 'custom.gui.views.pricing'),
#    url(r'^chat/', include('chatrooms.urls')),
    url(r'^search/$', GlobalSearchList.as_view(), name="search"),
    url(r'^searchresults/$',GetSearchResultsView.as_view(),name="searchresults"),
    url(r'^services/(?P<service>[^/]+)/$', custom.gui.views.services),
    url(r'^blog/$',custom.gui.views.post),
    url(r'^blog/(?P<page>[^/]+)/$',custom.gui.views.posts),
    url(r'^blog/',custom.gui.views.post),


    url(r'^about/',custom.gui.views.about),
    url(r'^aboutus/',custom.gui.views.about),
    url(r'^activate/(?P<activation_key>\w+)/',custom.signup.views.activate),
    url(r'^confirm/',custom.signup.views.confirm),
    url(r'^resendactivation/', resend_activation_view),
    url(r'^qualify/',custom.gui.views.check_qualify),
    url(r'^contacts/', custom.gui.views.contact),
    url(r'^contact/', custom.gui.views.contact),
    url(r'^payments/', custom.gui.views.payment),
    url(r'^payment/', custom.gui.views.payment),
    url(r'^pricing/', custom.gui.views.pricing),
    url(r'^prices/', custom.gui.views.pricing),  
    url(r'^ask/', custom.gui.views.ask),
    url(r'^api/$',include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls)),
    url(r'^rss/', RssSiteNewsFeed()),
    url(r'^atom/', AtomSiteNewsFeed()),
    url(r'^confirmaccount/',confirm_account_view),
    url(r'^$',custom.gui.views.home),
    url(r'^dashboard/$', custom.gui.views.dashboard),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^deletecomment/',DeleteCommentView.as_view()),
    url(r'^savecomment/$',SaveCommentView.as_view()),
    url(r'^sendmessage/$',SendMessageView.as_view()),
    url(r'^updatemessage/',UpdateMessageView.as_view()),
    url(r'^deletemessage/',DeleteMessageView.as_view()),

    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
