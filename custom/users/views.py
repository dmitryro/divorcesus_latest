from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import viewsets

from custom.users.filters import StateProvinceFilter
from custom.users.models import StateProvince
from custom.users.serializers import StateProvinceSerializer

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

