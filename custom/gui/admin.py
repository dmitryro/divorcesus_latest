from django.contrib import admin
from models import Slide
from forms import SlideForm
from imagekit.admin import AdminThumbnail

class SlideAdmin(admin.ModelAdmin):
    form = SlideForm
    fieldsets = ((None, {'fields': ['title','text','link','slide']}),)
    list_display = ('id','title','text','link','slide_thumbnail')
    list_editable = ('title','text','link')
    slide_thumbnail = AdminThumbnail(image_field='slide_thumbnail')
    class Meta:
         verbose_name = 'Slide'
         verbose_name_plural = 'Slides'



admin.site.register(Slide,SlideAdmin)
