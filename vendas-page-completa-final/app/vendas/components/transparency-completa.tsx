import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const disclaimers = [
  {
    icon: '📊',
    title: 'Resultados são históricos',
    description: 'Não garantem retornos futuros',
  },
  {
    icon: '💰',
    title: 'Custos não incluídos',
    description: 'Taxas e slippage (~3–4%) não estão no backtest',
  },
  {
    icon: '🎯',
    title: 'O sistema pode errar',
    description: 'Nenhum modelo é perfeito',
  },
  {
    icon: '📈',
    title: 'Cripto é volátil',
    description: 'Drawdowns grandes ainda podem acontecer',
  },
  {
    icon: '📚',
    title: 'Uso educacional',
    description: 'Não é recomendação de investimento',
  },
];

export function TransparencySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Transparência e Limitações</h2>
        <p className="text-center text-slate-300 mb-12">
          Leia isso com atenção antes de usar o Radar BTC
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {disclaimers.map((disclaimer) => (
            <Card key={disclaimer.title} className="bg-amber-900/20 border-amber-500/30">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{disclaimer.icon}</div>
                <h3 className="text-lg font-semibold text-amber-300 mb-2">{disclaimer.title}</h3>
                <p className="text-slate-300 text-sm">{disclaimer.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <Card className="bg-red-900/20 border-red-500/30">
          <CardContent className="p-8">
            <div className="flex gap-4">
              <AlertCircle className="h-8 w-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-4">Disclaimer Legal</h3>
                <p className="text-slate-300 mb-3">
                  Este sistema é apenas para fins educacionais e informativos.
                </p>
                <p className="text-slate-300 mb-3">
                  Não constitui recomendação de investimento ou promessa de retorno.
                </p>
                <p className="text-slate-300">
                  Criptoativos são investimentos de alto risco. Você pode perder todo o capital investido.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
