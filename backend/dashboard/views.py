from rest_framework.decorators import api_view
from rest_framework.response import Response
from bookings.models import Booking
from rooms.models import Room
from payments.models import Payment
from django.db.models import Count, Sum


@api_view(["GET"])
def dashboard_summary(request):
    total_bookings = Booking.objects.count()
    total_rooms = Room.objects.count()
    total_revenue = Payment.objects.filter(status="Completed").aggregate(Sum("amount"))["amount__sum"] or 0
    occupied_rooms = Booking.objects.filter(status="Confirmed").count()

    data = {
        "total_bookings": total_bookings,
        "total_rooms": total_rooms,
        "total_revenue": total_revenue,
        "occupied_rooms": occupied_rooms,
    }
    return Response(data)
