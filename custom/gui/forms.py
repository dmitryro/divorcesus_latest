from django.forms import ModelForm, Textarea
import django.forms as forms
import django.forms.widgets as widgets
from django.forms.widgets import Input
from django import forms
from django.contrib.auth.models import User
from bootstrap_toolkit.widgets import BootstrapDateInput, BootstrapTextInput, BootstrapUneditableInput
from ckeditor.widgets import CKEditorWidget
from tinymce.widgets import TinyMCE
from wymeditor.widgets import AdminWYMEditorArea
from froala_editor.widgets import FroalaEditor
from redactor.widgets import RedactorEditor
from models import Service
from models import Slide
from models import ContactInfo
from models import FAQ

class SlideForm(ModelForm):
    class Meta:
        model = Slide
        widgets = {
            'text': Textarea(attrs={'cols': 80, 'rows': 30}),
        }
        fields = '__all__' #


class ServiceForm(ModelForm):
    class Meta:
        model = Service
        widgets = {
            'statement': Textarea(attrs={'cols': 80, 'rows': 30}),
            'description':  RedactorEditor(),
        }
        fields = '__all__' #


class FAQForm(ModelForm):
    class Meta:
        model = FAQ
        widgets = {
            'note': Textarea(attrs={'cols': 80, 'rows': 20}),#CKEditorWidget(),#AdminWYMEditorArea(),#Textarea(attrs={'class':'ckeedior','cols': 80, 'rows': 30}),
            'answer': RedactorEditor(),

        }
        fields = '__all__' #


class ContactInfoForm(ModelForm):
    class Meta:
        model = ContactInfo
        widgets = {
            'statement': Textarea(attrs={'cols': 80, 'rows': 30}),
        }
        fields = '__all__' #

