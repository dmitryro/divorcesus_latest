from __future__ import unicode_literals
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework import generics

from models import Contact
from models import Address
from models import StateProvince
from models import Profile
from models import TeamMember
from models import AboutUs


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','first_name','last_name')

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ('id', 'title', 'subtitle', 'body',)

class StateProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = StateProvince
        fields = ('id','name','abbreviation')   

class AddressSerializer(serializers.ModelSerializer):
    state = StateProvinceSerializer(many=False,read_only=True)
    class Meta:
        model = Address
        fields = ('id','state','address1','address2','city','postal_zip','country')

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id','email')

class TeamMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = TeamMember
        fields = ('id', 'user', 'username', 'first_name', 'last_name', 'title', 'bio', 'avatar')

