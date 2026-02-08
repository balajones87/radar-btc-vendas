import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const protectionYears = [
  {
    year: '2014',
    radarDD: '-35%',
    bhDD: '-60%',
    difference: '+25%',
  },
  {
    year: '2018',
    radarDD: '-40%',
    bhDD: '-72%',
    difference: '+32%',
  },
  {
    year: '2022',
    radarDD: '-45%',
    bhDD: '-65%',
    difference: '+20%',
  },
];

export function ProtectionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Proteção nos Bears</h2>
        <p className="text-center text-slate-300 mb-12">
          Radar BTC reduziu perdas e preservou capital para o próximo ciclo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {protectionYears.map((year) => (
            <Card key={year.year} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl">{year.year}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm">Radar BTC</p>
                    <p className="text-2xl font-bold text-red-400">{year.radarDD}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Buy & Hold</p>
                    <p className="text-2xl font-bold text-red-600">{year.bhDD}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-700">
                    <p className="text-slate-400 text-sm">Proteção</p>
                    <p className="text-xl font-bold text-green-400">{year.difference}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
          <p className="text-lg text-slate-300">
            📌 <strong>Menos queda = mais capital preservado = recuperação mais rápida no próximo ciclo</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
