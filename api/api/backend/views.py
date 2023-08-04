from rest_framework import generics
from django.shortcuts import render
from .models import Event, Speaker, Tag
from .serializers import *

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q

# Create your views here.

@api_view(['GET'])
def event_list(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def event_detail(request, event_id):
    event = Event.objects.get(pk=event_id)
    serializer = EventSerializer(event)
    return Response(serializer.data)



class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class SpeakerListCreateView(generics.ListCreateAPIView):
    queryset = Speaker.objects.all()
    serializer_class = SpeakerSerializer

class SpeakerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Speaker.objects.all()
    serializer_class = SpeakerSerializer

class TagListCreateView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

@api_view(['GET'])
def search(request):
    query = request.GET.get('q', '')  # Get the search query from the request parameters
    events = Event.objects.filter(Q(name__icontains=query) | Q(speaker__name__icontains=query)).distinct()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)
