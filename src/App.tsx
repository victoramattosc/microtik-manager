// src/App.tsx
import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Testing from './pages/testing';
import UsersPage from './pages/users';
import Monitoring from './pages/monitoring';
import Devices from './pages/devices';
import Alerts from './pages/alerts';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'testing' | 'users' | 'monitoring' | 'devices' | 'alerts'>('dashboard');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':   return <Dashboard />;
      case 'testing':     return <Testing />;
      case 'users':       return <UsersPage />;
      case 'monitoring':  return <Monitoring />;
      case 'devices':     return <Devices />;
      case 'alerts':      return <Alerts />;
      default:            return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={(page: Page) => setCurrentPage(page)}
      />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {currentPage === 'dashboard' && 'Dashboard Nacional'}
              {currentPage === 'testing'   && 'Teste de Internet'}
              {currentPage === 'users'     && 'Usuários Conectados'}
              {currentPage === 'monitoring'&& 'Monitoramento'}
              {currentPage === 'devices'   && 'Dispositivos Mikrotik'}
              {currentPage === 'alerts'    && 'Alertas & Notificações'}
            </h2>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">U</div>
                <span className="text-sm font-medium">Usuário Admin</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
