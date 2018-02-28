from __future__ import unicode_literals

from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill


class Service(models.Model):
   title = models.CharField(max_length=200,blank=True,null=True)
   fees = models.FloatField(default=0,blank=True,null=True)
   price = models.FloatField(default=0,blank=True,null=True)
   is_available = models.NullBooleanField(default=True,blank=True,null=True)
   description = models.TextField(blank=True,null=True)
   avatar = models.ImageField(upload_to='avatars', blank=True, null=True)
   avatar_thumbnail = ImageSpecField(source='avatar',
                                     processors=[ResizeToFill(100, 50)],
                                     format='JPEG',
                                     options={'quality': 60})

  
   def __str__(self):
        return self.title

   class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'


class Package(models.Model):
   title = models.CharField(max_length=200,blank=True,null=True)
   fees = models.FloatField(default=0,blank=True,null=True)
   price = models.FloatField(default=0,blank=True,null=True)
   is_available = models.NullBooleanField(default=True,blank=True,null=True)  
   description = models.TextField(blank=True,null=True)
   services = models.ManyToManyField(Service,related_name='services',
                                     symmetrical=False)

   def __str__(self):
        return self.title


   class Meta:
        verbose_name = 'Service Package'
        verbose_name_plural = 'Service Packages'  


















  
   
# Create your models here.
