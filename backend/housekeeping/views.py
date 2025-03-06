from rest_framework import viewsets
from .models import Housekeeping
from .serializers import HousekeepingSerializer

class HousekeepingViewSet(viewsets.ModelViewSet):
    queryset = Housekeeping.objects.all()
    serializer_class = HousekeepingSerializer
