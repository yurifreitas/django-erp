from celery import shared_task
from time import sleep
from django.core.mail import send_mail
from bookings.models import Booking

@shared_task
def send_booking_confirmation(booking_id):
    sleep(2)  # Simulating email sending delay
    booking = Booking.objects.get(id=booking_id)
    send_mail(
        subject="Booking Confirmation",
        message=f"Dear {booking.customer.name}, your booking for {booking.room} is confirmed!",
        from_email="hotel@erp.com",
        recipient_list=[booking.customer.email],
    )
    return f"Booking confirmation sent to {booking.customer.email}"
