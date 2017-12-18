from __future__ import unicode_literals
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import viewsets

from custom.users.filters import AboutUsFilter
from custom.users.filters import StateProvinceFilter
from custom.users.filters import TeamMemberFilter
from custom.users.models import StateProvince
from custom.users.models import AboutUs
from custom.users.models import TeamMember
from custom.users.serializers import StateProvinceSerializer
from custom.users.serializers import AboutUsSerializer
from custom.users.serializers import TeamMemberSerializer

class AboutUsList(generics.ListAPIView):

    queryset = AboutUs.objects.all()
    filter_class = AboutUsFilter
    serializer_class = AboutUsSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'subtitle', 'body',)

class AboutUsViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing about us blocks.
    """
    serializer_class = AboutUsSerializer
    queryset = AboutUs.objects.all()
    filter_class = AboutUsFilter
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'title', 'subtitle')


class StateProvinceList(generics.ListAPIView):

    queryset = StateProvince.objects.all()
    filter_class = StateProvinceFilter
    serializer_class = StateProvinceSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name','abbreviation',)


class StateProvinceViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing states.
    """
    serializer_class = StateProvinceSerializer
    queryset = StateProvince.objects.all()
    filter_class = StateProvinceFilter
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'name', 'abbreviation')

class TeamMemberViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing about us blocks.
    """
    serializer_class = TeamMemberSerializer
    queryset = TeamMember.objects.all()
    filter_class = TeamMemberFilter
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'user_id', 'username'
                     'is_partnemr', 'is_associate',
                     'email', 'phone', 'first_name',
                     'last_name', 'bio', 'title',)

class TeamMemberList(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    filter_class = TeamMemberFilter
    serializer_class = TeamMemberSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'user_id', 'username'
                     'is_partnemr', 'is_associate',
                     'email', 'phone', 'first_name',
                     'last_name', 'bio', 'title',)



