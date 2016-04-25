from django.conf import settings
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.core.exceptions import ObjectDoesNotExist
from django.core.signals import request_finished
from django.core.cache import cache
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.http import HttpResponse, HttpResponseRedirect
from django.core.files.storage import default_storage as storage
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes

# Datetime related imports
from datetime import datetime
from datetime import date
from datetime import time
from datetime import tzinfo

# Registration API

# Email imports
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
# smtp imports
import smtplib
import urllib2
from smtplib import SMTPRecipientsRefused
import registration_api
from registration_api import utils
import string
import codecs
from StringIO import StringIO
import urllib2
import random
import json
import os
import re
# Custom Imports 
from custom.metaprop.models import ProfileMetaProp
from signals import  user_send_email
from custom.utils.models import Logger
from custom.users.decorators import run_async
from custom.tasks.models import TaskLog

@receiver(user_send_email,sender=User)
def user_send_email_handler(sender,contact,**kwargs):
    try:
       task = TaskLog.objects.get(user_id=contact.id,job='sending_user_email')
    except Exception, R:
       task = TaskLog.objects.create(user_id=contact.id,job='sending_user_email',is_complete=False)  
       process_user_email(contact)

@run_async
def process_user_email(contact):

    log = Logger(log='WE ARE IN SIGNAL AND WILL SEND AN EMAIL TO'+contact.email)
    log.save()

    try:
        timeNow = datetime.now()

        profile = ProfileMetaProp.objects.get(pk=1)
        FROM = '<strong>Grinberg & Segal'
        USER = profile.user_name
        PASSWORD = profile.password
        PORT = profile.smtp_port
        SERVER = profile.smtp_server
        TO = contact.email
        SUBJECT = 'New message from a customer'
        try:
            path = "templates/new_message.html"

            f = codecs.open(path, 'r')

            m = f.read()
            mess = string.replace(m, '[name]',contact.name)
            mess = string.replace(mess, '[message]', contact.message)
            mess = string.replace(mess, '[phone]',contact.phone)
            mess = string.replace(mess,'[email]',contact.email)
        #    mess = string.replace(mess,'[link]',link)

        except Exception, R:
            log = Logger(log=str(R))
            log.save()
        message = mess

        MESSAGE = MIMEMultipart('alternative')
        MESSAGE['subject'] = SUBJECT
        MESSAGE['To'] = TO
        MESSAGE['From'] = FROM
        MESSAGE.preamble = """
                Your mail reader does not support the report format.
                Please visit us <a href="http://www.mysite.com">online</a>!"""

    # Attach parts into message container.
    # According to RFC 2046, the last part of a multipart message, in this case
    # the HTML message, is best and preferred.
        HTML_BODY  = MIMEText(message, 'html','utf-8')
        MESSAGE.attach(HTML_BODY)
        msg = MESSAGE.as_string()
        server = smtplib.SMTP(SERVER+':'+PORT)
        server.ehlo()
        server.starttls()
        server.login(USER,PASSWORD)
        server.sendmail(FROM, TO, msg)
        server.quit()

    except SMTPRecipientsRefused:
        pass
    except ObjectDoesNotExist:
        pass
    except Exception, R:
        log = Logger(log=str(R))
        log.save()

