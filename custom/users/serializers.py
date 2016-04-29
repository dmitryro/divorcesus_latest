from rest_framework import serializers
from rest_framework import generics

from models import Contact
from models import Address
from models import StateProvince
from models import Profile


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

