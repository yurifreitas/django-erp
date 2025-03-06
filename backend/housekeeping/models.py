from django.db import models
from rooms.models import Room

class Housekeeping(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[("Clean", "Clean"), ("Dirty", "Dirty"), ("In Progress", "In Progress")])
    last_cleaned = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Room {self.room.number} - {self.status}"
