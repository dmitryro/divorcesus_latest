from rest_framework import serializers
from rest_framework import generics

from models import Service
from models import Package

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = ('id','title','fees','price','is_available','avatar')


class PackageSerializer(serializers.ModelSerializer):

    services = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = Package
        fields = ('id', 'title', 'fees', 'price', 
                  'is_available', 'services')
