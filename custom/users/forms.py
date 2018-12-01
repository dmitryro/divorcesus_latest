from django.contrib.auth.models import User
from django.db import models
from django.forms import ModelForm, Textarea
from django import forms
from django.forms.widgets import Input
from models import TeamMember
from models import MileStone
from models import AboutUs
from models import Advantage
from models import Testimonial
from redactor.widgets import RedactorEditor
from django.forms import ModelForm, Textarea
from redactor.widgets import RedactorEditor
from suit_redactor.widgets import RedactorWidget

class TeamMemberForm(ModelForm):
    class Meta:
        model = TeamMember
        widgets = {
            'bio':  RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #


class EmailInput(Input):
    input_type = 'email'

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput())

class InlineForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput())


class RegisterForm(forms.Form):
    username = forms.CharField(help_text="The username you will use to login with")
    email = forms.CharField(help_text="You will be asked to verify your email address")
    password1 = forms.CharField(label="Password", help_text="Must be at least 32 characters long and contain exactly 7 unicode characters", widget=forms.PasswordInput())
    password2 = forms.CharField(label="Verify password", help_text="Enter your password again for verificaiton!", widget=forms.PasswordInput())


class FancyForm(forms.Form):
    email = forms.CharField(required=False, label="HTML5 Email Input", help_text="Try typing in a wrong email address and pressing submit", widget=EmailInput())
    placeholder1 = forms.CharField(required=False, label="Placeholder in template", widget=forms.Textarea())
    placeholder2 = forms.CharField(required=False, label="Placeholder in form.py", widget=forms.Textarea(attrs={'rows': 4, 'placeholder': 'This is defines in root/forms.py instead of the template'}))
    fake_error = forms.CharField(label="Error Field")
    long_field = forms.CharField(required=False, label="Long field")
    appended = forms.CharField(required=False, label="Appended text")
    prepended = forms.CharField(required=False, label="Prepended text")


class AdvantageModelForm(ModelForm):
    class Meta:
        model = Advantage
        widgets = {
            'section_one': RedactorWidget(editor_options={'lang': 'en'}),
            'section_two': RedactorWidget(editor_options={'lang': 'en'}),
            'section_three': RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #


class TeamMemberModelForm(ModelForm):
    class Meta:
        model = TeamMember
        widgets = {
            'bio': RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #


class TestimonialModelForm(ModelForm):
    class Meta:
        model = Testimonial
        widgets = {
            'body':  RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #



class AboutUsModelForm(ModelForm):
    class Meta:
        model = AboutUs
        widgets = {
            'body': RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #


class MileStoneForm(ModelForm):
    class Meta:
        model = MileStone
        widgets = {
            'body': RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #


class MileStoneModelForm(ModelForm):
    class Meta:
        model = MileStone
        widgets = {
            'body': RedactorWidget(editor_options={'lang': 'en'}),
        }
        fields = '__all__' #
