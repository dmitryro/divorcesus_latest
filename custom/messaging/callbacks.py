from django.dispatch import receiver
from django.contrib.auth.models import User

from models import Notification
from models import NotificationType
from signals import message_read
from signals import message_sent
from signals import message_deleted
from signals import message_updated

from custom.utils.models import Logger

@receiver(message_deleted,sender=User)
def message_deleted_handler(sender,**kwargs):
    pass


@receiver(message_sent, sender=User)
def message_sent_handler(sender, receiver, message, **kwargs):
    try:
        log = Logger(log='WE SENT A MESSAGE %d %d'%(sender.id, receiver.id))
        log.save() 
        notification = Notification.objects.create(notification_type_id = 1, 
                                                   is_received = False,   
                                                   is_sent = True,
                                                   message = message,
                                                   user = receiver)
    except Exception, R:
        log = Logger(log = 'WE ARE IN SIGNAL AND WE HAVE FAILED '+str(R))
        log.save()

@receiver(message_updated, sender=User)
def message_updated_handler(sender, receiver, message, **kwargs):
    pass


@receiver(message_read, sender=User)
def message_read_handler(sender, receiver, message, **kwargs):
    try:
       notification = Notification.objects.get(message=message)
       notification.is_received = True
       notification.save()
    except Exception, R:
        log = Logger(log = 'WE ARE IN SIGNAL READ MESSAGE AND WE HAVE FAILED '+str(R))
        log.save()

