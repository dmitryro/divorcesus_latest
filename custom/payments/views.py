from __future__ import unicode_literals
from django.shortcuts import render

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings
from django_filters.rest_framework import DjangoFilterBackend
from django.core.exceptions import ObjectDoesNotExist
from restless.views import Endpoint
from custom.users.models import Contact
from custom.users.models import StateProvince
from custom.utils.models import Logger
from custom.payments.models import CreditCard
from custom.payments.models import Payment
from custom.payments.models import Address
from custom.payments.models import State
from django.contrib.auth import logout
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import filters
from rest_framework import viewsets
from rest_framework import generics
from filters import AddressFilter
from signals import payment_send_confirmation_email
from callbacks import  payment_send_confirmation_email_handler
from serializers import PaymentSerializer
from serializers import AddressSerializer
from serializers import StateProvinceSerializer
from utils import randomDigits
from utils import getPaymentProcessing


class AddressList(generics.ListAPIView):
    serializer_class = AddressSerializer
    permission_classes = (AllowAny,)
    renderer_classes = (JSONRenderer, )
    filter_backends = (filters.SearchFilter,)
    search_fields = ('username', 'id', 'user_id', 'email')

    def get_queryset(self):
        """
        This view should return a list of all the messages
        that are outgoing for the given sender.
        """
        try:
            user_id = self.kwargs['user_id']
            user_id = int(user_id)

            return Address.objects.filter(user_id=user_id)

        except Exception, R:
            user_id = self.request.user.id

            return Address.objects.filter(user_id=user_id)

class AddressViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = AddressSerializer
    queryset = Address.objects.all()
    filter_class = AddressFilter
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'user_id', 'name_or_company', 'city', 'nickname', 'state_province', 'country')


def reset_default_billing(address_id, user_id):
    try:
        addresses = Address.objects.filter(user_id=user_id).exclude(id=address_id)
        for address in addresses:
            address.is_default = False
            address.save()
    except Exception as e:
        log = Logger(log='SOMETHING BROKE {}'.format(e))
        log.save()

class PaymentMethodViewSet(viewsets.ModelViewSet):
   pass

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def add_payment_method_view(request):
    """
    A view to add payment method
    """
    pass

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def delete_payment_method_view(request):
    """
    A view to depete a payment method
    """
    pass


@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def add_address_view(request):
    """
    A view to add a billing address
    """

    data = JSONParser().parse(request)
    user_id = data['user_id']
    address1 = data['address_1']
    address2 = data['address_2']
    address_id = data['address_id'] or None
    city = data['city']
    state_id = data['state']
    zip_or_postal = data['zip_or_postal']
    country = data['country']
    nickname = data['nickname']
    name_or_company = data['name_or_company']
    is_default = bool(data['make_default'])
    is_active = True

    if request.user.is_authenticated():
        user = request.user
    else:
        try:
            user = User.objects.get(id=int(user_id))
        except Exception as e:
            return Response({'result':'error'})

    try:
        state_id  = int(state_id)
        state = StateProvince.objects.get(id=int(state_id))
    except Exception as e:
        return Response({'result':'error {}'.format(e)})

 
    try:
        address_id = int(address_id)
    except Exception as e:
        address_id = 0

    if address_id and address_id > 0:     
        try:  
            address = Address.objects.get(id=address_id)
	    address.address1 = address1
            address.name_or_company = name_or_company
	    address.user = user
            address.address2 = address2
            address.city = city
            address.state_province = state
	    address.country = country
            address.is_default = is_default
            address.is_active = is_active
            address.zip_or_postal = zip_or_postal
            address.save()
            reset_default_billing(address.id, user.id)
        except ObjectDoesNotExist:
            address = Address.objects.create(user=user,
                                             state_province=state,
                                             city=city,
                                             zip_or_postal=zip_or_postal,
                                             name_or_company=name_or_company,
                                             address1=address1,
                                             address2=address2,
                                             country=country,
                                             nickname=nickname,
                                             is_default=is_default,
                                             is_active=is_active)
           

    else:
        address = Address.objects.create(user=user,
				         state_province=state,
					 city=city,
                                         zip_or_postal=zip_or_postal,
                                         name_or_company=name_or_company,
			        	 address1=address1,
					 address2=address2,
					 country=country,
					 nickname=nickname,
					 is_default=is_default,
					 is_active=is_active)
    addresses = Address.objects.filter(user=user)
    serializer = AddressSerializer(addresses, many=True)
    return Response(serializer.data)   
        

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def delete_address_view(request):
    """
    A view to delete a billing address
    """
    data = JSONParser().parse(request)
    address_id = data['address_id']
    user_id = data['user_id']

    if request.user.is_authenticated():
        user = request.user
    else:
        try:
            user = User.objects.get(id=int(user_id))
        except Exception as e:
            return Response({'result':'error'})

    try:
        address = Address.objects.get(id=int(address_id))
        address.delete()
    except Exception as e:
        pass

    addresses = Address.objects.filter(user=user) 
    log = Logger(log='TOTAL ADDRESSES {}'.format(len(addresses)))
    log.save()
    serializer = AddressSerializer(addresses, many=True)
    return Response(serializer.data)
    

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def read_addresses_view(request):
    """
    A view to delete a billing address
    """

    if request.user.is_authenticated():
        user = request.user
    else:
        try:
            user_id = request.data['user_id']
            user = User.objects.get(id=int(user_id))
        except Exception as e:
            log = Logger(log='Could not read user {}'.format(e))
            log.save()
            return Response({'result':'error'})

    log = Logger(log="BY NOW USER IS {}".format(user.id))
    log.save()

    addresses = Address.objects.filter(user=user)
    serializer = AddressSerializer(addresses, many=True)
    return Response(serializer.data)



