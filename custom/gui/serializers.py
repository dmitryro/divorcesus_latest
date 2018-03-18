from rest_framework import serializers
from custom.blog.models import Post
from models import Slide
from models import Service
from models import AskTemplate

class AskTemplateSerializer(serializers.ModelSerializer):
   class Meta:
      model = AskTemplate
      fields = ('id', 'ask_intro', 'agreement', 'disclaimer',)

class SlideSerializer(serializers.ModelSerializer):
   class Meta:
      model = Slide


class ServiceSerializer(serializers.ModelSerializer):
   class Meta:
      model = Service
      fields = ('id', 'title', 'statement', 'description', 'service',)


class GlobalSearchSerializer(serializers.ModelSerializer):

   class Meta:

      model = Post
      fields = ('id', 'author', 'title', 'time_published', 
                'category', 'body', 'link', 'image', 'total_comments')

   def to_native(self, obj):

      if isinstance(obj, Post): 
         serializer = PostSerializer(obj)

      elif isinstance(obj,Service):
         serializer = ServiceSerializer(obj)

      elif isinstance(obj, Slide):
         serializer = SlideSerializer(obj)

      else:
         raise Exception("Neither a Snippet nor User instance!")

      return serializer.data
