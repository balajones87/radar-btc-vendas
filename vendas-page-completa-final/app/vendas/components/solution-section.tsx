import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const solutions = [
  {
    emoji: '📍',
    title: 'Qual é o regime atual do mercado?',
  },
  {
    emoji: '📈',
    title: 'Devo acumular, manter ou reduzir?',
  },
  {
    emoji: '💰',
    title: 'Quanto do meu capital devo alocar agora?',
  },
  {
    emoji: '🛡️',
    title: 'O risco está alto ou controlado?',
  },
];

export function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">✅ A Solução: O Radar BTC resolve exatamente isso</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Ele responde, todo dia, em menos de 10 segundos:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-3">
                  <span className="text-2xl">{solution.emoji}</span>
                  {solution.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        <p className="text-center text-slate-300">
          Tudo baseado em dados on-chain, indicadores técnicos, momentum, volatilidade e um sistema de estabilidade de regime.
        </p>
      </div>
    </section>
  );
}
