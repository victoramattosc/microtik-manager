// src/pages/testing.tsx
import React, { useState } from 'react';
import {
  Zap,
  Play,
  Download,
  Upload,
  Activity,
  BarChart3,
  CheckCircle,
  RefreshCw
} from 'lucide-react';

interface SpeedResult {
  download: number;
  upload: number;
  ping: number;
  jitter: number;
  provider: string;
  ip: string;
}

const Testing: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [results, setResults] = useState<SpeedResult | null>(null);

  const runTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setResults({
        download: 95.5,
        upload: 87.2,
        ping: 12,
        jitter: 2.1,
        provider: 'Vivo Fibra',
        ip: '186.213.123.45'
      });
      setIsTesting(false);
    }, 8000);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Teste de Velocidade</h1>
        <p className="text-gray-600">Teste a velocidade da sua conexão em tempo real</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white mb-6">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-4" />
            {!isTesting && !results && (
              <button
                onClick={runTest}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Play className="w-5 h-5 inline mr-2" />
                Iniciar Teste
              </button>
            )}
            {isTesting && (
              <div>
                <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-lg">Testando sua conexão...</p>
                <p className="opacity-75">Isso pode levar alguns segundos</p>
              </div>
            )}
          </div>
        </div>

        {results && (
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Resultados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{results.download}</div>
                <div className="text-sm text-gray-600">Mbps Download</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{results.upload}</div>
                <div className="text-sm text-gray-600">Mbps Upload</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">{results.ping}</div>
                <div className="text-sm text-gray-600">ms Ping</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-600">{results.jitter}</div>
                <div className="text-sm text-gray-600">ms Jitter</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Provedor:</span>
                  <span className="font-medium">{results.provider}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IP Público:</span>
                  <span className="font-medium">{results.ip}</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <h4 className="font-semibold text-blue-900">Análise da Conexão</h4>
                  <p className="text-blue-800 text-sm mt-1">
                    Sua conexão está excelente! Velocidade acima da média nacional e latência baixa.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => { setResults(null); runTest(); }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 inline mr-2" />
                Testar Novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testing;
