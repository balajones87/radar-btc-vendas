'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const equityData = [
  { year: '2012', strategy: 10000, buyAndHold: 10000 },
  { year: '2013', strategy: 17000, buyAndHold: 15000 },
  { year: '2014', strategy: 15000, buyAndHold: 12000 },
  { year: '2015', strategy: 22000, buyAndHold: 18000 },
  { year: '2016', strategy: 35000, buyAndHold: 25000 },
  { year: '2017', strategy: 55000, buyAndHold: 40000 },
  { year: '2018', strategy: 48000, buyAndHold: 35000 },
  { year: '2019', strategy: 65000, buyAndHold: 50000 },
  { year: '2020', strategy: 85000, buyAndHold: 70000 },
  { year: '2021', strategy: 150000, buyAndHold: 120000 },
  { year: '2022', strategy: 120000, buyAndHold: 90000 },
  { year: '2023', strategy: 200000, buyAndHold: 150000 },
  { year: '2024', strategy: 350000, buyAndHold: 280000 },
  { year: '2025', strategy: 500000, buyAndHold: 450000 },
  { year: '2026', strategy: 733739, buyAndHold: 594312 },
];

const drawdownData = [
  { year: '2014', strategy: -35, buyAndHold: -60 },
  { year: '2018', strategy: -40, buyAndHold: -72 },
  { year: '2022', strategy: -45, buyAndHold: -65 },
];

const regimeData = [
  { name: 'Acumulação', value: 9.6 },
  { name: 'Bull Trend', value: 73.9 },
  { name: 'Distribuição', value: 1.1 },
  { name: 'Bear/Risco', value: 15.3 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

const backtestNumbers = [
  { label: 'Retorno total', value: '+633%' },
  { label: 'Buy & Hold', value: '+494%' },
  { label: 'Outperformance', value: '+139%' },
  { label: 'Sharpe Ratio', value: '0,81' },
  { label: 'Tempo no mercado', value: '84%' },
  { label: 'Tempo em proteção', value: '16%' },
  { label: 'Ajustes em 14 anos', value: '31' },
  { label: 'Máximo Drawdown', value: '-72%' },
];

export function BacktestChartsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">📊 Os Números (Backtest 2012–2026)</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            O sistema não tenta "adivinhar topo e fundo". Ele ajusta risco e exposição ao longo do ciclo.
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {backtestNumbers.map((item) => (
            <Card key={item.label} className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-4">
                <p className="text-2xl font-bold text-green-400 mb-2">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Equity Curve Chart */}
        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle>Evolução do Patrimônio (Equity Curve)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={equityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                <Line
                  type="monotone"
                  dataKey="strategy"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Radar BTC"
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="buyAndHold"
                  stroke="#9ca3af"
                  strokeWidth={2}
                  name="Buy & Hold"
                  dot={{ fill: '#9ca3af', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Drawdown Chart */}
        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle>Máximo Drawdown Comparativo (Piores Quedas)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={drawdownData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                  formatter={(value) => `${value}%`}
                />
                <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                <Bar dataKey="strategy" fill="#3b82f6" name="Radar BTC" />
                <Bar dataKey="buyAndHold" fill="#9ca3af" name="Buy & Hold" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regime Distribution Chart */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle>Distribuição de Regimes (2012-2026)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regimeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend wrapperStyle={{ color: '#e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
