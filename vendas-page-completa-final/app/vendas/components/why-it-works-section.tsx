import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    icon: '🛡️',
    title: 'Protege capital nos crashes',
    description: 'Reduz exposição forte em 2014, 2018, 2022',
  },
  {
    icon: '📈',
    title: 'Mantém exposição máxima nos bull markets',
    description: '2013, 2017, 2020–2021',
  },
  {
    icon: '🧠',
    title: 'Evita decisões emocionais',
    description: 'Tudo é baseado em dados, não em manchete ou Twitter',
  },
];

export function WhyItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">🧮 Por que funciona?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Porque o sistema faz 3 coisas que o investidor comum não consegue fazer bem:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason) => (
            <Card key={reason.title} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors text-center">
              <CardHeader>
                <div className="text-4xl mb-3">{reason.icon}</div>
                <CardTitle className="text-lg text-green-400">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
          <p className="text-xl font-bold mb-3">Resultado:</p>
          <p className="text-lg text-slate-300">
            📈 Mais retorno, 🛡️ Menos estresse, 📉 Menor risco de ruína emocional e financeira
          </p>
        </div>
      </div>
    </section>
  );
}
