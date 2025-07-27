from rest_framework import serializers
from .models import (
    Organization,
    StateStatus,
    Device,
    Notification,
    UserDevice,
    SpeedTestResult,
)


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = "__all__"


class StateStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = StateStatus
        fields = "__all__"


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = "__all__"


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"


class UserDeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDevice
        fields = "__all__"


class SpeedTestResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpeedTestResult
        fields = "__all__"
