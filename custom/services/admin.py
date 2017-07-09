from django.contrib import admin

from models import Package
from models import Service

class ServiceAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['title','fees','price','is_available','avatar']}),)
    list_display = ('title','fees','price','avatar')
    list_editable = ('title','fees','price')
    
    class Meta:
         verbose_name = 'Service'
         verbose_name_plural = 'Services'



class PackageAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['title','fees','price','is_available','services']}),)
    list_display = ('title','fees','price',)
    list_editable = ('title','fees','price')

    class Meta:
         verbose_name = 'Service Package'
         verbose_name_plural = 'Service Packages'





admin.site.register(Service, ServiceAdmin)
admin.site.register(Package, PackageAdmin)




















