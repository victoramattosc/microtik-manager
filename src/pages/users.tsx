// src/pages/users.tsx
import React, { useState, useEffect } from 'react';
import {
  Users,
  CheckCircle,
  Shield,
  Activity,
  Filter,
  RefreshCw,
  Eye,
  EyeOff,
  XCircle,
  Download,
  Upload
} from 'lucide-react';

interface User {
  id: number;
  hostname: string;
  ip: string;
  mac: string;
  interface: string;
  tempo: string;
  authorized: boolean;
  traffic: { down: number; up: number };
}

const mockUsers: User[] = [
  { id: 1, hostname: 'PC-JOAO', ip: '192.168.1.100', mac: '00:11:22:33:44:55', interface: 'ether2', tempo: '2h 30m', authorized: true, traffic: { down: 150, up: 50 } },
  { id: 2, hostname: 'SMARTPHONE-MARIA', ip: '192.168.1.101', mac: 'AA:BB:CC:DD:EE:FF', interface: 'wlan1', tempo: '45m', authorized: true, traffic: { down: 80, up: 20 } },
  { id: 3, hostname: 'DESCONHECIDO', ip: '192.168.1.102', mac: '11:22:33:44:55:66', interface: 'wlan1', tempo: '5m', authorized: false, traffic: { down: 200, up: 100 } },
  { id: 4, hostname: 'NOTEBOOK-CARLOS', ip: '192.168.1.103', mac: '77:88:99:AA:BB:CC', interface: 'ether3', tempo: '1h 15m', authorized: true, traffic: { down: 320, up: 85 } }
];

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(mockUsers);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Usuários Conectados</h1>
        <p className="text-gray-600">Monitoramento em tempo real de dispositivos na rede</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Conectados</h3>
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-blue-500">{users.length}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Autorizados</h3>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-500">
            {users.filter(u => u.authorized).length}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Intrusos</h3>
            <Shield className="w-6 h-6 text-red-500" />
          </div>
          <div className="text-3xl font-bold text-red-500">
            {users.filter(u => !u.authorized).length}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tráfego Total</h3>
            <Activity className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-3xl font-bold text-purple-500">
            {users.reduce((acc, u) => acc + u.traffic.down, 0)} MB
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dispositivos Ativos</h2>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
              <Filter className="w-4 h-4 mr-1" />
              Filtrar
            </button>
            <button className="flex items-center px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              <RefreshCw className="w-4 h-4 mr-1" />
              Atualizar
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Dispositivo</th>
                <th className="text-left p-4 font-semibold">IP / MAC</th>
                <th className="text-left p-4 font-semibold">Interface</th>
                <th className="text-left p-4 font-semibold">Tempo</th>
                <th className="text-left p-4 font-semibold">Tráfego</th>
                <th className="text-left p-4 font-semibold">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${
                      u.authorized ? 'bg-green-500' : 'bg-red-500 animate-pulse'
                    }`} />
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      u.authorized ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {u.authorized ? 'Autorizado' : 'Intruso'}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{u.hostname}</td>
                  <td className="p-4">
                    <div className="text-sm">
                      <div className="font-medium">{u.ip}</div>
                      <div className="text-gray-500">{u.mac}</div>
                    </div>
                  </td>
                  <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-sm">{u.interface}</span></td>
                  <td className="p-4 text-sm">{u.tempo}</td>
                  <td className="p-4">
                    <div className="flex space-x-2 text-sm">
                      <div className="flex items-center"><Download className="w-3 h-3 mr-1 text-green-600" />{u.traffic.down} MB</div>
                      <div className="flex items-center"><Upload className="w-3 h-3 mr-1 text-blue-600" />{u.traffic.up} MB</div>
                    </div>
                  </td>
                  <td className="p-4 flex space-x-2">
                    <button className="p-1 text-blue-600 hover:bg-blue-100 rounded"><Eye className="w-4 h-4" /></button>
                    {!u.authorized && (
                      <button className="p-1 text-red-600 hover:bg-red-100 rounded"><XCircle className="w-4 h-4" /></button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
