from django.contrib import admin

from models import ServicePackage


class ServicePackageAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['title','fees','price','service_one','service_one_is_available',
                                    'service_two','service_two_is_available','service_three','service_three_is_available','service_four','service_four_is_available','service_five',
                                    'service_five_is_available','service_six','service_six_is_available','service_seven','service_seven_is_available','service_eight',
                                    'service_eight_is_available','service_nine','service_nine_is_available','service_ten','service_ten_is_available','service_eleven','service_eleven_is_available',
                                    'service_twelve','service_twelve_is_available','service_thirteen','service_thirteen_is_available','service_fourteen','service_fourteen_is_available','service_fifteen',
                                    'service_fifteen_is_available','service_sixteen','service_sixteen_is_available','service_seventeen','service_seventeen_is_available','service_eighteen','service_eighteen_is_available',
                                    'service_nineteen','service_nineteen_is_available','service_twenty','service_twenty_is_available','service_twentyone','service_twentyone_is_available',
                                    'service_twentytwo','service_twentytwo_is_available']}),)
    list_display = ('title','fees','price')
    list_editable = ('title','fees','price')

    class Meta:
         verbose_name = 'Service Package'
         verbose_name_plural = 'Service Packages'






admin.site.register(ServicePackage,ServicePackageAdmin)




















