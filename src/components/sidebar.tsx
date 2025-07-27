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
  <div className="bg-gradient-to-b from-slate-800 to-slate-900 text-white w-64 min-h-screen p-6 shadow-lg">
    <div className="flex items-center mb-8">
      <Router className="w-8 h-8 mr-3 text-blue-400" />
      <h1 className="text-xl font-bold">MikroManager</h1>
    </div>
    <nav className="space-y-2 text-sm">
      <button
        onClick={() => setCurrentPage('dashboard')}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          currentPage === 'dashboard' ? 'bg-slate-700' : 'hover:bg-slate-700'
        }`}
      >
        <Globe className="w-5 h-5" />
        Dashboard Nacional
      </button>
      <button
        onClick={() => setCurrentPage('testing')}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          currentPage === 'testing' ? 'bg-slate-700' : 'hover:bg-slate-700'
        }`}
      >
        <Zap className="w-5 h-5" />
        Teste de Internet
      </button>
      <button
        onClick={() => setCurrentPage('users')}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          currentPage === 'users' ? 'bg-slate-700' : 'hover:bg-slate-700'
        }`}
      >
        <Users className="w-5 h-5" />
        Usuários Conectados
      </button>
      <button
        onClick={() => setCurrentPage('monitoring')}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          currentPage === 'monitoring' ? 'bg-slate-700' : 'hover:bg-slate-700'
        }`}
      >
        <Activity className="w-5 h-5" />
        Monitoramento
      </button>
      <button
        onClick={() => setCurrentPage('devices')}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          currentPage === 'devices' ? 'bg-slate-700' : 'hover:bg-slate-700'
        }`}
      >
        <Server className="w-5 h-5" />
        Dispositivos Mikrotik
      </button>
      <button
        onClick={() => setCurrentPage('alerts')}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
          currentPage === 'alerts' ? 'bg-slate-700' : 'hover:bg-slate-700'
        }`}
      >
        <Bell className="w-5 h-5" />
        Alertas & Notificações
      </button>
    </nav>
  </div>
);

export default Sidebar;
