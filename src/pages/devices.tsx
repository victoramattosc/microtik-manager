// src/pages/devices.tsx
import React, { useState, useEffect } from 'react';
import {
  Router,
  Settings,
  RefreshCw,
  Network,
  Shield
} from 'lucide-react';

interface Device {
  id: number;
  name: string;
  ip: string;
  status: 'online' | 'offline';
  uptime: string;
  users: number;
  provider: string;
}

const mockDevices: Device[] = [
  { id: 1, name: 'Matriz Principal', ip: '192.168.0.1', status: 'online', uptime: '15 dias', users: 25, provider: 'Vivo Fibra' },
  { id: 2, name: 'Filial Centro', ip: '192.168.1.1', status: 'offline', uptime: '0 dias', users: 0, provider: 'Claro NET' },
  { id: 3, name: 'Filial Norte', ip: '192.168.2.1', status: 'online', uptime: '8 dias', users: 18, provider: 'TIM Live' }
];

const Devices: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    setDevices(mockDevices);
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dispositivos Mikrotik</h1>
        <p className="text-gray-600">Gerencie todos os seus dispositivos Mikrotik em um só lugar</p>
      </div>
      <div className="mb-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + Adicionar Dispositivo
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Seus Dispositivos</h2>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {devices.map(d => (
            <div key={d.id} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Router className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">{d.name}</h3>
                    <p className="text-sm text-gray-600">{d.ip}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  d.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${
                    d.status === 'online' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {d.status === 'online' ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime:</span>
                  <span>{d.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Usuários:</span>
                  <span>{d.users}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Provedor:</span>
                  <span>{d.provider}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-50 text-blue-700 py-2 px-3 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                  Gerenciar
                </button>
                <button className="bg-gray-50 text-gray-700 py-2 px-3 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Ações Rápidas</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <div className="font-medium">Reiniciar DHCP</div>
              <div className="text-sm text-gray-600">Renovar leases DHCP</div>
            </div>
          </button>
          <button className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <Network className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <div className="font-medium">Resetar Interface</div>
              <div className="text-sm text-gray-600">Reiniciar interface de rede</div>
            </div>
          </button>
          <button className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <Shield className="w-6 h-6 text-red-600 mr-3" />
            <div>
              <div className="font-medium">Bloquear Intruso</div>
              <div className="text-sm text-gray-600">Bloquear dispositivo não autorizado</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Devices;
