// src/pages/alerts.tsx
import React, { useState, useEffect } from 'react';
import {
  XCircle,
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

interface Notification {
  id: number;
  type: 'intruso' | 'offline' | 'lentidao' | 'conexao';
  message: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

const mockNotifications: Notification[] = [
  { id: 1, type: 'intruso', message: 'Dispositivo não autorizado conectado: DESCONHECIDO (192.168.1.102)', time: '2 min atrás', severity: 'high' },
  { id: 2, type: 'offline', message: 'Mikrotik Filial Centro ficou offline', time: '15 min atrás', severity: 'high' },
  { id: 3, type: 'lentidao', message: 'Latência alta detectada na rede: 150ms', time: '1h atrás', severity: 'medium' },
  { id: 4, type: 'conexao', message: 'Novo usuário conectado: NOTEBOOK-CARLOS', time: '2h atrás', severity: 'low' }
];

const Alerts: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications(mockNotifications);
  }, []);

  const typeBadge = (type: string) => {
    switch(type) {
      case 'intruso': return 'bg-red-100 text-red-800';
      case 'offline': return 'bg-gray-100 text-gray-800';
      case 'lentidao': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const dotColor = (sev: string) => {
    switch(sev) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Alertas & Notificações</h1>
        <p className="text-gray-600">Central de notificações e configurações de alertas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Alertas Críticos</h3>
            <XCircle className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-3xl font-bold text-red-500 mb-2">
            {notifications.filter(n => n.severity === 'high').length}
          </div>
          <p className="text-gray-600">requerem atenção imediata</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Avisos</h3>
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-yellow-500 mb-2">
            {notifications.filter(n => n.severity === 'medium').length}
          </div>
          <p className="text-gray-600">alertas de média prioridade</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Informações</h3>
            <CheckCircle className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-blue-500 mb-2">
            {notifications.filter(n => n.severity === 'low').length}
          </div>
          <p className="text-gray-600">notificações informativas</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Notificações Recentes</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm">Marcar todas como lidas</button>
        </div>
        <div className="divide-y">
          {notifications.map(n => (
            <div key={n.id} className="p-6 hover:bg-gray-50 flex items-start">
              <div className={`${dotColor(n.severity)} w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${typeBadge(n.type)}`}>
                    {n.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{n.time}</span>
                </div>
                <p className="text-sm text-gray-800">{n.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Configurações de Notificação</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="font-semibold">Telegram</h3>
            </div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              Intrusos detectados
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              Dispositivos offline
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Relatórios diários
            </label>
            <button className="w-full mt-4 bg-green-50 text-green-700 py-2 rounded-lg text-sm hover:bg-green-100">
              Configurar Bot
            </button>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              Alertas críticos
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Resumos semanais
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Manutenções programadas
            </label>
            <button className="w-full mt-4 bg-blue-50 text-blue-700 py-2 rounded-lg text-sm hover:bg-blue-100">
              Configurar SMTP
            </button>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="font-semibold">WhatsApp</h3>
            </div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Emergências
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Falhas críticas
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Status diário
            </label>
            <button className="w-full mt-4 bg-purple-50 text-purple-700 py-2 rounded-lg text-sm hover:bg-purple-100">
              Configurar API
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
