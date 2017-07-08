from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from restless.views import Endpoint
from rest_framework import viewsets
from signals import message_sent
from signals import message_deleted
from signals import message_updated
from callbacks import message_deleted_handler
from callbacks import message_sent_handler
from callbacks import message_updated_handler
from serializers import MessageSerializer
from serializers import NotificationSerializer
from serializers import NotificationTypeSerializer
from filters import MessageFilter
from filters import NotificationFilter
from models import Message
from models import Notification
from models import NotificationType
from custom.utils.models import Logger
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

class IncomingMessagesList(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = (AllowAny,)
    renderer_classes = (JSONRenderer, )

    def get_queryset(self):
        """
        This view should return a list of all the messages
        that are outgoing for the given sender.
        """
        try:
            receiver_id = self.kwargs['receiver_id']
            receiver_id = int(receiver_id)
            log = Logger(log='RECEIVER ID A IS %d'%receiver_id)
            log.save()

            return Message.objects.filter(receiver_id=receiver_id)

        except Exception, R:
            receiver_id = self.request.user.id
            log = Logger(log='RECEIVER ID B IS %d'%receiver_id)
            log.save()

            return Message.objects.filter(receiver_id=receiver_id)


 


class OutgoingMessagesList(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = (AllowAny,)
    renderer_classes = (JSONRenderer, )

    def get_queryset(self):
        """
        This view should return a list of all the messages
        that are outgoing for the given sender.
        """

        try:
            sender_id = self.kwargs['sender_id']
            sender_id = int(sender_id)
            return Message.objects.filter(sender_id=sender_id)

#            return Message.objects.filter(sender_id=sender_id)
        except Exception, R:
            sender_id = self.request.user.id
            return Message.objects.filter(sender_id=sender_id)

      #      return Message.objects.filter(sender_id=sender_id)
 

class NotificationTypeViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = NotificationTypeSerializer
    queryset = NotificationType.objects.all()


class NotificationViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = NotificationSerializer
    filter_class = NotificationFilter
    queryset = Notification.objects.all()

class MessageViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = MessageSerializer
    filter_class = MessageFilter
    queryset = Message.objects.all()
    
class SendMessageView(Endpoint):
    @csrf_exempt
    def get(self, request):
        title = request.params.get('title','')
        body = request.params.get('body','')
        receiver_id = int(request.params.get('receiver_id'))

        try:

           receiver = User.objects.get(id=receiver_id)
           log = Logger(log='BYPASSED ONE')
           log.save()

           sender = request.user
           log = Logger(log='BYPASSED TWO')
           log.save()

           #return {"receiver":receiver.id,"sender":sender.id}

        except Exception, R:
           log = Logger(log="WE FAILED LOUDLY"+str(r))
           log.save()
           return {"message":"error"+str(R)}


        try:
            message = Message.objects.create(title=title,
                                             body=body,
                                             sender=sender,
                                             receiver=receiver)

            messages_list = Message.objects.filter(sender_id=sender.id)

            serializer = MessageSerializer(messages_list, many=True)
        except Exception, R:
            log = Logger(log=str(R))
            log.save()

        return {'messages':serializer.data}

    @csrf_exempt
    def post(self, request):

        title = request.data['title']
        body = request.data['body']

        log = Logger(log='MESSAGE TITLE %s'%title)
        log.save()
        log = Logger(log='MESSAGE BODY %s'%body)  
        log.save() 

        try:
            receiver_id = int(request.data['receiver_id'])
            log = Logger(log='MESSAGE RECEIVER ID %s'%receiver_id)
            log.save()
        except Exception, R:
            return {"message":"error"+str(R)}

        try:

           receiver = User.objects.get(id=receiver_id)
           log = Logger(log='BYPASSED ONE')
           log.save()

           sender = request.user
           log = Logger(log='BYPASSED TWO')
           log.save()

           #return {"receiver":receiver.id,"sender":sender.id}

        except Exception, R:
           log = Logger(log="WE FAILED LOUDLY"+str(r))
           log.save()
           return {"message":"error"+str(R)}


        try:
            message = Message.objects.create(title=title,
                                             body=body,
                                             sender=sender,
                                             receiver=receiver)

            messages_list = Message.objects.filter(sender_id=sender.id)

            serializer = MessageSerializer(messages_list, many=True)
        except Exception, R:
            log = Logger(log=str(R))
            log.save()
            return {'messages':''}
 
        return {'messages':serializer.data}


class DeleteMessageView(Endpoint):
    @csrf_exempt
    def get(self, request):
        try:
            message_id = int(request.params.get('message_id',''))
            mode = int(request.params.get('mode',''))
            message = Message.objects.get(id=message_id)
            message.delete()
            messages_list = Message.objects.filter(sender_id=request.user.id)

            if mode==1:
                messages_list = Message.objects.filter(sender_id=request.user.id)
            else:
                messages_list = Message.objects.filter(receiver_id=request.user.id)

            serializer = MessageSerializer(messages_list, many=True)
            return {'messages':serializer.data}

        except Exception, R:
            log = Logger(log="SOMETHING BAD HAS HAPPENED "+str(R))
            log.save()
            return {'messages':'error','exception':'message id is a mandatory'}


    @csrf_exempt
    def post(self, request):
        try:
            message_id = int(request.data['message_id'])
            mode = int(request.data['mode'])
            message = Message.objects.get(id=message_id)
            message.delete()

            if mode==1:
                messages_list = Message.objects.filter(sender_id=request.user.id)
            else:
                messages_list = Message.objects.filter(receiver_id=request.user.id)

            serializer = MessageSerializer(messages_list, many=True)
            return {'messages':serializer.data}

        except Exception, R:
            log = Logger(log="SOMETHING BAD HAS HAPPENED "+str(R))
            log.save()
            return {'messages':'error','exception':'message id is a mandatory'}


class UpdateMessageView(Endpoint):
    @csrf_exempt
    def get(self, request):
        return {'message':'error','exception':'email is a mandatory'}

    @csrf_exempt
    def post(self, request):
        return {'message':'error','exception':'email is a mandatory'}


class ReadMessageView(Endpoint):

    @csrf_exempt
    def get(self, request):
        user = request.user
        message_id = request.params.get("message_id","")

        try:
            message = Post.objects.get(id=int(message_id))

            message.is_seen = True
            message.save()

            serializer = MessageSerializer(message,many=False)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}



    @csrf_exempt
    def post(self, request):
        user = request.user
        message_id = request.data["message_id"]


        try:
            message = Message.objects.get(id=int(message_id))

            message.is_seen = True
            message.save()

            serializer = MessageSerializer(message,many=False)
            return serializer.data

        except Exception,R:
            log = Logger(log=str(R))
            log.save()
            return {'message':'error  '+str(R)}




message_sent.connect(message_sent_handler)
message_deleted.connect(message_deleted_handler)
message_updated.connect(message_updated_handler)
