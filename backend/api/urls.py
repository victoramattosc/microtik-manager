from rest_framework.routers import DefaultRouter
from django.urls import path
from . import views

router = DefaultRouter()
router.register('organizations', views.OrganizationViewSet)
router.register('states', views.StateStatusViewSet)
router.register('devices', views.DeviceViewSet)
router.register('notifications', views.NotificationViewSet)
router.register('users', views.UserDeviceViewSet)
router.register('speedtests', views.SpeedTestResultViewSet)

urlpatterns = router.urls + [
    path('run-speedtest/', views.run_speedtest, name='run-speedtest'),
]
