# Django Imports
import django.contrib.auth as auth
from django.contrib.auth import authenticate
from django.contrib.auth import login
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models import Q,Min,Max
from django.shortcuts import render

# Restless Endpoints 
from restless.views import Endpoint

from custom.utils.models import Logger

from models import Category
from models import Post
from models import Comment

from serializers import CategorySerializer
from serializers import PostSerializer
from serializers import CommentSerializer


############################################
## Add comment to a post                  ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class AddCommentView(Endpoint):

    @csrf_exempt
    def get(self, request):
        user = request.user
        post_id = request.params.get('post_id','')
        comment = request.params.get('comment','')
   

    @csrf_exempt
    def post(self, request):
        user = request.user
        post_id = request.data['post_id']
        commment = request.data['comment']
        


############################################
## Add comment to a post                  ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class EditCommentView(Endpoint):

    @csrf_exempt
    def get(self, request):
        user = request.user


    @csrf_exempt
    def post(self, request):
        user = request.user



############################################
## Add a New Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class AddPostView(Endpoint):

    @csrf_exempt
    def get(self, request):

        user = request.user
        title = request.params.get("title","")
        body = request.params.get("body","")  
        category_id = request.params.get("category_id","")

        try:

            category = Category.objects.get(id=int(category_id))
            post = Post.objects.create(title=title,body=body,category=category,author=user)
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return serializer.data

        except Exception,R:
            return {'message':'error '+str(R)}


    @csrf_exempt
    def post(self, request):

        user = request.user
        title = request.data["title"]
        body = request.data["body"]
        category_id = request.data["category_id"]
        link = request.data["link"]
 
        try:

            category = Category.objects.get(id=int(category_id))
            post = Post.objects.create(title=title,body=body,category=category,author=user,link=link,is_published=True)
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}     

############################################
## Add a New Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class GetPostsView(Endpoint):

    @csrf_exempt
    def get(self, request):

        user = request.user

        try:

            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return serializer.data

        except Exception,R:
            return {'message':'error '+str(R)}


    @csrf_exempt
    def post(self, request):

        user = request.user

        try:

            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}


############################################
## Delete a Post view                     ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class DeletePostView(Endpoint):

    @csrf_exempt
    def get(self, request):
        user = request.user
        post_id = request.params.get("post_id","")

        try:
            post = Post.objects.get(id=int(post_id))
            post.delete()
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}

        

    @csrf_exempt
    def post(self, request):
        user = request.user
        post_id = request.data["post_id"]


        try:
            post = Post.objects.get(id=int(post_id))
            post.delete()
            posts = Post.objects.filter(author=user)
            serializer = PostSerializer(posts,many=True)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}


############################################
## Archive a Post view                    ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class ArchivePostView(Endpoint):

    @csrf_exempt
    def get(self, request):

        user = request.user
        post_id = request.params.get("post_id","")

    @csrf_exempt
    def post(self, request):

        user = request.user
        post_id = request.data["post_id"]


############################################
## Delete a Post view                     ##
## Extends: restless Endpoint             ##
## METHOD:  GET, POST                     ##
## Type:    Endpoint View (JSON)          ##
############################################

class ReadPostView(Endpoint):

    @csrf_exempt
    def get(self, request):
        user = request.user
        post_id = request.params.get("post_id","")

        try:
            post = Post.objects.get(id=int(post_id))
            serializer = PostSerializer(post,many=False)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}



    @csrf_exempt
    def post(self, request):
        user = request.user
        post_id = request.data["post_id"]


        try:
            post = Post.objects.get(id=int(post_id))
            serializer = PostSerializer(post,many=False)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}

