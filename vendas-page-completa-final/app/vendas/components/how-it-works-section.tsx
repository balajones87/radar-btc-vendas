import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const regimes = [
  {
    badge: '🟢 Acumulação',
    action: 'Comprar aos poucos (DCA)',
    bgClass: 'bg-emerald-900/20 border-emerald-500/30',
    badgeClass: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    badge: '🔵 Bull Trend',
    action: 'Manter exposição',
    bgClass: 'bg-blue-900/20 border-blue-500/30',
    badgeClass: 'bg-blue-500/20 text-blue-300',
  },
  {
    badge: '🟡 Distribuição',
    action: 'Reduzir posição',
    bgClass: 'bg-amber-900/20 border-amber-500/30',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    badge: '🔴 Bear / Risco',
    action: 'Proteger capital',
    bgClass: 'bg-red-900/20 border-red-500/30',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">🔍 Como Funciona (Simplificado)</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            O Radar BTC classifica o mercado em 4 fases e te mostra o que fazer em cada uma delas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regimes.map((regime) => (
            <Card key={regime.badge} className={`${regime.bgClass} border`}>
              <CardHeader className="pb-3">
                <Badge className={regime.badgeClass}>{regime.badge}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-white">{regime.action}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Para cada fase, ele mostra:</h3>
          <div className="max-w-md mx-auto space-y-2 text-left text-slate-300">
            <p>✅ O que fazer agora</p>
            <p>✅ Exposição sugerida (% do capital)</p>
            <p>✅ Como aplicar via DCA</p>
            <p>✅ Qual o risco atual</p>
            <p>✅ Quais sinais observar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
