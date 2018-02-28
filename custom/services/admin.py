from django.contrib import admin

from models import Package
from models import Service

from forms import PackageForm
from forms import ServiceForm

class ServiceAdmin(admin.ModelAdmin):
    form = ServiceForm
    fieldsets = ((None, {'fields': ['title','fees','price','is_available','avatar', 'description']}),)
    list_display = ('title','fees','price','avatar')
    list_editable = ('title','fees','price')
    
    class Meta:
         verbose_name = 'Service'
         verbose_name_plural = 'Services'



class PackageAdmin(admin.ModelAdmin):
    form = PackageForm
    fieldsets = ((None, {'fields': ['title','fees','price','is_available','services', 'description']}),)
    list_display = ('title','fees','price',)
    list_editable = ('title','fees','price')

    class Meta:
         verbose_name = 'Service Package'
         verbose_name_plural = 'Service Packages'





admin.site.register(Service, ServiceAdmin)
admin.site.register(Package, PackageAdmin)




















