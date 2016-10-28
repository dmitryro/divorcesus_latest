from django.shortcuts import render

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings

from restless.views import Endpoint
from custom.users.models import Contact
from custom.utils.models import Logger
from custom.payments.models import Payment
from django.contrib.auth import logout
from signals import payment_send_confirmation_email
from callbacks import  payment_send_confirmation_email_handler

####################################
## Subscribe News Letter Endpoint ##
## METHOD : GET, POST ##############
## RETURNED: SUCCESS/FAILUTRE ######
####################################

class SendConfirmationEmailView(Endpoint):
    @csrf_exempt
    def get(self, request):
        try:
           email = request.params.get('email','')
           if not email or len(email) < 1:
              return {'message':'error','exception':'email is a mandatory'}

           message = request.params.get('message','')

           if not message or len(message) < 1:
              return {'message':'error','exception':'message is a mandatory'}


           phone = request.params.get('phone','')
           name = request.params.get('name','')
           if not name or len(name) < 1:
              return {'message':'error','exception':'name is a mandatory'}
           
           try:
               contact = Contact.objects.get(email=email)
           except Exception, R:
               contact = Contact.objects.create(name=name,email=email,message=message,phone=phone)

           payment_send_confirmation_email.send(sender=User,contact=contact,payment=None)
           log = Logger(log='WE ARE SENDING EMAIL IN GET '+email)
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           log = Logger(log='WE HAD AN ERROR '+str(R))
           log.save()
           return {'message':'error','data':'we failed reading s3 base url'}

    @csrf_exempt
    def post(self, request):
        try:
           email = request.data['email']
 
           if not email or len(email) < 1:
              return {'message':'email is a mandatory'}

           fullname = request.data['fullname']

           if not fullname or len(fullname) < 1:
              return {'message':'fullname is a mandatory'}


           cardtype = request.data['cardtype']
           cardnumber = request.data['cardnumber']

           address1 = request.data['address1']
           address2 = request.data['address2']
           phone = request.data['phone']
           city = request.data['city']
           state = request.data['state']
           zipcode = request.data['zip']
           month = request.data['month']
           year = request.data['year']

           if not cardtype or len(cardtype) < 1:
              return {'message':'card type is a mandatory'}

           try:
               contact = Contact.objects.get(email=email)
           except Exception, R:
               contact = Contact.objects.create(name=fullname,email=email)

           payment = Payment.objects.create(email=email,fullname=fullname,phone=phone,cardtype=cardtype,cardnumber=cardnumber,address1=address1,address2=address2,city=city,state=state,zipcode=zipcode,month=month,year=year)
           

           payment_send_confirmation_email.send(sender=User,contact=contact,payment=payment)
           log = Logger(log='WE ARE SENDING EMAIL IN POST '+email)
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           log = Logger(log='WE HAD AN ERROR '+str(R))
           log.save()
           return {'message':str(R)}



payment_send_confirmation_email.connect(payment_send_confirmation_email_handler)
