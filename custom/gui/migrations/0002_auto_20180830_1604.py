# -*- coding: utf-8 -*-
# Generated by Django 1.9.13 on 2018-08-30 20:04
from __future__ import unicode_literals

from django.db import migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('gui', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='frontblock',
            name='body',
            field=redactor.fields.RedactorField(blank=True, default='', null=True, verbose_name='bodies'),
        ),
    ]