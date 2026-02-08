import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const forWho = [
  'Quer menos estresse emocional',
  'Quer melhor controle de risco',
  'Quer mais disciplina e menos achismo',
  'Quer superar o Hold no longo prazo',
  'Não quer ficar tradando todo dia',
];

const notForWho = [
  'Quer trade rápido ou day trade',
  'Quer promessa de lucro',
  'Não aguenta ver volatilidade',
  'Não segue método nenhum',
];

export function ForWhoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Para quem é / Para quem não é</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Who */}
          <Card className="bg-green-900/20 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">✅ Para você que:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Not For Who */}
          <Card className="bg-red-900/20 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-red-400">❌ Não é para você que:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {notForWho.map((item) => (
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
