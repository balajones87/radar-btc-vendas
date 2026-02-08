// /home/ubuntu/radar-btc-project/app/vendas/components/backtest-numbers-section.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrawdownChart } from "./drawdown-chart";
import { RegimeDistributionChart } from "./regime-distribution-chart";

const backtestNumbers = [
  { label: "Retorno total", value: "+633%" },
  { label: "Buy & Hold", value: "+494%" },
  { label: "Outperformance", value: "+139%" },
  { label: "Sharpe Ratio", value: "0,81" },
  { label: "Tempo no mercado", value: "84%" },
  { label: "Tempo em proteção", value: "16%" },
  { label: "Ajustes em 14 anos", value: "31" },
];

export function BacktestNumbersSection() {
  return (
    <section className="w-full max-w-4xl py-16 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">📊 Os Números (Backtest 2012–2026)</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          O sistema não tenta "adivinhar topo e fundo". Ele ajusta risco e exposição ao longo do ciclo.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {backtestNumbers.map((item) => (
          <Card key={item.label} className="bg-gray-800 border-gray-700 text-center">
            <CardContent className="p-4">
              <p className="text-2xl font-bold text-green-400">{item.value}</p>
              <p className="text-xs text-gray-400 mt-2">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        <DrawdownChart />
        <RegimeDistributionChart />
      </div>
    </section>
  );
}
