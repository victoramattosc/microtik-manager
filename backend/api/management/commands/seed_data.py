from django.core.management.base import BaseCommand
from django.utils import timezone
from django.contrib.auth import get_user_model
from api.models import Organization, StateStatus, Device, Notification, UserDevice


class Command(BaseCommand):
    help = "Seed initial data"

    def handle(self, *args, **options):
        if Organization.objects.exists():
            self.stdout.write("Data already seeded")
            return

        user_model = get_user_model()
        admin_user, _ = user_model.objects.get_or_create(username="admin")

        org = Organization.objects.create(name="Empresa X")
        org.users.add(admin_user)

        states = {
            "SP": {"status": "ok", "operadora": "Vivo", "reclamacoes": 2, "ping": 15},
            "RJ": {"status": "warning", "operadora": "Claro", "reclamacoes": 15, "ping": 45},
            "MG": {"status": "error", "operadora": "Oi", "reclamacoes": 78, "ping": 120},
            "RS": {"status": "ok", "operadora": "TIM", "reclamacoes": 5, "ping": 22},
            "PR": {"status": "warning", "operadora": "Vivo", "reclamacoes": 12, "ping": 38},
        }
        for uf, data in states.items():
            StateStatus.objects.create(uf=uf, **data)

        devices = [
            {"name": "Matriz Principal", "ip": "192.168.0.1", "status": "online", "uptime": "15 dias", "users": 25, "provider": "Vivo Fibra"},
            {"name": "Filial Centro", "ip": "192.168.1.1", "status": "offline", "uptime": "0 dias", "users": 0, "provider": "Claro NET"},
            {"name": "Filial Norte", "ip": "192.168.2.1", "status": "online", "uptime": "8 dias", "users": 18, "provider": "TIM Live"},
        ]
        created_devices = []
        for d in devices:
            created_devices.append(Device.objects.create(organization=org, **d))

        notifications = [
            {"device": created_devices[0], "type": "intruso", "message": "Dispositivo não autorizado conectado: DESCONHECIDO (192.168.1.102)", "time": timezone.now(), "severity": "high"},
            {"device": created_devices[1], "type": "offline", "message": "Mikrotik Filial Centro ficou offline", "time": timezone.now(), "severity": "high"},
            {"device": created_devices[0], "type": "lentidao", "message": "Latência alta detectada na rede: 150ms", "time": timezone.now(), "severity": "medium"},
            {"device": created_devices[2], "type": "conexao", "message": "Novo usuário conectado: NOTEBOOK-CARLOS", "time": timezone.now(), "severity": "low"},
        ]
        for n in notifications:
            Notification.objects.create(**n)

        users = [
            {"device": created_devices[0], "hostname": "PC-JOAO", "ip": "192.168.1.100", "mac": "00:11:22:33:44:55", "interface": "ether2", "tempo": "2h 30m", "authorized": True, "traffic_down": 150, "traffic_up": 50},
            {"device": created_devices[0], "hostname": "SMARTPHONE-MARIA", "ip": "192.168.1.101", "mac": "AA:BB:CC:DD:EE:FF", "interface": "wlan1", "tempo": "45m", "authorized": True, "traffic_down": 80, "traffic_up": 20},
            {"device": created_devices[1], "hostname": "DESCONHECIDO", "ip": "192.168.1.102", "mac": "11:22:33:44:55:66", "interface": "wlan1", "tempo": "5m", "authorized": False, "traffic_down": 200, "traffic_up": 100},
            {"device": created_devices[2], "hostname": "NOTEBOOK-CARLOS", "ip": "192.168.1.103", "mac": "77:88:99:AA:BB:CC", "interface": "ether3", "tempo": "1h 15m", "authorized": True, "traffic_down": 320, "traffic_up": 85},
        ]
        for u in users:
            UserDevice.objects.create(**u)

        self.stdout.write(self.style.SUCCESS("Data seeded"))
