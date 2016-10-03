from __future__ import unicode_literals

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.db import models
from ckeditor.fields import RichTextField
from tinymce.models import HTMLField
from froala_editor.fields import FroalaField
from redactor.fields import RedactorField

class State(models.Model):
    state = models.CharField(max_length=150, blank=True)
    code = models.CharField(max_length=10, blank=True)

    class Meta:
        verbose_name = 'State'
        verbose_name_plural = 'States'

    def __str__(self):
        return self.state

    def __unicode__(self):
        return unicode(self.state)


class Slide(models.Model):
    title =  models.CharField(max_length=150, blank=True)
    text =  models.CharField(max_length=450, blank=True)
    link = models.CharField(max_length=350, blank=True)
    action = models.CharField(max_length=500, blank=True)
    slide = models.ImageField(upload_to='slides')
    slide_thumbnail = ImageSpecField(source='slide',
                                     processors=[ResizeToFill(100, 50)],
                                     format='JPEG',
                                     options={'quality': 60})

    class Meta:
        verbose_name = 'Slide'
        verbose_name_plural = 'Slide'

    def __str__(self):
        return self.title

    def __unicode__(self):
        return unicode(self.title)


class LogoColor(models.Model):
    color = models.CharField(max_length=150, blank=True, null=True)
    code = models.CharField(max_length=150, blank=True)

    class Meta:
        verbose_name = 'Logo Color'
        verbose_name_plural = 'Logo Colors'

    def __str__(self):
        return self.color

    def __unicode__(self):
        return unicode(self.color)




class Logo(models.Model):
   color = models.ForeignKey(LogoColor,related_name='logo_color',blank=True,null=True)
   logo = models.ImageField(upload_to='logos')
   logo_thumbnail = ImageSpecField(source='logo',
                                   processors=[ResizeToFill(100, 50)],
                                   format='PNG',
                                   options={'quality': 60})
   width = models.IntegerField(default=0,blank=True,null=True)
   height = models.IntegerField(default=0,blank=True,null=True)

   class Meta:
        verbose_name = 'Logo'
        verbose_name_plural = 'Logos'



class ContactInfo(models.Model):
   statement = models.CharField(max_length=450, blank=True)
   address1 = models.CharField(max_length=150, blank=True)
   address2 = models.CharField(max_length=150, blank=True)
   city = models.CharField(max_length=150, blank=True)
   state = models.CharField(max_length=150, blank=True)
   zipcode = models.CharField(max_length=150, blank=True)
   tollfree = models.CharField(max_length=150, blank=True)
   phone = models.CharField(max_length=150, blank=True)
   fax = models.CharField(max_length=150, blank=True)
   email = models.CharField(max_length=150, blank=True)
   header = models.CharField(max_length=150, blank=True)

   class Meta:
        verbose_name = 'Contanct Info'
        verbose_name_plural = 'Contact Info'


class Service(models.Model):
   title = models.CharField(max_length=150, blank=True)
   statement = models.CharField(max_length=450, blank=True)
   description = RedactorField(verbose_name=u'Description',null=True,blank=True,default='')
   service = models.ImageField(upload_to='servces')
   service_thumbnail = ImageSpecField(source='service',
                                     processors=[ResizeToFill(100, 50)],
                                     format='JPEG',
                                     options={'quality': 60})
      

   class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

   def __str__(self):
        return self.title

   def __unicode__(self):
        return unicode(self.title)


class QualifyQuestionnaire(models.Model):

   state =  models.ForeignKey(State,blank=True,null=True)
   does_qualify = models.NullBooleanField(default=False,blank=True,null=True)
   date_avaluated = models.DateTimeField(auto_now_add=True)
   action_taken = models.NullBooleanField(default=False,blank=True,null=True)

   class Meta:
        verbose_name = 'Qualify Questionnaire'
        verbose_name_plural = 'Qualify Questionnaires'



class QualifyQuestion(models.Model):
   html_id = models.CharField(max_length=400,null=True,blank=True)
   questionnaire = models.ForeignKey(QualifyQuestionnaire,blank=True,null=True) 
   question = models.CharField(max_length=550, null=True, blank=True)
   answer = models.NullBooleanField(default=False,blank=True,null=True)

   class Meta:
        verbose_name = 'Question'
        verbose_name_plural = 'Questions'



class FAQ(models.Model):
   question = models.CharField(max_length=1550, blank=True)
   note = models.CharField(max_length=1550, blank=True)
   answer = RedactorField(verbose_name=u'Answer')

   class Meta:
        verbose_name = 'Frequently Asked Question'
        verbose_name_plural = 'Frequently Asked Questions'

   def __str__(self):
        return self.question

   def __unicode__(self):
        return unicode(self.question)

