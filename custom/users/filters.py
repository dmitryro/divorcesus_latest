from django.contrib.auth.models import User
import rest_framework_filters as filters
from models import AboutUs
from models import StateProvince
from models import TeamMember

class AboutUsFilter(filters.FilterSet):
    title = filters.CharFilter(name='title')
    subtitle = filters.CharFilter(name='subtitle')
    body = filters.CharFilter(name='body')

    class Meta:
        model = AboutUs
        fields = ['id', 'title', 'subtitle', 'body']

class StateProvinceFilter(filters.FilterSet):
    name = filters.CharFilter(name='name')
    abbreviation = filters.CharFilter(name='abbreviation')

    class Meta:
        model = StateProvince
        fields = ['id', 'name', 'abbreviation']

class TeamMemberFilter(filters.FilterSet):
    user_id = filters.CharFilter(name='user_id')
    username = filters.CharFilter(name='username')
    is_partner = filters.BooleanFilter(name='is_partner')
    is_associate = filters.BooleanFilter(name='is_associate')    
    email = filters.CharFilter(name='email')
    phone = filters.CharFilter(name='phone')
    first_name = filters.CharFilter(name='first_name')
    last_name = filters.CharFilter(name='last_name')
    bio = filters.CharFilter(name='bio')
    title = filters.CharFilter(name='title')

    class Meta:
        model = TeamMember
        fields = ['id', 'user_id', 'username',
                  'is_partner', 'is_associate',
                  'email', 'phone', 'first_name',
                  'last_name', 'bio', 'title',]


