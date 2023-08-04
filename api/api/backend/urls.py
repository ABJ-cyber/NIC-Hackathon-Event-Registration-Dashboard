from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


urlpatterns = [
    path('events/', EventListCreateView.as_view(), name='event-list'),
    path('events/<int:pk>/', EventRetrieveUpdateDestroyView.as_view(), name='event-detail'),
    path('speakers/', SpeakerListCreateView.as_view(), name='speaker-list'),
    path('speakers/<int:pk>/', SpeakerRetrieveUpdateDestroyView.as_view(), name='speaker-detail'),
    path('tags/', TagListCreateView.as_view(), name='tag-list'),
    path('tags/<int:pk>/', TagRetrieveUpdateDestroyView.as_view(), name='tag-detail'),
]