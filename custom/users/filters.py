from django.contrib.auth.models import User
import rest_framework_filters as filters

from models import StateProvince

class StateProvinceFilter(filters.FilterSet):
    name = filters.CharFilter(name='name')
    abbreviation = filters.CharFilter(name='abbreviation')

    class Meta:
        model = StateProvince
        fields = ['id', 'name', 'abbreviation']

