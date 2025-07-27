from django.contrib import admin
from .models import (
    Organization,
    StateStatus,
    Device,
    Notification,
    UserDevice,
    SpeedTestResult,
)

admin.site.register(Organization)
admin.site.register(StateStatus)
admin.site.register(Device)
admin.site.register(Notification)
admin.site.register(UserDevice)
admin.site.register(SpeedTestResult)
