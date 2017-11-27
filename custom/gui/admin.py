from django import forms
from django.contrib import admin
from models import Slide
from models import Logo
from models import LogoColor
from models import ContactInfo
from models import Service
from models import FAQ
from models import State
from models import QualifyQuestion
from models import QualifyQuestionnaire
from forms import SlideForm
from forms import ContactInfoForm
from forms import ServiceForm
from forms import FAQForm
from imagekit.admin import AdminThumbnail
from ckeditor.widgets import CKEditorWidget
from django.db import models
from wymeditor.models import WYMEditorField
from wymeditor.widgets import AdminWYMEditorArea


class QualifyQuestionnaireAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['state','action_taken','does_qualify']}),)
    list_display = ('id','state','action_taken','does_qualify')
    list_editable = ('state','action_taken','does_qualify')

    class Meta:
         verbose_name = 'Questionnaire'
         verbose_name_plural = 'Questionnaires'


class QualifyQuestionAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['questionnaire','question','answer','html_id']}),)
    list_display = ('id','questionnaire','question','answer','html_id')
    list_editable = ('questionnaire','question','answer','html_id')

    class Meta:
         verbose_name = 'Question'
         verbose_name_plural = 'Questions'


class StateAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['state','code']}),)
    list_display = ('id','state','code')
    list_editable = ('state','code')

    class Meta:
         verbose_name = 'State'
         verbose_name_plural = 'States'


class SlideAdmin(admin.ModelAdmin):

    form = SlideForm
    fieldsets = ((None, {'fields': ['title','text','link','action','slide']}),)
    list_display = ('id','title','text','link','action','slide_thumbnail')
    list_editable = ('title','text','link','action')
    slide_thumbnail = AdminThumbnail(image_field='slide_thumbnail')

    class Meta:
         verbose_name = 'Slide'
         verbose_name_plural = 'Slides'



class ServiceAdmin(admin.ModelAdmin):
    content = forms.CharField(widget=CKEditorWidget())
    form = ServiceForm
    fieldsets = ((None, {'fields': ['title','statement','description','service']}),)
    list_display = ('id','title','statement','description','service_thumbnail')
    list_editable = ('title','statement')
    service_thumbnail = AdminThumbnail(image_field='service_thumbnail')


#    formfield_overrides = {
#        WYMEditorField: {'widget': AdminWYMEditorArea},
#    }
    class Meta:
         verbose_name = 'Service'
         verbose_name_plural = 'Services'

class FAQAdmin(admin.ModelAdmin):

    form = FAQForm
    fieldsets = ((None, {'fields': ['question','note','answer']}),)
    list_display = ('id','question','note','answer',)
    list_editable = ('question','note','answer')
#    formfield_overrides = { models.TextField: {'widget': forms.Textarea(attrs={'class':'ckeditor'})}, }


    class Media:
         js = ('static/ckeditor/ckeditor/ckeditor.js',)

    class Meta:
         verbose_name = 'Frequently Asked Questions'
         verbose_name_plural = 'Frequently Asked Questions'


class LogoColorAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['color','code']}),)
    list_display = ('id','color','code')
    list_editable = ('color','code')

    class Meta:
         verbose_name = 'Logo Color'
         verbose_name_plural = 'Logo Colors'



class LogoAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['logo','color','height','width']}),)
    list_display = ('id','color','height','width','logo_thumbnail')
    list_editable = ('color','height','width',)
    logo_thumbnail = AdminThumbnail(image_field='logo_thumbnail')

    class Meta:
         verbose_name = 'Logo'
         verbose_name_plural = 'Logos'

class ContactInfoAdmin(admin.ModelAdmin):

    form = ContactInfoForm
    fieldsets = ((None, {'fields': ['header','address1','address2','city','state','zipcode','tollfree','phone','fax','email','statement']}),)
    list_display = ('id','header','address1','address2','city','state','zipcode','tollfree','phone','fax','email','statement')
    list_editable = ('header','address1','address2','city','state','zipcode','tollfree','phone','fax','email','statement')

    class Meta:
         verbose_name = 'Contact Info'
         verbose_name_plural = 'Contact Info'


admin.site.register(QualifyQuestionnaire, QualifyQuestionnaireAdmin)
admin.site.register(QualifyQuestion, QualifyQuestionAdmin)
admin.site.register(State, StateAdmin)
admin.site.register(FAQ, FAQAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(ContactInfo, ContactInfoAdmin)
admin.site.register(Logo, LogoAdmin)
admin.site.register(LogoColor, LogoColorAdmin)
admin.site.register(Slide, SlideAdmin)
