
'use client';

// /home/ubuntu/radar-btc-project/app/vendas/components/regime-distribution-chart.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const regimeDistributionData = [
  { name: 'Acumulação', value: 9.6 },
  { name: 'Bull Trend', value: 73.9 },
  { name: 'Distribuição', value: 1.1 },
  { name: 'Bear/Risco', value: 15.3 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

export function RegimeDistributionChart() {
  return (
    <Card className="bg-gray-800 border-gray-700 w-full">
      <CardHeader>
        <CardTitle>Distribuição de Regimes (2012-2026)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={regimeDistributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {regimeDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend wrapperStyle={{ color: '#E2E8F0' }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
