import { Card, CardContent } from '@/components/ui/card';

const painPoints = [
  'Compra no topo por FOMO',
  'Vende no fundo por medo',
  'Fica 100% exposto nos crashes',
  'Não sabe quanto alocar nem quando reduzir',
  'Vive no emocional, não nos dados',
];

export function PainPointsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Se você investe em Bitcoin, provavelmente...</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Buy & Hold é simples — mas emocionalmente brutal. Pouca gente aguenta ver -70%, -80% de queda sem fazer besteira.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-red-900/20 border-red-500/30">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="text-red-400 text-xl font-bold flex-shrink-0">❌</span>
                    <span className="text-lg text-slate-200">{point}</span>
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