class PaymentsList(generics.ListAPIView):
    serializer_class = PaymentSerializer
    permission_classes = (AllowAny,)
    renderer_classes = (JSONRenderer, )

    def get_queryset(self):
        """
        This view should return a list of all the messages
        that are outgoing for the given sender.
        """
        try:
            user_id = self.kwargs['user_id']
            user_id = int(user_id)

            return Payment.objects.filter(user_id=user_id)

        except Exception, R:
            user_id = self.request.user.id

            return Payment.objects.filter(user_id=user_id)


class PastPaymentsList(Endpoint):
    @csrf_exempt
    def post(self, request):
        try:
            user_id = request.user.id
            payments = Payment.objects.filter(user_id=user_id)

            for payment in payments:
               if payment.payment_processing_number==None:
                  payment.payment_processing_number = getPaymentProcessing()
                  payment.save()

            serializer = PaymentSerializer(payments,many=True)      
            return {"payments":serializer.data}      
        except Exception, R:
            return {"payments":str(R)}

####################################
## Subscribe News Letter Endpoint ##
## METHOD : GET, POST ##############
## RETURNED: SUCCESS/FAILUTRE ######
####################################

@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def send_confiration_view(request):
        contact = None
        if request.user.is_authenticated():
            user = request.user
        else:
            try:
                user_id = request.data['user_id']
                user = User.objects.get(id=int(user_id))
            except Exception as e:
                log = Logger(log='Could not read user {}'.format(e))
                log.save()
                return Response({'result':'error'})

        try:
           email = request.data['email']

           if not email or len(email) < 1:
              return {'message':'email is a mandatory'}

           fullname = request.data['fullname']

           
           if not fullname or len(fullname) < 1:
              full_name = request.data['first']+' '+request.data['last']

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
              return Response({'message':'card type is a mandatory'})
            
           try:
               contact = Contact.objects.get(email=email)
           except Exception as R:
               contact = Contact.objects.create(name=fullname, email=email)

           if not contact:
               return Response({'message':'error','s3_base_url':"no link"})


           try:
               ppn = getPaymentProcessing() 
 
               payment = Payment.objects.create(email=email,
                                                payment_processing_number=ppn,
                                                user=user,
                                                fullname=fullname,
                                                phone=phone,
                                                cardtype=cardtype,
                                                cardnumber=cardnumber,
                                                address1=address1,
                                                address2=address2,
                                                city=city,
                                                state=state,
                                                zipcode=zipcode,
                                                month=month,
                                                year=year)
           except Exception, R:
               payment = None

           if contact:
               payment_send_confirmation_email.send(sender=User, contact=contact, payment=payment)
           return Response({'message':'success','s3_base_url':"blablabla"})
        except Exception, R:
           return Response({'message':str(R)})


payment_send_confirmation_email.connect(payment_send_confirmation_email_handler)
