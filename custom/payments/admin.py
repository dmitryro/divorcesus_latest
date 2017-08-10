from django.contrib import admin

# Register your models here.
from models import CreditCard
from models import CardType
from models import Transaction
from models import TransactionType
from models import TransactionStatus
from models import Address
from models import State
from models import PaymentStatus
from models import MerchantActivity
from models import MerchantActivityStats
from models import CustomerActivityStats
from models import CustomerProfile



class CustomerProfileAdmin(admin.ModelAdmin):

    fieldsets = ((None, {'fields': ['customer_id',
                                    'token',
                                    'ssn',
                                    'city',
                                    'address',
                                    'first_name',
                                    'last_name',
                                    'email',
                                    'phone',
                                    'customer_cards',
                                    'profile',
                                    'transactions',
                                    'orders',
                                    'stats',
                                    'payment_processing_number',]}),)
    #list_display = ('id','header','address1','address2','city','state','zipcode','tollfree','phone','fax','email','statement')
    #list_editable = ('id','','address1','address2','city','state','zipcode','tollfree','phone','fax','email','statement')

    class Meta:
         verbose_name = 'Customer Profile'
         verbose_name_plural = 'Customer Profiles'


admin.site.register(CustomerProfile,CustomerProfileAdmin)

