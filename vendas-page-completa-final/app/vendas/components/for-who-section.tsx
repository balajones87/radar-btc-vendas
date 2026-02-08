import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const forYou = [
  'Quer investir em BTC com método e disciplina',
  'Quer reduzir risco nos piores momentos do mercado',
  'Quer evitar decisões emocionais',
  'Quer algo mais inteligente que só Buy & Hold',
  'Quer saber quanto alocar e quando',
];

const notForYou = [
  'Quer "trade diário"',
  'Quer promessas de lucro garantido',
  'Quer acertar topo e fundo perfeito',
  'Não aguenta seguir um plano',
];

export function ForWhoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">👤 Para quem é (e para quem não é)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For You */}
          <Card className="bg-emerald-900/20 border-emerald-500/30">
            <CardHeader>
              <CardTitle className="text-emerald-400">O Radar BTC é para você que:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Not For You */}
          <Card className="bg-red-900/20 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-red-400">Não é para você se:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
