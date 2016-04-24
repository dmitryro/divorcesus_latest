from django.shortcuts import render
from restless.views import Endpoint
from signals import user_send_email
from custom.utils.models import Logger

####################################
## Subscribe News Letter Endpoint ##
## METHOD : GET, POST ##############
## RETURNED: SUCCESS/FAILUTRE ######
####################################

class SendEmailView(Endpoint):

    def get(self, request):
        try:
       
           log = Logger(log='WE ARE SENDING EMAIL')
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           return {'message':'error','data':'we failed reading s3 base url'}

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

           log = Logger(log='WE ARE SENDING EMAIL')
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           return {'message':'error','data':'we failed reading s3 base url'}

    def post(self, request): # Post requests handler
        try:

           email =  reuqest.data['email']
           log = Logger(log='WE ARE SENDING EMAIL'+str(email))
           log.save()
           return {'message':'success','s3_base_url':"blablabla"}
        except Exception, R:
           return {'message':'error','data':'we failed reading s3 base url'}


# Create your views here.
