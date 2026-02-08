import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const proofData = [
  {
    title: 'Estratégia por Regime',
    value: '+633%',
    description: '$10.000 → $73.373',
  },
  {
    title: 'Buy & Hold',
    value: '+494%',
    description: '$10.000 → $59.431',
  },
  {
    title: 'Outperformance',
    value: '+139%',
    description: 'Acima do Buy & Hold',
  },
  {
    title: 'Sharpe Ratio',
    value: '0,81',
    description: 'Retorno ajustado ao risco',
  },
];

export function ProofSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">📊 Resultados reais, não promessas</h2>
          <p className="text-slate-400 text-sm">Resultados históricos. Não garantem retornos futuros.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofData.map((item) => (
            <Card key={item.title} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-400 mb-2">{item.value}</p>
                <p className="text-xs text-slate-400">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
