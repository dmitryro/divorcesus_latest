from django.shortcuts import render

from rest_framework import filters
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework import generics

from custom.consult.models import Country
from custom.consult.models import Children
from custom.consult.models import Consultation
from custom.consult.models import MaritalStatus
from custom.consult.models import StatusChoice

from custom.consult.serializers import ChildrenSerializer
from custom.consult.serializers import MaritalStatusSerializer

class ChildrenViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing children options
    """
    serializer_class = ChildrenSerializer
    queryset = Children.objects.all()
    filter_fields = ('id', 'number', 'value', 'numberic',)


class MaritalStatusViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing marital status options
    """
    serializer_class = MaritalStatusSerializer
    queryset = MaritalStatus.objects.all()
    filter_fields = ('id', 'code', 'status')
