import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const transparencyPoints = [
  'Sistema baseado em dados históricos e estatística',
  'Sem lookahead bias',
  'Lógica congelada (Logic Freeze)',
  'Testes automatizados',
  'Backtest + Forward Test',
];

export function TransparencySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">🛡️ Transparência Total</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Isso é gestão de risco e alocação, não bola de cristal.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {transparencyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-200">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-700 text-center">
                <p className="text-yellow-400 font-semibold">
                  ❗ Resultados passados não garantem resultados futuros
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
