from rest_framework import serializers
from django.contrib.auth.models import User
from custom.blog.models import Post
from custom.blog.models import Category
from models import Slide
from models import Service

class CategorySerializer(serializers.ModelSerializer):
   class Meta:
      model = Category

class PostSerializer(serializers.ModelSerializer):
   class Meta:
      model = Post

class SlideSerializer(serializers.ModelSerializer):
   class Meta:
      model = Slide


class ServiceSerializer(serializers.ModelSerializer):
   class Meta:
      model = Service

class UserSerializer(serializers.ModelSerializer):
   class Meta:
      model = User



class GlobalSearchSerializer(serializers.ModelSerializer):

   class Meta:
      model = Post

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
