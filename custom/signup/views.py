from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from restless.views import Endpoint
from custom.users.models import Contact
from custom.utils.models import Logger

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
           message = request.params.get('message','')
           phone = request.params.get('phone','')
           name = request.params.get('name','')
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

           email =  reuqest.data['email']
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

           log = Logger(log='WE ARE SENDING EMAIL - GET'+" "+email)
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           return {'message':'error','data':'we failed reading s3 base url'}

    def post(self, request): # Post requests handler
        try:

           email =  reuqest.data['email']
           log = Logger(log='WE ARE SENDING EMAIL - POST '+str(email))
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           return {'message':'error','data':'we failed reading s3 base url'}


user_send_email.connect(user_send_email_handler)
# Create your views here.
