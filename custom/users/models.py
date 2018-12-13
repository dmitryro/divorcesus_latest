from __future__ import unicode_literals

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from django.db import models
from django.contrib.auth.models import User
from django.utils.encoding import python_2_unicode_compatible
from redactor.fields import RedactorField
from datetime import date
from datetime import datetime
# Datetime related imports

# Calculate the current date
today = date.today()
repo_date = date(today.year, today.month, today.day)
migration = True


class UserActivation(models.Model):
    activation_key = models.CharField(max_length=250, blank=True, null=True)
    date_used = models.DateTimeField(auto_now_add=True)
    user_id = models.IntegerField()

    class Meta:
        verbose_name = 'User Activation'
        verbose_name_plural = 'User Activations'


class UserSession(models.Model):
    username = models.CharField(max_length=200, blank=True, null=True)
    remote_ip = models.CharField(max_length=20, blank=True, null=True)
    session_key = models.CharField(max_length=200, blank=True, null=True)
    user = models.ForeignKey(User, blank=False, null=False)
    time_in = models.DateTimeField(auto_now_add=True)
    time_out = models.DateTimeField('Time Logged Out', blank=True, null=True)
    time_online_hours = models.IntegerField(default=0, blank=True, null=True)
    time_online_minutes = models.IntegerField(default=0, blank=True, null=True)
    time_online_seconds = models.IntegerField(default=0, blank=True, null=True)
    time_online_total = models.CharField(max_length=200, blank=True, null=True)
    time_online_delta = models.FloatField(default=0, blank=True, null=True)
    date_visited = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = 'Session'
        verbose_name_plural = 'Sessions'


