// src/pages/monitoring.tsx
import React from 'react';
import { BarChart3, Activity } from 'lucide-react';

const Monitoring: React.FC = () => (
  <div className="p-6">
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">Monitoramento em Tempo Real</h1>
      <p className="text-gray-600">Acompanhe o desempenho da rede em tempo real</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Throughput da Rede</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <BarChart3 className="w-12 h-12 mx-auto mb-2" />
            <p>Gráfico de throughput em tempo real</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Latência por Interface</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <Activity className="w-12 h-12 mx-auto mb-2" />
            <p>Gráfico de latência por interface</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Status das Interfaces</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium">bridge1 (LAN)</span>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dispositivos:</span>
                <span>8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tráfego:</span>
                <span>2.1 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Monitoring;
