# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2018-08-22 03:26
from __future__ import unicode_literals

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import taggit.managers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('taggit', '0002_auto_20150616_2121'),
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_published', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('nickname', models.CharField(blank=True, max_length=150, null=True)),
                ('name_or_company', models.CharField(blank=True, max_length=150, null=True)),
                ('address1', models.CharField(blank=True, max_length=150, null=True)),
                ('address2', models.CharField(blank=True, max_length=150, null=True)),
                ('city', models.CharField(blank=True, max_length=150, null=True)),
                ('zip_or_postal', models.CharField(blank=True, max_length=20, null=True)),
                ('country', models.CharField(blank=True, max_length=150, null=True)),
                ('is_default', models.NullBooleanField(default=False)),
                ('is_active', models.NullBooleanField(default=True)),
                ('state_province', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='state_province', to='users.StateProvince')),
                ('tags', taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Address',
                'verbose_name_plural': 'Addresses',
            },
        ),
        migrations.CreateModel(
            name='CardType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Card Type',
                'verbose_name_plural': 'Card Types',
            },
        ),
        migrations.CreateModel(
            name='CreditCard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_published', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, max_length=200, null=True)),
                ('token', models.CharField(blank=True, max_length=600, null=True)),
                ('nonce', models.CharField(blank=True, max_length=600, null=True)),
                ('card_id', models.IntegerField(blank=True, default=0, null=True)),
                ('customer_id', models.IntegerField(blank=True, null=True)),
                ('issuing_bank', models.CharField(blank=True, max_length=150, null=True)),
                ('country_of_issuance', models.CharField(blank=True, max_length=150, null=True)),
                ('unique_number_identifier', models.CharField(blank=True, max_length=150, null=True)),
                ('durbin_regulated', models.CharField(blank=True, max_length=30, null=True)),
                ('payroll', models.CharField(blank=True, max_length=150, null=True)),
                ('card_bin', models.CharField(blank=True, max_length=150, null=True)),
                ('cardholder_name', models.CharField(blank=True, max_length=140)),
                ('prepaid', models.CharField(blank=True, max_length=150, null=True)),
                ('last_4', models.CharField(blank=True, max_length=10, null=True)),
                ('card_name', models.CharField(blank=True, max_length=200, null=True)),
                ('card_number', models.CharField(blank=True, max_length=200, null=True)),
                ('card_real_number', models.CharField(blank=True, max_length=200, null=True)),
                ('card_expiration', models.DateField(blank=True, null=True)),
                ('card_cvv', models.IntegerField()),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('card_expiration_year', models.IntegerField()),
                ('card_expiration_month', models.IntegerField()),
                ('holder_first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('holder_last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('card_icon_url', models.CharField(blank=True, max_length=500, null=True)),
                ('is_default', models.NullBooleanField(default=False)),
                ('image_url', models.CharField(blank=True, max_length=300, null=True)),
                ('address', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.Address')),
                ('card_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.CardType')),
                ('owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.Profile')),
            ],
            options={
                'verbose_name': 'Custom Credit Card',
                'verbose_name_plural': 'Custom Cards',
            },
        ),
        migrations.CreateModel(
            name='CustomerActivityStats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_transactions', models.IntegerField(blank=True, default=0, null=True)),
                ('total_paid', models.IntegerField(blank=True, default=0, null=True)),
                ('total_refunded', models.IntegerField(blank=True, default=0, null=True)),
                ('total_failed_transactions', models.IntegerField(blank=True, default=0, null=True)),
                ('total_succeeded_transactions', models.IntegerField(blank=True, default=0, null=True)),
                ('credibility_rating', models.IntegerField(blank=True, default=0, null=True)),
                ('last_purchase', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Customer Activity Stats',
                'verbose_name_plural': 'Customer Activity Stats',
            },
        ),
        migrations.CreateModel(
            name='CustomerPayment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_posted', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('amount', models.FloatField(blank=True, default=0.0, null=True)),
                ('is_successful', models.NullBooleanField(default=True)),
                ('charge', models.CharField(blank=True, max_length=250, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Customer Payment',
                'verbose_name_plural': 'Customer Payments',
            },
        ),
        migrations.CreateModel(
            name='CustomerProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_id', models.CharField(blank=True, max_length=100, null=True)),
                ('token', models.CharField(blank=True, max_length=1500, null=True)),
                ('ssn', models.CharField(blank=True, max_length=100, null=True)),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.EmailField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.Address')),
                ('customer_cards', models.ManyToManyField(blank=True, related_name='customer_cards', to='payments.CreditCard')),
            ],
            options={
                'verbose_name': 'Customer Profile',
                'verbose_name_plural': 'Customer Profiles',
            },
        ),
        migrations.CreateModel(
            name='MerchantActivity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField(blank=True, default=0.0, null=True)),
                ('activity_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Merchant Activity',
                'verbose_name_plural': 'Merchant Activities',
            },
        ),
        migrations.CreateModel(
            name='MerchantActivityStats',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_transactions', models.IntegerField(blank=True, default=0, null=True)),
                ('total_paid', models.IntegerField(blank=True, default=0, null=True)),
                ('total_refunded', models.IntegerField(blank=True, default=0, null=True)),
                ('total_failed_transactions', models.IntegerField(blank=True, default=0, null=True)),
                ('total_succeeded_transactions', models.IntegerField(blank=True, default=0, null=True)),
                ('credibility_rating', models.IntegerField(blank=True, default=0, null=True)),
                ('last_purchase', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Merchant Activity Stats',
                'verbose_name_plural': 'Merchant Activity Stats',
            },
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('fullname', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, max_length=100)),
                ('address1', models.CharField(blank=True, max_length=100, null=True)),
                ('address2', models.CharField(blank=True, max_length=100, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.CharField(blank=True, max_length=100, null=True)),
                ('zipcode', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(blank=True, max_length=100, null=True)),
                ('package_type', models.CharField(blank=True, max_length=100, null=True)),
                ('package_price', models.CharField(blank=True, max_length=100, null=True)),
                ('message', models.CharField(blank=True, max_length=100, null=True)),
                ('payment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.CustomerPayment')),
            ],
            options={
                'verbose_name': 'Payment',
                'verbose_name_plural': 'Payments',
            },
        ),
        migrations.CreateModel(
            name='PaymentStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(blank=True, max_length=200, null=True)),
                ('code', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(max_length=400)),
            ],
            options={
                'verbose_name': 'Payment Status',
                'verbose_name_plural': 'Payment Statuses',
            },
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=150, null=True)),
                ('abbreviation', models.CharField(blank=True, max_length=150, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TransactionStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Transaction Status',
                'verbose_name_plural': 'Transaction Status',
            },
        ),
        migrations.CreateModel(
            name='TransactionType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('code', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Transaction Type',
                'verbose_name_plural': 'Transaction Types',
            },
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('merchantactivity_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='payments.MerchantActivity')),
                ('transaction_id', models.CharField(blank=True, max_length=400, null=True)),
                ('card_unique_identifier', models.CharField(blank=True, max_length=400, null=True)),
                ('total_amount', models.FloatField(default=0)),
                ('shipping_amount', models.FloatField(default=0)),
                ('commission_amount', models.FloatField(default=0)),
                ('taxes_amount', models.FloatField(default=0)),
                ('take_home_amount', models.FloatField(default=0)),
                ('merchant_id', models.CharField(blank=True, max_length=400, null=True)),
                ('customer_id', models.CharField(blank=True, max_length=400, null=True)),
                ('is_in_escrow', models.BooleanField(default=False)),
                ('is_refunded', models.BooleanField(default=False)),
                ('is_rejected', models.BooleanField(default=False)),
                ('order_number', models.IntegerField(blank=True, default=0, null=True)),
                ('time_processed', models.DateTimeField(auto_now_add=True)),
                ('payment_method_used', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.CreditCard')),
                ('status', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.TransactionStatus')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='payments.TransactionType')),
            ],
            options={
                'verbose_name': 'Transaction',
                'verbose_name_plural': 'Transactions',
            },
            bases=('payments.merchantactivity',),
        ),
        migrations.AddField(
            model_name='customerprofile',
            name='orders',
            field=models.ManyToManyField(blank=True, related_name='customer_orders', to='payments.MerchantActivity'),
        ),
        migrations.AddField(
            model_name='customerprofile',
            name='profile',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_profle', to='users.Profile'),
        ),
        migrations.AddField(
            model_name='customerprofile',
            name='stats',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='customer_activity_stats', to='payments.CustomerActivityStats'),
        ),
        migrations.AddField(
            model_name='customerprofile',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
        migrations.AddField(
            model_name='customerprofile',
            name='transactions',
            field=models.ManyToManyField(blank=True, related_name='customer_transactions', to='payments.MerchantActivity'),
        ),
    ]
