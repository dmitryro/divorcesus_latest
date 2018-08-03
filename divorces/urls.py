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
from django.contrib.sitemaps import GenericSitemap
from django.contrib.sitemaps.views import sitemap
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

from custom.consult.views import ChildrenViewSet
from custom.consult.views import MaritalStatusViewSet
from custom.consult.views import process_consultation_view
from custom.gui.models import Service, FAQ
from custom.gui.sitemaps import StaticViewSitemap
from custom.gui.views import resend_activation_view
from custom.gui.views import confirm_account_view
from custom.gui.views import GlobalSearchList
from custom.gui.views import DashboardLogoutView
from custom.gui.views import GetSearchResultsView
from custom.gui.views import ServiceViewSet
from custom.gui.views import CountryViewSet
from custom.gui.views import AskTemplateViewSet
from custom.gui.views import ConsultationTypeViewSet
from custom.signup.views import SendEmailView
from custom.signup.views import SubscribeView
from custom.signup.views import logout_view
from custom.blog.models import Post, Comment
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
from custom.blog.sitemap import PostSitemap, CommentsSitemap
from custom.users.sitemap import AboutUsSitemap, ContactUsSitemap
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
from custom.payments.models import Address
from custom.payments.views import PaymentsList
from custom.payments.views import PastPaymentsList
from custom.payments.views import AddressList
from custom.payments.views import AddressViewSet
from custom.payments.views import CardTypeViewSet
from custom.payments.views import add_address_view
from custom.payments.views import delete_address_view
from custom.payments.views import read_addresses_view
from custom.payments.views import send_confirmation_view
from custom.payments.views import save_payment_method_view
from custom.payments.views import read_payment_methods_view
from custom.payments.views import checkout
from custom.services.views import ServiceViewSet
from custom.services.views import PackageViewSet
from custom.services.views import PackageTypeViewSet
from custom.services.views import ServiceList
from custom.services.views import PackageList
from custom.users.views import StateProvinceList
from custom.users.views import StateProvinceViewSet
from custom.users.views import AboutUsList
from custom.users.views import AboutUsViewSet
from custom.users.views import TeamMemberViewSet
from custom.users.views import TeamMemberList
from custom.users.models import AboutUs
import custom

payments_dict = {
    'queryset': Address.objects.all(),
    'bio': 'bio',
    'time_published': 'time_published',
}

services_dict = { 
    'queryset': Service.objects.all(),
    'bio': 'bio',
    'time_published': 'time_published',
}

faq_dict = {
    'queryset': FAQ.objects.all(),
    'bio': 'bio',
    'time_published': 'time_published',
}

about_dict = {
    'queryset': AboutUs.objects.all(),
    'bio': 'bio',
    'time_published': 'time_published',
}

blog_dict = {
    'queryset': Post.objects.all(),
    'title': 'title',
    'time_published': 'time_published',
}

contact_dict = {
    'queryset': AboutUs.objects.all(),
    'bio': 'bio',
    'time_published': 'time_published',
}


comments_dict = {
    'queryset': Comment.objects.all(),
    'title': 'title',
    'time_published': 'time_published',
}

# Dictionary containing your sitemap classes
sitemaps = {
   'contacts': ContactUsSitemap,
   'contact': ContactUsSitemap,
#   'posts': PostSitemap,
#   'comments': CommentsSitemap,
#   'aboutus': AboutUsSitemap,
   'static': StaticViewSitemap,
}
router = routers.DefaultRouter()


