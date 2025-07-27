// src/pages/dashboard.tsx
import React, { useState } from 'react';
import {
  CheckCircle,
  AlertTriangle,
  Activity
} from 'lucide-react';

const statesData: Record<string, {
  status: 'ok' | 'warning' | 'error';
  operadora: string;
  reclamacoes: number;
  ping: number;
}> = {
  SP: { status: 'ok', operadora: 'Vivo', reclamacoes: 2, ping: 15 },
  RJ: { status: 'warning', operadora: 'Claro', reclamacoes: 15, ping: 45 },
  MG: { status: 'error', operadora: 'Oi', reclamacoes: 78, ping: 120 },
  RS: { status: 'ok', operadora: 'TIM', reclamacoes: 5, ping: 22 },
  PR: { status: 'warning', operadora: 'Vivo', reclamacoes: 12, ping: 38 }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'ok': return 'text-green-500';
    case 'warning': return 'text-yellow-500';
    case 'error': return 'text-red-500';
    default: return 'text-gray-500';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'ok': return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    case 'error': return <AlertTriangle className="w-5 h-5 text-red-500" />;
    default: return <Activity className="w-5 h-5 text-gray-500" />;
  }
};

const Dashboard: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Status das Operadoras - Brasil</h1>
        <p className="text-gray-600">Monitoramento em tempo real das principais operadoras por estado</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Status Geral</h3>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-green-500 mb-2">92%</div>
          <p className="text-gray-600">das conexões estão estáveis</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Latência Média</h3>
            <Activity className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-blue-500 mb-2">42ms</div>
          <p className="text-gray-600">ping médio nacional</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Reclamações</h3>
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-yellow-500 mb-2">234</div>
          <p className="text-gray-600">nas últimas 24h</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Status por Estado</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(statesData).map(([uf, data]) => (
              <div
                key={uf}
                className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedState(uf)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-3 ${
                        data.status === 'ok'
                          ? 'bg-green-500'
                          : data.status === 'warning'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    />
                    <span className="font-semibold">{uf}</span>
                  </div>
                  {getStatusIcon(data.status)}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Operadora:</span>
                    <span className="font-medium">{data.operadora}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reclamações:</span>
                    <span className="font-medium">{data.reclamacoes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ping:</span>
                    <span className="font-medium">{data.ping}ms</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
