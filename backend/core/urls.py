from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.documentation import include_docs_urls
# Import ViewSets
from bookings.views import BookingViewSet
from rooms.views import RoomViewSet
from customers.views import CustomerViewSet
from payments.views import PaymentViewSet
from employees.views import EmployeeViewSet
from housekeeping.views import HousekeepingViewSet
from dashboard.views import dashboard_summary
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

# Django REST Framework Router
router = DefaultRouter()
router.register(r"bookings", BookingViewSet)
router.register(r"rooms", RoomViewSet)
router.register(r"customers", CustomerViewSet)
router.register(r"payments", PaymentViewSet)
router.register(r"employees", EmployeeViewSet)
router.register(r"housekeeping", HousekeepingViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),

    # Authentication (JWT)
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # Dashboard API
    path("api/dashboard/", dashboard_summary, name="dashboard-summary"),

    # Include all API endpoints
    path("api/", include(router.urls)),
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
