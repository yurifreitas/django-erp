from rest_framework import serializers
from .models import Housekeeping

class HousekeepingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housekeeping
        fields = "__all__"
