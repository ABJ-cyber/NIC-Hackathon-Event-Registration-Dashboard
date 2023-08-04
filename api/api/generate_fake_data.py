import os
import django
import random
from faker import Faker

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')  # Replace 'your_project_name' with your project name
django.setup()

# Import your Django models
from backend.models import Event, Speaker, Tag  # Replace 'your_app_name' with your app name

fake = Faker()

# Function to generate random events
def generate_events(num_events):
    for _ in range(num_events):
        event = Event(
            name=fake.catch_phrase(),
            date_time=fake.date_time_this_decade(),
            location=fake.address(),
            description=fake.text(max_nb_chars=200),
        )
        event.save()

# Function to generate random speakers
def generate_speakers(num_speakers):
    events = Event.objects.all()
    for _ in range(num_speakers):
        speaker = Speaker(
            event=random.choice(events),
            name=fake.name(),
            bio=fake.paragraph(),
            email=fake.email(),
        )
        speaker.save()

# Function to generate random tags
def generate_tags(num_tags):
    events = Event.objects.all()
    for _ in range(num_tags):
        tag = Tag(
            event=random.choice(events),
            name=fake.word(),
        )
        tag.save()

if __name__ == '__main__':
    num_events = 10  # Number of events to generate
    num_speakers = 20  # Number of speakers to generate
    num_tags = 15  # Number of tags to generate

    generate_events(num_events)
    generate_speakers(num_speakers)
    generate_tags(num_tags)

    print(f"{num_events} events, {num_speakers} speakers, and {num_tags} tags were generated and saved to the database.")
