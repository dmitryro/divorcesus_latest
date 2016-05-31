from __future__ import unicode_literals

from django.db import models

class State(models.Model):
    name = models.CharField(max_length=150,blank=True,null=True)
    abbreviation = models.CharField(max_length=150,blank=True,null=True)


class Address(models.Model):
    address1 = models.CharField(max_length=150,blank=True,null=True)
    address2 = models.CharField(max_length=150,blank=True,null=True)
    city  = models.CharField(max_length=150,blank=True,null=True)
    state = models.ForeignKey(State,blank=True,null=True)
 
