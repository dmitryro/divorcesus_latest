from __future__ import unicode_literals
from datetime import datetime
from enum import Enum
from django.contrib.auth.models import User
from django.db import models
from custom.payments.models import Address

class Country(models.Model):
    name = models.CharField(max_length=150,blank=True,null=True)
    abbreviation = models.CharField(max_length=150,blank=True,null=True)

    class Meta:
        verbose_name = 'Country'
        verbose_name_plural = 'Countries'

class Children(models.Model):
    number = models.CharField(max_length=150, blank=True, null=True)
    value = models.CharField(max_length=150, blank=True, null=True)
    numeric = models.IntegerField(default=0, blank=True, null=True) 

    class Meta:
        verbose_name = 'Children'
        verbose_name_plural = 'Children'


class MaritalStatus(models.Model):
    status = models.CharField(max_length=200, blank=True, null=True)
    code = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Marital Status'
        verbose_name_plural = 'Marital Statuses'

class StatusChoice(models.Model):
    status = models.CharField(max_length=200, blank=True, null=True)
    code = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Status Choice'
        verbose_name_plural = 'Status Choices'


class Consultation(models.Model):
    user = models.ForeignKey(User, blank=True, null=True)
    time_placed = models.DateTimeField(default=datetime.now, blank=True)
    status = models.ForeignKey(StatusChoice, blank=True, null=True)
    manner_of_entry = models.CharField(max_length=200, blank=True, null=True)
    marital_status = models.ForeignKey(MaritalStatus, blank=True, null=True)
    number_of_children = models.ForeignKey(Children, blank=True, null=True)
    invoice = models.CharField(max_length=200, blank=True, null=True)
    name_on_card = models.CharField(max_length=200, blank=True, null=True)
    full_name = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=200, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    purpose = models.TextField(blank=True, null=True) 
    billing_address = models.ForeignKey(Address, related_name='billing_address', blank=True, null=True)
    country_of_citizenship = models.ForeignKey(Country, blank=True, null=True)
    individual_address = models.ForeignKey(Address, related_name='individual_address', blank=True, null=True)
    use_billing = models.NullBooleanField(default=True, blank=True, null=True)  
    date_of_birth = models.DateTimeField(blank=True, null=True) 
    time_responded = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = 'Online Consultation'
        verbose_name_plural = 'Online Consultations'