class SocialMedium(models.Model):
    medium = models.CharField(max_length=20, blank=True, null=True)
    code = models.CharField(max_length=20, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        verbose_name = 'Social Medium'
        verbose_name_plural = 'Social Mediums'


@python_2_unicode_compatible
class SocialFriend(models.Model):
    username = models.CharField(max_length=250, blank=True, null=True)
    full_name = models.CharField(max_length=250, blank=True, null=True)
    first_name = models.CharField(max_length=250, blank=True, null=True)
    last_name = models.CharField(max_length=250, blank=True, null=True) 
    email = models.EmailField(max_length=250, blank=True, null=True)
    date_connected = models.DateField("Date Connected", blank=True, null=True)
    profile_picture = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        verbose_name = 'Social Friend'
        verbose_name_plural = 'Social Friends'

    def __str__(self):
        return self.username

    def __unicode__(self):
        return unicode(self.username)

    def __getitem__(self, items):
        return self.username


class Group(models.Model):
    pass


"""
 Contact Model
"""


class Contact(models.Model):
    name = models.CharField(max_length=250, blank=True, null=True)
    time_contacted = models.DateTimeField(auto_now_add=True)
    subject = models.CharField(max_length=450, blank=True, null=True)
    phone = models.CharField(max_length=250, blank=True, null=True)
    email = models.CharField(max_length=250, blank=True, null=True)
    message = models.CharField(max_length=450, blank=True, null=True)

    class Meta:
        verbose_name = 'User Contact'
        verbose_name_plural = 'User Contacts'


class StateProvince(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    abbreviation = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        verbose_name = 'State or Province'
        verbose_name_plural = 'States or Provinces' 




class Address(models.Model):
    address1 = models.CharField(max_length=250, blank=True, null=True)
    address2 = models.CharField(max_length=250, blank=True, null=True)
    city = models.CharField(max_length=250, blank=True, null=True)
    state_province = models.ForeignKey(StateProvince, blank=True,null=True)
    country = models.CharField(max_length=200, blank=True, null=True)
    postal_zip = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        verbose_name = 'Address'
        verbose_name_plural = 'Addresses'


class Profile(models.Model):
    user = models.OneToOneField(User, blank=True, null=True, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=250, blank=True, null=True)
    last_name = models.CharField(max_length=250, blank=True, null=True)
    email = models.CharField(max_length=250, blank=True, null=True)
    username = models.CharField(max_length=250, blank=True, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    profile_image_path = models.CharField(max_length=250, blank=True, 
                                          null=True, 
                                          default='/media/avatars/default.png')
    phone = models.CharField(max_length=250, blank=True, null=True,default='')
    address = models.ForeignKey(Address, blank=True, null=True)
    twitter_uid = models.CharField(max_length=250, blank=True, null=True,default='')
    is_new = models.NullBooleanField(default=True, blank=True, null=True)
    activation_sent = models.NullBooleanField(default=False, blank=True, null=True)
    is_activated = models.NullBooleanField(default=False, blank=True, null=True)
    is_avatar_processed = models.BooleanField(default=False, blank=True)
    is_avatar_transfered = models.BooleanField(default=False, blank=True)
    is_signature_customized = models.BooleanField(default=False, blank=True)
    is_notification_sent = models.NullBooleanField(default=False, blank=True, null=True)
    is_online = models.BooleanField(default=False, blank=True)
    is_confirmed = models.NullBooleanField(default=False, blank=True, null=True)
    is_cleared = models.BooleanField(default=False, blank=True)
    is_facebook_signup_used = models.BooleanField(default=False, blank=True)
    is_google_signup_used = models.BooleanField(default=False, blank=True)
    is_twitter_signup_used = models.BooleanField(default=False, blank=True)
    is_linkedin_signup_used = models.BooleanField(default=False, blank=True)
    is_username_customized = models.BooleanField(default=False, blank=True)
    is_user_avatar = models.BooleanField(default=False, blank=True)
    is_google_avatar = models.BooleanField(default=False, blank=True)
    is_facebook_avatar = models.BooleanField(default=False, blank=True)        
    is_twitter_avatar = models.BooleanField(default=False, blank=True)
    activation_key =  models.CharField(max_length=250, blank=True, null=True,default='')

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'      


@python_2_unicode_compatible
class AboutUs(models.Model):
    title = models.CharField(max_length=150, blank=True)
    subtitle = models.CharField(max_length=150, blank=True)
    body = models.CharField(max_length=1500, blank=True)
    avatar = models.ImageField(upload_to='avatars')
    avatar_thumbnail = ImageSpecField(source='avatar',
                                      processors=[ResizeToFill(100, 50)],
                                      format='JPEG',
                                      options={'quality': 60})
 
    class Meta:
        verbose_name = 'About Us'
        verbose_name_plural = 'About Us'


    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return "/aboutus/%s/" % self.title

 #   def __unicode__(self):
 #       return unicode(self.title)


class TeamMember(models.Model):
    user = models.OneToOneField(User,parent_link=True,
                                related_name='dv_user')
    username = models.CharField(max_length=140, blank=True)
    is_partner = models.NullBooleanField(default=False, 
                                         blank=True, null=True)
    is_associate = models.NullBooleanField(default=False, 
                                           blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True)
    first_name = models.CharField(max_length=140, blank=True)
    last_name = models.CharField(max_length=140, blank=True)
    title = models.CharField(max_length=140, blank=True)
    bio = models.CharField(max_length=1500, blank=True)
    avatar = models.ImageField(upload_to='avatars')
    avatar_thumbnail = ImageSpecField(source='avatar',
                                      processors=[ResizeToFill(100, 50)],
                                      format='JPEG',
                                      options={'quality': 60})

    class Meta:
        verbose_name = 'Team Members'
        verbose_name_plural = 'Team Members'

    def __str__(self):
        return self.first_name+" "+self.last_name

    def __unicode__(self):
        return unicode(self.first_name+" "+self.last_name)


class Testimonial(models.Model):
    user = models.ForeignKey(User, blank=False, null=False)
    username = models.CharField(max_length=140, blank=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True)
    first_name = models.CharField(max_length=140, blank=True)
    last_name = models.CharField(max_length=140, blank=True)
    body = models.CharField(max_length=1500, blank=True, null=True) 
    date_published = models.DateTimeField(auto_now_add=True)
    link = models.CharField(max_length=1500, blank=True, null=True)
    link_title = models.CharField(max_length=140, blank=True)
    avatar = models.ImageField(upload_to='avatars')
    avatar_thumbnail = ImageSpecField(source='avatar',
                                      processors=[ResizeToFill(100, 50)],
                                      format='JPEG',
                                      options={'quality': 60})


    @property
    def name(self):
        return "{} {}".format(self.first_name, self.last_name)

    class Meta:
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'

    def __str__(self):
        return self.first_name+" "+self.last_name

    def __unicode__(self):
        return unicode(self.first_name+" "+self.last_name)


class MileStone(models.Model):
    title = models.CharField(max_length=140, blank=True, null=True)
    year = models.CharField(max_length=140, blank=True, null=True)
    body = models.CharField(max_length=1500, blank=True, null=True)

    class Meta:
        verbose_name = 'Milestone'
        verbose_name_plural = 'Milestones'

    def __str__(self):
        return self.title


class Advantage(models.Model):
    title = models.CharField(max_length=140, blank=True, null=True)
    section_one = RedactorField(verbose_name=u'Section One',
                                null=True, blank=True, default='')

    section_two = RedactorField(verbose_name=u'Section Two',
                                null=True, blank=True, default='')

    section_three = RedactorField(verbose_name=u'Section Three',
                                  null=True, blank=True, default='')

    class Meta:
        verbose_name = 'Advantage'
        verbose_name_plural = 'Advantage'

    def __str__(self):
        return self.title


class AdvantageLink(models.Model):
    advantage = models.ForeignKey(Advantage, blank=False, null=False)
    title = models.CharField(max_length=140, blank=True, null=True)
    link = models.CharField(max_length=1500, blank=True, null=True)

    class Meta:
        verbose_name = 'Advantage Link'
        verbose_name_plural = 'Advantage Links'

    def __str__(self):
        return self.title
