from django.db import models
from django.contrib.auth.models import User

class Organization(models.Model):
    """A customer organization owning multiple routers."""
    name = models.CharField(max_length=100)
    users = models.ManyToManyField(User, related_name="organizations", blank=True)

    def __str__(self):
        return self.name


class StateStatus(models.Model):
    STATUS_CHOICES = [
        ("ok", "Ok"),
        ("warning", "Warning"),
        ("error", "Error"),
    ]
    uf = models.CharField(max_length=2, unique=True)
    status = models.CharField(max_length=7, choices=STATUS_CHOICES)
    operadora = models.CharField(max_length=100)
    reclamacoes = models.PositiveIntegerField()
    ping = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.uf} - {self.operadora}"


class Device(models.Model):
    STATUS_CHOICES = [("online", "Online"), ("offline", "Offline")]
    organization = models.ForeignKey(
        Organization, on_delete=models.CASCADE, related_name="devices"
    )
    name = models.CharField(max_length=100)
    ip = models.GenericIPAddressField()
    status = models.CharField(max_length=7, choices=STATUS_CHOICES)
    uptime = models.CharField(max_length=50)
    users = models.PositiveIntegerField()
    provider = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.ip})"


class Notification(models.Model):
    TYPE_CHOICES = [
        ("intruso", "Intruso"),
        ("offline", "Offline"),
        ("lentidao", "Lentidao"),
        ("conexao", "Conexao"),
    ]
    SEVERITY_CHOICES = [("high", "Alta"), ("medium", "Media"), ("low", "Baixa")]

    device = models.ForeignKey(
        Device, on_delete=models.CASCADE, related_name="notifications"
    )
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    message = models.TextField()
    time = models.DateTimeField()
    severity = models.CharField(max_length=6, choices=SEVERITY_CHOICES)

    def __str__(self):
        return self.message


class UserDevice(models.Model):
    device = models.ForeignKey(
        Device, on_delete=models.CASCADE, related_name="user_devices"
    )
    hostname = models.CharField(max_length=100)
    ip = models.GenericIPAddressField()
    mac = models.CharField(max_length=17)
    interface = models.CharField(max_length=50)
    tempo = models.CharField(max_length=50)
    authorized = models.BooleanField(default=True)
    traffic_down = models.PositiveIntegerField()
    traffic_up = models.PositiveIntegerField()

    def __str__(self):
        return self.hostname


class SpeedTestResult(models.Model):
    device = models.ForeignKey(
        Device, on_delete=models.CASCADE, related_name="speedtests"
    )
    download = models.FloatField()
    upload = models.FloatField()
    ping = models.PositiveIntegerField()
    jitter = models.FloatField()
    provider = models.CharField(max_length=100)
    ip = models.GenericIPAddressField()
    created_at = models.DateTimeField(auto_now_add=True)
