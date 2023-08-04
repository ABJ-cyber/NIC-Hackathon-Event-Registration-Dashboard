from django.contrib import admin
from .models import Event, Speaker, Tag

admin.site.register(Event)
admin.site.register(Speaker)
admin.site.register(Tag)