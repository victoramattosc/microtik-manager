import random
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils import timezone
from .models import (
    Organization,
    StateStatus,
    Device,
    Notification,
    UserDevice,
    SpeedTestResult,
)
from .serializers import (
    OrganizationSerializer,
    StateStatusSerializer,
    DeviceSerializer,
    NotificationSerializer,
    UserDeviceSerializer,
    SpeedTestResultSerializer,
)


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer


class StateStatusViewSet(viewsets.ModelViewSet):
    queryset = StateStatus.objects.all()
    serializer_class = StateStatusSerializer


class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer


class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


class UserDeviceViewSet(viewsets.ModelViewSet):
    queryset = UserDevice.objects.all()
    serializer_class = UserDeviceSerializer


class SpeedTestResultViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SpeedTestResult.objects.all()
    serializer_class = SpeedTestResultSerializer


@api_view(["POST"])
def run_speedtest(request):
    device_id = request.data.get("device")
    device = Device.objects.filter(id=device_id).first() if device_id else Device.objects.first()
    result = SpeedTestResult.objects.create(
        device=device,
        download=round(random.uniform(50, 100), 2),
        upload=round(random.uniform(40, 90), 2),
        ping=random.randint(5, 30),
        jitter=round(random.uniform(1, 10), 2),
        provider="Vivo Fibra",
        ip=request.META.get("REMOTE_ADDR", "0.0.0.0"),
        created_at=timezone.now(),
    )
    return Response(SpeedTestResultSerializer(result).data)
