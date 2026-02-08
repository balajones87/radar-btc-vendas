'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const equityData = [
  { year: '2012', radar: 10000, buyHold: 10000 },
  { year: '2013', radar: 85000, buyHold: 65000 },
  { year: '2014', radar: 42000, buyHold: 28000 },
  { year: '2015', radar: 65000, buyHold: 45000 },
  { year: '2016', radar: 120000, buyHold: 85000 },
  { year: '2017', radar: 850000, buyHold: 650000 },
  { year: '2018', radar: 280000, buyHold: 180000 },
  { year: '2019', radar: 950000, buyHold: 720000 },
  { year: '2020', radar: 2100000, buyHold: 1600000 },
  { year: '2021', radar: 8500000, buyHold: 6500000 },
  { year: '2022', radar: 2800000, buyHold: 2100000 },
  { year: '2023', radar: 18000000, buyHold: 14000000 },
  { year: '2024', radar: 65000000, buyHold: 52000000 },
  { year: '2025', radar: 110000000, buyHold: 95000000 },
  { year: '2026', radar: 153102766, buyHold: 134219077 },
];

export function ComparisonSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Radar BTC vs Buy & Hold — Evolução do Capital</h2>
          <p className="text-slate-400">Comparação de $10.000 investidos em 2012</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle>Evolução do Patrimônio (Equity Curve)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={equityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                  formatter={(value: any) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                <Line
                  type="monotone"
                  dataKey="radar"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Radar BTC"
                  dot={{ fill: '#3b82f6', r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="buyHold"
                  stroke="#9ca3af"
                  strokeWidth={3}
                  name="Buy & Hold"
                  dot={{ fill: '#9ca3af', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <p className="text-slate-400 text-sm mb-2">Radar BTC Final</p>
              <p className="text-3xl font-bold text-green-400">$153.102.766</p>
              <p className="text-slate-500 text-xs mt-2">+1.530.928%</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <p className="text-slate-400 text-sm mb-2">Buy & Hold Final</p>
              <p className="text-3xl font-bold text-blue-400">$134.219.077</p>
              <p className="text-slate-500 text-xs mt-2">+1.342.091%</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <p className="text-slate-400 text-sm mb-2">Diferença</p>
              <p className="text-3xl font-bold text-emerald-400">+$18.883.689</p>
              <p className="text-slate-500 text-xs mt-2">+188.837% outperformance</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
