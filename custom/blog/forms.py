from django.forms import ModelForm, Textarea
from redactor.widgets import RedactorEditor
from models import Post


class PostForm(ModelForm):
    class Meta:
        model = Post
        widgets = {
            'body':  RedactorEditor(),
        }
        fields = '__all__' #

