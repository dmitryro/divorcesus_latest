from rest_framework import serializers
from rest_framework import generics

from models import Category
from models import Post
from models import Comment


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = StateProvince
        fields = ('id','name','code')


class PostSerializer(serializers.ModelSerializer):

    category = CategorySerializer(many=False,read_only=True)

    class Meta:
        model = Post
        fields = ('id','author','title','time_published','category','body')

class CommentSerializer(serializers.ModelSerializer):

    post = PostSerializer(many=False,read_only=True)

    class Meta:
        model = Comment
        fields = ('id','title','body','author','post')
