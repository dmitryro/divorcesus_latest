from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings

from rest_framework import filters
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework import generics

from custom.payments.models import Address
from custom.payments.models import CustomerPayment
from custom.users.models import Contact
from custom.users.models import Profile
from custom.gui.models import Country
from custom.consult.models import Children
from custom.consult.models import Consultation
from custom.consult.models import MaritalStatus
from custom.consult.models import StatusChoice
from custom.consult.signals import consult_send_confirmation_email
from custom.consult.callbacks import consult_send_confirmation_email_handler
from custom.utils.models import Logger

from custom.consult.serializers import ChildrenSerializer
from custom.consult.serializers import MaritalStatusSerializer

import stripe
stripe.api_key = settings.STRIPE_SECRET_KEY

def get_or_create_user(fullname, email):
    try:
        user = User.objects.get(email=email)
        return user
    except Exception as e:

        name = fullname.split(" ")
        username = "{}_{}".format(name[0], name[1]).decode('utf-8').lower()


        if len(name)==2:
            first_name = name[0]
            last_name = name[1]
        else:
            first_name=fullname
            last_name=""

        user = User.objects.create(username=username, first_name=last_name, last_name=last_name, email=email)
        user.save()
        profile = Profile.objects.create(user=user, username=username, first_name=first_name, last_name=last_name, email=email)
        

        return user
    
    return None

class ChildrenViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing children options
    """
    serializer_class = ChildrenSerializer
    queryset = Children.objects.all()
    filter_fields = ('id', 'number', 'value', 'numberic',)


class MaritalStatusViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing marital status options
    """
    serializer_class = MaritalStatusSerializer
    queryset = MaritalStatus.objects.all()
    filter_fields = ('id', 'code', 'status')


@api_view(['POST', 'GET'])
@renderer_classes((JSONRenderer,))
@permission_classes([AllowAny,])
def process_consultation_view(request):
    """
    A view to add payment method
    """
    billing_address1 = request.data.get('billing_address1', '')
    billing_address2 = request.data.get('billing_address2', '')
    billing_city = request.data.get('billing_city', '')
    billing_country = request.data.get('billing_country', '')
    billing_state = request.data.get('billing_state', '')
    billing_full_name = request.data.get('billing_full_name', '')
    billing_phone = request.data.get('billing_phone', '')
    billing_zip = request.data.get('billing_zip', '')
    billing_email = request.data.get('billing_email', '')
    individual_address1 = request.data.get('individual_address1', '')
    individual_address2 = request.data.get('individual_address2', '')
    individual_city = request.data.get('individual_city', '')
    individual_country = request.data.get('individual_country', '')
    individual_state = request.data.get('individual_state', '')
    individual_full_name = request.data.get('individual_full_name', '')
    individual_phone = request.data.get('individual_phone', '')
    individual_zip = request.data.get('individual_zip', '')
    individual_email = request.data.get('individual_email', '')
    payment_token = request.data.get('payment_token', '')
    price = request.data.get('price', '')
    consultancy_type = request.data.get('consultancy_type', '')
    purpose = request.data.get('purpose', '')
    marital_status = request.data.get('marital_status', '')
    country_of_citizenship = request.data.get('country_of_citizenship', '')
    number_of_children = request.data.get('number_of_children', '')

    try:
        user_id = request.data.get('user_id').encode('utf-8')
        user = User.objects.get(id=int(user_id))
    except Exception as e:
        log = Logger(log="WE FAILED TO CONSULT {}".format(e))
        log.save()
        return Response({'message':'failure', 'cause':str(e)})


    try:
        contact = Contact.objects.get(email=individual_email)
    except Exception as e:
        contact = Contact.objects.create(name=individual_full_name,
                                         subject="Consultation Request", 
                                         message="Consultation Request",
                                         email=individual_email)

    log = Logger(log="WILL TRY TO SEND STEP TWO with user {} - {}".format(user_id, user))
    log.save()

    try:
        if int(price) > 0:
            charge  = stripe.Charge.create(
                             amount      = 100*int(price),
                             currency    = "usd",
                             source      = payment_token,
                             description = "Customer payment"
                      )
        
            payment = CustomerPayment.objects.create(user=user,
                                                     charge=str(charge.id), 
                                                     amount=float(price), 
                                                     is_successful=True)
        else:
            payment = CustomerPayment.objects.create(user=user,
                                                     charge="free",
                                                     amount=0.0,
                                                     is_successful=True)
            
        billing_country_model = Country.objects.get(id=int(billing_country))
        individual_country_model = Country.objects.get(id=int(individual_country))


        billing_address = Address.objects.create(state_province_id=int(billing_state),
                                                 city=billing_city,
                                                 user=user,
                                                 zip_or_postal=billing_zip,
                                                 name_or_company=billing_full_name,
                                                 address1=billing_address1,
                                                 address2=billing_address2,
                                                 country=billing_country_model.name,
                                                 is_default=False,
                                                 is_active=True)


        individual_address = Address.objects.create(state_province_id=int(individual_state),
                                                    city=individual_city,
                                                    user=user,
                                                    zip_or_postal=individual_zip,
                                                    name_or_company=individual_full_name,
                                                    address1=individual_address1,
                                                    address2=individual_address2,
                                                    country=individual_country_model.name,
                                                    is_default=False,
                                                    is_active=True)

        children = Children.objects.get(id=int(number_of_children))

        country = Country.objects.get(id=int(country_of_citizenship))

        status = StatusChoice.objects.get(id=1)
         
        marital = MaritalStatus.objects.get(id=int(marital_status))

        consultation = Consultation.objects.create(billing_address=billing_address,
                                                   individual_address=individual_address,
                                                   purpose=purpose,
                                                   status=status,
                                                   amount=float(price),
                                                   user=user,
                                                   invoice="{}".format(payment.charge),
                                                   payment=payment,
                                                   billing_full_name=billing_full_name,
                                                   individual_full_name=individual_full_name,
                                                   billing_phone=billing_phone,
                                                   individual_phone=individual_phone,
                                                   individual_email=individual_email,
                                                   country_of_citizenship=country,
                                                   marital_status=marital,
                                                   number_of_children=children)
                

    except Exception as e:
        log = Logger(log="WE FAILED TO CONSULT {}".format(e))
        log.save()
        return Response({'message':'failure', 'cause':str(e)})

    consult_send_confirmation_email.send(sender=User, consultation=consultation, contact=contact)

    return Response({'message':'success','s3_base_url':"blablabla"})


consult_send_confirmation_email.connect(consult_send_confirmation_email_handler)
