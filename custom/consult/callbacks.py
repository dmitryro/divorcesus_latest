from django.contrib.auth.models import User
from django.dispatch import receiver
# Datetime related imports
from datetime import datetime
from datetime import date
from datetime import time
from datetime import tzinfo


from django.core.exceptions import ObjectDoesNotExist
# Email imports
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
# smtp imports
import smtplib
import urllib2
from smtplib import SMTPRecipientsRefused
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


from custom.users.decorators import run_async
from custom.tasks.models import TaskLog
from custom.users.models import Profile
from custom.utils.models import Logger
from custom.consult.signals import consult_send_confirmation_email

@receiver(consult_send_confirmation_email,sender=User)
def consult_send_confirmation_email_handler(sender,**kwargs):
     contact = kwargs['contact']
     try:
        task = TaskLog.objects.get(user_id=contact.id,job='sending_consult_email')
     except Exception as e:
        task = TaskLog.objects.create(user_id=contact.id, job='sending_consult_email', is_complete=False)
        consultation = kwargs['consultation']
        contact = kwargs['contact']
        process_consult_confirmation_email(consultation, contact)
        process_consult_request_email(consultation, contact)


def process_consult_request_email(consultation, contact):
    try:
        timeNow = datetime.now()

        profile = ProfileMetaProp.objects.get(pk=1)
        FROM = '<strong>Grinberg & Segal'
        USER = profile.user_name
        PASSWORD = profile.password
        PORT = profile.smtp_port
        SERVER = profile.smtp_server
        TO = profile.to_email

        SUBJECT = contact.subject
        path = "templates/new_consultation_request.html"

        try:
            f = codecs.open(path, 'r')

            m = f.read()
            mess = string.replace(m, '[name]',contact.name)
            mess = string.replace(mess, '[message]', contact.message)

            str_amount = str(consultation.amount)
            amount_after_period = str_amount.split('.')[1]
            if int(amount_after_period) == 0:
                str_amount += "0"

            mess = string.replace(mess, '[paid]', str_amount)
            mess = string.replace(mess,'[email]', contact.email)
            mess = string.replace(mess,'[invoice]', "to be set")
            mess = string.replace(mess,'[greeting]', '')
            mess = string.replace(mess,'[greeting_statement]','New consultation request from a customer.')
            mess = string.replace(mess,'[wait_statement]',"To be processed by the office.")
            mess = string.replace(mess, '[greeting_global_link]', 'Gringerg and Segal Matrimonial Division')
            mess = string.replace(mess, '[global_link]', 'https://divorcesus.com')
            mess = string.replace(mess, '[greeting_locale]', 'New York, NY, USA')
        #    mess = string.replace(mess,'[link]',link)

        except Exception as e:
            log = Logger(log="this did not work - {}".format(str(e)))
            log.save()

        message = mess

        MESSAGE = MIMEMultipart('alternative')
        MESSAGE['subject'] = SUBJECT
        MESSAGE['To'] = TO
        MESSAGE['From'] = FROM
        MESSAGE.preamble = """
                Your mail reader does not support the report format.
                Please visit us <a href="http://www.mysite.com">online</a>!"""

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
    except Exception as e:
        log = Logger(log="THIS DID NOT WORK {}".format(e))
        log.save()



def process_consult_confirmation_email(consultation, contact):

    try:

        timeNow = datetime.now()

        profile = ProfileMetaProp.objects.get(pk=1)
        FROM = '<strong>Grinberg & Segal'
        USER = profile.user_name
        PASSWORD = profile.password
        PORT = profile.smtp_port
        SERVER = profile.smtp_server
        TO = contact.email

        SUBJECT = contact.subject
        path = "templates/new_consultation_confirmation.html"

        try:
            f = codecs.open(path, 'r')

            m = f.read()
            mess = string.replace(m, '[name]',contact.name)
            mess = string.replace(mess, '[message]', contact.message)
           
            str_amount = str(consultation.amount)
            amount_after_period = str_amount.split('.')[1]
            if int(amount_after_period) == 0:
                str_amount += "0"

            mess = string.replace(mess, '[paid]', str_amount)
            mess = string.replace(mess,'[email]', contact.email)
        #    mess = string.replace(mess,'[link]',link)

            mess = string.replace(mess,'[greeting]', 'Dear')
            mess = string.replace(mess,'[greeting_statement]','You just requested a consultation from attorneys at Grinberg and Segal Matrimonial.')
            line1 = "<p>Please give us 1 to 3 busintess days to follow up.</p>"
            line2 = "<p>Truly Yours,<br/>"
            line3 = "Grinberg and Segal Matrimonial Division</p>"

            mess = string.replace(mess,'[wait_statement]',"{}{}{}".format(line1, line2, line3))
            mess = string.replace(mess, '[greeting_global_link]', 'Gringerg and Segal Matrimonial Division')
            mess = string.replace(mess, '[global_link]', 'https://divorcesus.com')
            mess = string.replace(mess, '[greeting_locale]', 'New York, NY, USA')


        except Exception as e:
            log = Logger(log="this did not work - {}".format(str(e)))
            log.save()

        message = mess

        MESSAGE = MIMEMultipart('alternative')
        MESSAGE['subject'] = SUBJECT
        MESSAGE['To'] = TO
        MESSAGE['From'] = FROM
        MESSAGE.preamble = """
                Your mail reader does not support the report format.
                Please visit us <a href="http://www.mysite.com">online</a>!"""

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
    except Exception as e:
        log = Logger(log="Failed sending to office {}".format(e))
        log.save()