admin.autodiscover()
#router.register(r'bushwick',BushwickArtistViewSet)
router.register(r'marital', MaritalStatusViewSet)
router.register(r'children', ChildrenViewSet)
router.register(r'countries', CountryViewSet)
router.register(r'states', StateProvinceViewSet)
router.register(r'cardtypes', CardTypeViewSet)
router.register(r'msgsettings', MessagingSettingsViewSet)
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'notificationtypes', NotificationTypeViewSet)
router.register(r'notifications', NotificationViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'allservices', ServiceViewSet)
router.register(r'packages', PackageViewSet)
router.register(r'packagetypes', PackageTypeViewSet)
router.register(r'addresses', AddressViewSet)
router.register(r'aboutprofiles', AboutUsViewSet)
router.register(r'teammembers', TeamMemberViewSet)
router.register(r'asktemplates', AskTemplateViewSet)
router.register(r'consulttypes', ConsultationTypeViewSet)

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
    url(r'^states/(?P<abbreviation>.+)/$', StateProvinceList.as_view()),
    url(r'^userlist/(?P<username>.+)/$', UserList.as_view()),
    url(r'^aboutuslist/(?P<title>.+)/$', AboutUsList.as_view()),
    url(r'^aboutuslist/(?P<subtitle>.+)/$', AboutUsList.as_view()),
    url(r'^aboutuslist/(?P<body>.+)/$', AboutUsList.as_view()),
    url(r'^addresseslist/(?P<username>.+)/$', AddressList.as_view()),
    url(r'^addresseslist/(?P<nickname>.+)/$', AddressList.as_view()),
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
    #url(r'^froala_editor/', include('froala_editor.urls')),
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
    url(r'^consult/', process_consultation_view),
    url(r'^search/', include('haystack.urls')),
    url(r'^qualifyconfirm/$', send_confirmation_view),
    url(r'^paymentconfirm/$', send_confirmation_view),
    url(r'^deletecomment/',DeleteCommentView.as_view()),
    url(r'^savecomment/$',SaveCommentView.as_view()),
    url(r'^sendmessage/',SendMessageView.as_view()),
    url(r'^updatemessage/',UpdateMessageView.as_view()),
    url(r'^deletemessage/',DeleteMessageView.as_view()),
    url(r'^outgoing/$', outgoing_messages_view),
    url(r'^incoming/$', incoming_messages_view),
    url(r'^addbilling/$', add_address_view),
    url(r'^deletebilling/$', delete_address_view),
    url(r'^readbilling/$', read_addresses_view),
    url(r'^duplication/$', msg_duplication_view),
    url(r'^pastpayments/(?P<user_id>.+)/$', PaymentsList.as_view()),
    url(r'^msgsettings/(?P<user_id>.+)/$', MessagingSettingsList.as_view()),
    url(r'^tmlist/$', TeamMemberList.as_view()),
    url(r'^pastpayments/', PastPaymentsList.as_view()),
    url(r'^packagelist/$', PackageList.as_view()),
    url(r'^servicelist/$', ServiceList.as_view()),
    url(r'^incoming/$',IncomingMessagesList.as_view()),
    url(r'^checkout/$', checkout),
    url(r'^accounts/login/?next=/signout/$',custom.gui.views.home),
    url(r'^accounts/login/$',custom.gui.views.home),
    url(r'^login/linkedin/$',custom.gui.views.home),
    url(r'^login/linkedin/',custom.gui.views.home),
    url(r'^toast/$', custom.gui.views.toast),
    url(r'^signout/$', custom.gui.views.logout),
    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    #url(r'^froala_editor/', include('froala_editor.urls')),
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
    url(r'^blog/$',custom.gui.views.post),
    url(r'^blog/',custom.gui.views.blog, name='blog'),
    url(r'^blogs/(?P<blog_id>\w+)/',custom.gui.views.blogs, name='blogs'),
    url(r'^services/$',custom.gui.views.allservices),
    url(r'^services/(?P<service>[^/]+)/$', custom.gui.views.services),
    url(r'^about/',custom.gui.views.about, name='about'),
    url(r'^aboutus/',custom.gui.views.about, name='aboutus'),
    url(r'^activate/(?P<activation_key>\w+)/',custom.signup.views.activate),
    url(r'^confirm/',custom.signup.views.confirm),
    url(r'^resendactivation/', resend_activation_view),
    url(r'^qualify/',custom.gui.views.check_qualify),
    url(r'^contacts/', custom.gui.views.contact, name='contacts'),
    url(r'^contact/', custom.gui.views.contact, name='contact'),
    url(r"^payments/", include("pinax.stripe.urls")),
    #url(r'^payments/', custom.gui.views.payment),
    url(r'^payment/', custom.gui.views.payment),
    url(r'^pricing/', custom.gui.views.pricing),
    url(r'^prices/', custom.gui.views.pricing),  
    url(r'^ask/', custom.gui.views.ask),
    url(r'^faq/', custom.gui.views.faq, name='faq'),
    url(r'^frequentlyasked/', custom.gui.views.faq, name='frequentlyasked'),
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
    url(r'^savepaymentmethod/$', save_payment_method_view),
    url(r'^readpaymentmethods/$', read_payment_methods_view),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'zebra/',   include('zebra.urls',  namespace="zebra",  app_name='zebra') ),
   # url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    url(r'^sitemap\.xml$', sitemap,
        {'sitemaps':
                      {'blog': GenericSitemap(blog_dict, priority=0.7), 
                       'faq':  GenericSitemap(faq_dict, priority=0.7),
                       'comments': GenericSitemap(comments_dict, priority=0.7),
                       'contact': GenericSitemap(contact_dict, priority=0.7),
                       'contactus':GenericSitemap(contact_dict, priority=0.7),
                       'about': GenericSitemap(about_dict, priority=0.7),
                       'payments': GenericSitemap(payments_dict, priority=0.7),
                       'services': GenericSitemap(services_dict, priority=0.7),}
        },
        name='django.contrib.sitemaps.views.sitemap'),
    #url(r'^sitemap\.xml$', 'django.contrib.sitemaps.views.sitemap', {'sitemaps': sitemaps})
   # url(r'^sitemap\.xml$', sitemap,
   #     {'sitemaps': {'blog': StaticViewSitemap(info_dict, priority=0.6)}},
   #     name='django.contrib.sitemaps.views.sitemap'),
]
