import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const dataInputs = [
  { icon: '📊', label: 'Indicadores técnicos' },
  { icon: '🔁', label: 'Momentum' },
  { icon: '🔗', label: 'On-chain' },
  { icon: '⚠️', label: 'Risco/volatilidade' },
  { icon: '😨', label: 'Fear & Greed' },
];

const regimes = [
  { emoji: '🟢', name: 'Acumulação', exposure: '100% BTC', description: 'Comprar em fundos' },
  { emoji: '🔵', name: 'Bull Trend', exposure: '100% BTC', description: 'Aproveitar alta' },
  { emoji: '🟡', name: 'Distribuição', exposure: '40% BTC', description: 'Reduzir risco' },
  { emoji: '🔴', name: 'Bear/Risco', exposure: '10% BTC', description: 'Proteção ativa' },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Como o Radar BTC Funciona</h2>
        <p className="text-center text-slate-300 mb-12">
          Analisa diariamente o mercado e classifica em 4 regimes
        </p>

        {/* Data Inputs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Analisa diariamente:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {dataInputs.map((input) => (
              <Card key={input.label} className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{input.icon}</div>
                  <p className="text-sm text-slate-300">{input.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regimes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Classifica o mercado em 4 regimes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regimes.map((regime) => (
              <Card key={regime.name} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="text-4xl mb-2">{regime.emoji}</div>
                  <CardTitle className="text-lg">{regime.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-blue-500/20 text-blue-300 mb-3">{regime.exposure}</Badge>
                  <p className="text-sm text-slate-300">{regime.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Flow */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-semibold">
            <span className="text-blue-400">Dados</span>
            <span className="hidden sm:inline text-slate-500">→</span>
            <span className="text-purple-400">Scores</span>
            <span className="hidden sm:inline text-slate-500">→</span>
            <span className="text-green-400">Regime</span>
            <span className="hidden sm:inline text-slate-500">→</span>
            <span className="text-emerald-400">Exposição</span>
          </div>
          <p className="text-slate-400 text-sm mt-4">
            📌 Não é trading ativo. É ajustar risco conforme o ciclo do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}
