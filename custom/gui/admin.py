from django.contrib import admin
from models import Slide

class SlideAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['title','text','link','slide']}),)
    list_display = ('id','title','text','link','slide_thumbnail')
    list_editable = ('title','text','link')

    class Meta:
         verbose_name = 'Slide'
         verbose_name_plural = 'Slides'



admin.site.register(Slide,SlideAdmin)
