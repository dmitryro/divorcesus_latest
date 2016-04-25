from __future__ import unicode_literals

from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=250,blank=True, null=True)
    time_contacted = models.DateTimeField(auto_now_add=True)
    phone =  models.CharField(max_length=250,blank=True, null=True)
    email =  models.CharField(max_length=250,blank=True, null=True)
    message =   models.CharField(max_length=450,blank=True, null=True)

    class Meta:
        verbose_name = 'User Contact'
        verbose_name_plural = 'User Contacts'

