from __future__ import unicode_literals

from django.db import models

class ServicePackage(models.Model):
   title = models.CharField(max_length=200,blank=True,null=True)
   fees = models.FloatField(default=0,blank=True,null=True)
   price = models.FloatField(default=0,blank=True,null=True)
   service_one = models.CharField(max_length=200,blank=True,null=True)
   service_one_is_available = models.NullBooleanField(default=True,blank=True,null=True)  
   service_two = models.CharField(max_length=200,blank=True,null=True)
   service_two_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_three = models.CharField(max_length=200,blank=True,null=True)
   service_three_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_four = models.CharField(max_length=200,blank=True,null=True)
   service_four_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_five = models.CharField(max_length=200,blank=True,null=True)
   service_five_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_six = models.CharField(max_length=200,blank=True,null=True)
   service_six_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_seven = models.CharField(max_length=200,blank=True,null=True)
   service_seven_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_eight = models.CharField(max_length=200,blank=True,null=True)
   service_eight_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_nine = models.CharField(max_length=200,blank=True,null=True)
   service_nine_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_ten = models.CharField(max_length=200,blank=True,null=True)
   service_ten_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_eleven = models.CharField(max_length=200,blank=True,null=True)
   service_eleven_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_twelve = models.CharField(max_length=200,blank=True,null=True)
   service_twelve_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_thirteen = models.CharField(max_length=200,blank=True,null=True)
   service_thirteen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_fourteen = models.CharField(max_length=200,blank=True,null=True)
   service_fourteen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_fifteen = models.CharField(max_length=200,blank=True,null=True)
   service_fifteen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_sixteen = models.CharField(max_length=200,blank=True,null=True)
   service_sixteen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_seventeen = models.CharField(max_length=200,blank=True,null=True)
   service_seventeen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_eighteen = models.CharField(max_length=200,blank=True,null=True)
   service_eighteen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_nineteen = models.CharField(max_length=200,blank=True,null=True)
   service_nineteen_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_twenty = models.CharField(max_length=200,blank=True,null=True)
   service_twenty_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_twentyone = models.CharField(max_length=200,blank=True,null=True)
   service_twentyone_is_available = models.NullBooleanField(default=True,blank=True,null=True)
   service_twentytwo = models.CharField(max_length=200,blank=True,null=True)
   service_twentytwo_is_available = models.NullBooleanField(default=True,blank=True,null=True)

   def __str__(self):
        return self.title


   class Meta:
        verbose_name = 'Service Package'
        verbose_name_plural = 'Service Packages'  


















  
   
# Create your models here.
