from django.contrib import admin

# Django imports


from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from custom.users.models import FacebookProfile
from custom.users.models import GooglePlusProfile
from custom.users.models import Profile
from imagekit.admin import AdminThumbnail
from models import TeamMember
from models import AboutUs




class FacebookProfileAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['facebook_id','first_name','last_name','username','profile','time_created','profile_picture','email']}),)
    list_display = ('facebook_id','first_name','last_name','username','profile','email')
    list_editable = ('facebook_id','first_name','last_name','username','profile','email')
     
    class Meta:
         verbose_name = 'Facebook Profile'
         verbose_name_plural = 'Facebook Profiles'






class GooglePlusProfileAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['google_id','first_name','last_name','username','profile','time_created','profile_image_path','email','is_new','is_cleared','activation_key']}),)
    list_display = ('google_id','first_name','last_name','username','profile','email')
    list_editable = ('google_id','first_name','last_name','username','profile','email')

    class Meta:
         verbose_name = 'Google Plus Profile'
         verbose_name_plural = 'Google Plus Profiles'



########################################
#  Register Profile with Django Admin  #
########################################

class ProfileAdmin(admin.ModelAdmin):
    fieldsets = ((None, {'fields': ['username','email',
                                    'is_cleared',
                                    'is_facebook_signup_used','is_google_signup_used','is_linkedin_signup_used','is_username_customized',
                                    'is_twitter_signup_used','is_new',
                                    'first_name','last_name',
                                    'phone','address',
                                    'profile_image_path']}),)

    list_display = ('id','username','user','email','first_name','last_name','date_joined','is_new','profile_image_path')

    list_editable = ('username','user','profile_image_path','email','first_name','last_name','profile_image_path')

    class Meta:
         verbose_name = 'User Profile'
         verbose_name_plural = 'User Profiles'




class CustomUserAdmin(UserAdmin):
    def __init__(self, *args, **kwargs):
        super(UserAdmin,self).__init__(*args, **kwargs)
        UserAdmin.list_display = list(UserAdmin.list_display) + ['id','date_joined', 'last_login','is_active']

    # Function to count objects of each user from another Model (where user is FK)
    def some_function(self, obj):
        return obj.another_model_set.count()


class AboutUsAdmin(admin.ModelAdmin):
    body = forms.CharField( widget=forms.Textarea )
    fieldsets = ((None, {'fields': ['title','subtitle','body','avatar']}),)
    list_display = ('__str__','title','subtitle','body','admin_thumbnail')
    admin_thumbnail = AdminThumbnail(image_field='avatar_thumbnail')

admin.site.register(AboutUs, AboutUsAdmin)


class TeamMemberAdmin(admin.ModelAdmin):
    bio = forms.CharField( widget=forms.Textarea )
    fieldsets = ((None, {'fields': ['username','first_name','last_name','is_associate','is_partner','phone','email','title','bio','avatar']}),)

    list_display = ('__str__','first_name','last_name','is_partner','is_associate','phone','email','title','bio', 'admin_thumbnail')
    admin_thumbnail = AdminThumbnail(image_field='avatar_thumbnail')

admin.site.register(TeamMember, TeamMemberAdmin)

#admin.site.register(ProfileStats,ProfileStatsAdmin)
admin.site.register(Profile,ProfileAdmin)
admin.site.register(FacebookProfile,FacebookProfileAdmin)
admin.site.register(GooglePlusProfile,GooglePlusProfileAdmin)

# Now register the new UserAdmin...
# ... and, since we're not using Django's built-in permissions,
# unregister the Group model from admin.
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)
admin.site.unregister(Group)
