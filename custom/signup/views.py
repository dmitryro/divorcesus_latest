from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings

from restless.views import Endpoint
from custom.users.models import Contact
from custom.utils.models import Logger
from django.contrib.auth import logout
from signals import user_send_email
from callbacks import  user_send_email_handler

####################################
## Subscribe News Letter Endpoint ##
## METHOD : GET, POST ##############
## RETURNED: SUCCESS/FAILUTRE ######
####################################

class SendEmailView(Endpoint):

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

           contact = Contact.objects.create(name=name,email=email,message=message,phone=phone)
           user_send_email.send(sender=User,contact=contact,kwargs=None)
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

           email =  request.data['email']
           log = Logger(log='WE ARE SENDING EMAIL'+str(email))
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           return {'message':'error','data':'we failed reading s3 base url'}


####################################
## Subscribe News Letter Endpoint ##
## METHOD : GET, POST ##############
## RETURNED: SUCCESS/FAILUTRE ######
####################################

class SubscribeView(Endpoint):

    def get(self, request):  # Get requests handler
        try:
           email = request.params.get('email','')

           try:
               contact = Contact.objects.get(email=email)
           except Exception, R:
               contact = Contact.objects.create(email=email)

           return {'message' : 'success', 'email' : email}

        except Exception, R:

           return {'message':'error','data':'we failed reading s3 base url'}


    def post(self, request): # Post requests handler
        try:

           email =  request.data['email']

           contact = Contact.objects.filter(email=email)
           log = Logger(log="SO FAR FOUND EMAILS"+str(len(contact)))
           log.save()
 
           if len(contact)<1:
               contact = Contact.objects.create(email=email)
               

           return {'message':'success','email':email}

        except Exception, R:

           return {'message':'error','data':'we failed reading s3 base url'}



def logout_view(request):
    logout(request)

user_send_email.connect(user_send_email_handler)
# Create your views here.
