
'use client';

// /home/ubuntu/radar-btc-project/app/vendas/components/drawdown-chart.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data - substitua com os dados reais do seu backtest
const drawdownData = [
  { year: '2014', strategy: -35, buyAndHold: -60 },
  { year: '2018', strategy: -40, buyAndHold: -72 },
  { year: '2022', strategy: -45, buyAndHold: -65 },
];

export function DrawdownChart() {
  return (
    <Card className="bg-gray-800 border-gray-700 w-full">
      <CardHeader>
        <CardTitle>Máximo Drawdown Comparativo (Piores Quedas)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={drawdownData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
            <XAxis dataKey="year" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" label={{ value: 'Drawdown (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }} 
              labelStyle={{ color: '#E2E8F0' }}
              formatter={(value) => `${value}%`}
            />
            <Legend wrapperStyle={{ color: '#E2E8F0' }}/>
            <Bar dataKey="strategy" fill="#3B82F6" name="Radar BTC" />
            <Bar dataKey="buyAndHold" fill="#9CA3AF" name="Buy & Hold" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
