from django.db import models

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=200)
    date_time = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='speaker_photos/', blank=True, null=True)


class Speaker(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    bio = models.TextField()
    email = models.EmailField()
    photo = models.ImageField(upload_to='speaker_photos/', blank=True, null=True)
    def __str__(self):
        return self.name
    
class Tag(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)


