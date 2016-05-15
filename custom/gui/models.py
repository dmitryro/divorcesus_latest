from __future__ import unicode_literals

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.db import models


class Slide(models.Model):
    title =  models.CharField(max_length=150, blank=True)
    text =  models.CharField(max_length=450, blank=True)
    link = models.CharField(max_length=350, blank=True)
    slide = models.ImageField(upload_to='avatars')
    slide_thumbnail = ImageSpecField(source='avatar',
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


