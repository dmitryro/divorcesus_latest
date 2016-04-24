from django.contrib import admin
from models import MetaProp
from models import ContactMetaProp
from models import ProfileMetaProp

################################
#  Register with Django Admin  #
################################

class MetaPropAdmin(admin.ModelAdmin):
    fields = ('title','keywords','description','author','analytics')
    class Meta:
         verbose_name = 'Meta Property'
         verbose_name_plural = 'Meta Properties'


class ContactMetaPropAdmin(admin.ModelAdmin):
    fields = ('title','address1','address2','from_email','to_email','city','zip','state','phone','fax','hours','days','note')

class ProfileMetaPropAdmin(admin.ModelAdmin):
    fields = ('title','email','from_email','to_email','to_email_secondary','to_email_third','smtp_server','smtp_port','user_name','password','message')
    def formfield_for_dbfield(self, db_field, **kwargs):
        formfield = super(ProfileMetaPropAdmin, self).formfield_for_dbfield(db_field, **kwargs)
        if db_field.name == 'message':
            formfield.widget = forms.Textarea(attrs=formfield.widget.attrs)
        return formfield

admin.site.register(MetaProp)
admin.site.register(ContactMetaProp)
admin.site.register(ProfileMetaProp)


# Register your models here.
