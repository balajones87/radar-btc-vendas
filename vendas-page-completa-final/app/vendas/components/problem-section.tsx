import { Card, CardContent } from '@/components/ui/card';

const problems = [
  'Quedas de -70% a -80% nos bear markets',
  'Decisões emocionais nos piores momentos',
  'Anos inteiros esperando recuperar prejuízo',
  'Vender no fundo, comprar no topo',
];

const solutions = [
  'Radar BTC ajusta risco por regime',
  'Reduz exposição em bear markets',
  'Mantém exposição em bull markets',
  'Disciplina baseada em dados',
];

export function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Por que não é só Buy & Hold?</h2>
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Buy & Hold funciona no longo prazo, mas psicologicamente e financeiramente é brutal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">❌ Os Problemas</h3>
            <div className="space-y-4">
              {problems.map((problem) => (
                <Card key={problem} className="bg-red-900/20 border-red-500/30">
                  <CardContent className="p-4">
                    <p className="text-slate-200">{problem}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-400">✅ A Solução</h3>
            <div className="space-y-4">
              {solutions.map((solution) => (
                <Card key={solution} className="bg-green-900/20 border-green-500/30">
                  <CardContent className="p-4">
                    <p className="text-slate-200">{solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
