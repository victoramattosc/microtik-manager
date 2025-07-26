// src/components/Sidebar.tsx
import React from 'react';
import {
  Router,
  Globe,
  Zap,
  Users,
  Activity,
  Server,
  Bell
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => (
  <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
    <div className="flex items-center mb-8">
      <Router className="w-8 h-8 mr-3 text-blue-400" />
      <h1 className="text-xl font-bold">MikroManager</h1>
    </div>
    <nav className="space-y-2">
      <button
        onClick={() => setCurrentPage('dashboard')}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
          currentPage === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'
        }`}
      >
        <Globe className="w-5 h-5 mr-3" />
        Dashboard Nacional
      </button>
      <button
        onClick={() => setCurrentPage('testing')}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
          currentPage === 'testing' ? 'bg-blue-600' : 'hover:bg-gray-800'
        }`}
      >
        <Zap className="w-5 h-5 mr-3" />
        Teste de Internet
      </button>
      <button
        onClick={() => setCurrentPage('users')}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
          currentPage === 'users' ? 'bg-blue-600' : 'hover:bg-gray-800'
        }`}
      >
        <Users className="w-5 h-5 mr-3" />
        Usuários Conectados
      </button>
      <button
        onClick={() => setCurrentPage('monitoring')}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
          currentPage === 'monitoring' ? 'bg-blue-600' : 'hover:bg-gray-800'
        }`}
      >
        <Activity className="w-5 h-5 mr-3" />
        Monitoramento
      </button>
      <button
        onClick={() => setCurrentPage('devices')}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
          currentPage === 'devices' ? 'bg-blue-600' : 'hover:bg-gray-800'
        }`}
      >
        <Server className="w-5 h-5 mr-3" />
        Dispositivos Mikrotik
      </button>
      <button
        onClick={() => setCurrentPage('alerts')}
        className={`w-full flex items-center p-3 rounded-lg transition-colors ${
          currentPage === 'alerts' ? 'bg-blue-600' : 'hover:bg-gray-800'
        }`}
      >
        <Bell className="w-5 h-5 mr-3" />
        Alertas & Notificações
      </button>
    </nav>
  </div>
);

export default Sidebar;
