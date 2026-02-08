
'use client';

// /home/ubuntu/radar-btc-project/app/vendas/components/historical-proof-section.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data - substitua com os dados reais do seu backtest
const backtestData = [
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
  { year: '2026', strategy: 733739.30, buyAndHold: 594312.50 },
];

export function HistoricalProofSection() {
  return (
    <section className="w-full max-w-4xl py-16 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">O Desempenho Histórico (2012-2026)</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Veja como a estratégia do Radar BTC se comportou em comparação com simplesmente comprar e segurar (Buy & Hold) ao longo de 14 anos de dados.
        </p>
      </div>
      <Card className="bg-gray-800 border-gray-700 w-full">
        <CardHeader>
          <CardTitle>Evolução do Patrimônio (Equity Curve)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={backtestData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="year" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" tickFormatter={(value) => `$${Number(value).toLocaleString()}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }} 
                labelStyle={{ color: '#E2E8F0' }}
              />
              <Legend wrapperStyle={{ color: '#E2E8F0' }}/>
              <Line type="monotone" dataKey="strategy" stroke="#3B82F6" strokeWidth={2} name="Radar BTC" />
              <Line type="monotone" dataKey="buyAndHold" stroke="#9CA3AF" strokeWidth={2} name="Buy & Hold" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  );
}
