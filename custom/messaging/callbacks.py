from django.dispatch import receiver
from django.contrib.auth.models import User

from signals import message_sent
from signals import message_deleted
from signals import message_updated

@receiver(message_deleted,sender=User)
def message_deleted_handler(sender,**kwargs):
    pass


@receiver(message_sent, sender=User)
def message_sent_handler(sender,**kwargs):
    pass


@receiver(message_updated, sender=User)
def message_updated_handler(sender,**kwargs):
    pass

