from django.forms import ModelForm, Textarea
from django.forms.widgets import Input
from django import forms
from django.contrib.auth.models import User
from bootstrap_toolkit.widgets import BootstrapDateInput, BootstrapTextInput, BootstrapUneditableInput
from models import Slide

class SlideForm(ModelForm):
    class Meta:
        model = Slide
        widgets = {
            'text': Textarea(attrs={'cols': 80, 'rows': 30}),
        }
        fields = '__all__' #

