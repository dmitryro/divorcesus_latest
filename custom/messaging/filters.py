import rest_framework_filters as filters

from models import Notification
from models import Message

class MessageFilter(filters.FilterSet):
    is_seen = filters.CharFilter(name='is_seen')
    is_answered = filters.CharFilter(name='is_answered')
    title = filters.CharFilter(name='title')
    body = filters.CharFilter(name='body')
    receiver = filters.CharFilter(name='receiver') 
    sender = filters.CharFilter(name='sender')
    time_sent = filters.CharFilter(name='time_sent')

    class Meta:
        model = Message


class NotificationFilter(filters.FilterSet):
    is_received = filters.CharFilter(name='is_received')
    is_sent = filters.CharFilter(name='is_sent')
    notification_type = filters.CharFilter(name='notification_type')
    user = filters.CharFilter(name='user')
    time_sent = filters.CharFilter(name='time_sent')

    class Meta:
        model = Notification


