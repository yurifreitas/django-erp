# bookings/routing.py

from django.urls import re_path
from .consumers import BookingConsumer

websocket_urlpatterns = [
    re_path(r'ws/bookings/$', BookingConsumer.as_asgi()),
]
