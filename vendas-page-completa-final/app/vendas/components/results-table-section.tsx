import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const resultsData = [
  {
    period: '14 anos',
    radarReturn: '+1.530.928%',
    bhReturn: '+1.342.091%',
    radarSharpe: '1,15',
    bhSharpe: '1,08',
    radarDD: '-83,21%',
    bhDD: '-83,45%',
  },
  {
    period: '5 anos',
    radarReturn: '+1.250%',
    bhReturn: '+980%',
    radarSharpe: '1,22',
    bhSharpe: '1,04',
    radarDD: '-72,3%',
    bhDD: '-76,8%',
  },
  {
    period: '3 anos',
    radarReturn: '+450%',
    bhReturn: '+320%',
    radarSharpe: '1,32',
    bhSharpe: '1,21',
    radarDD: '-38,4%',
    bhDD: '-42,1%',
  },
  {
    period: '1 ano',
    radarReturn: '+85%',
    bhReturn: '+62%',
    radarSharpe: '1,58',
    bhSharpe: '1,42',
    radarDD: '-18,2%',
    bhDD: '-21,4%',
  },
];

export function ResultsTableSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Resultados Históricos</h2>
        <p className="text-center text-slate-300 mb-12">Comparação detalhada por período</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-4 text-slate-300 font-semibold">Período</th>
                <th className="text-center py-4 px-4 text-blue-400 font-semibold">Radar Retorno</th>
                <th className="text-center py-4 px-4 text-slate-400 font-semibold">B&H Retorno</th>
                <th className="text-center py-4 px-4 text-blue-400 font-semibold">Radar Sharpe</th>
                <th className="text-center py-4 px-4 text-slate-400 font-semibold">B&H Sharpe</th>
                <th className="text-center py-4 px-4 text-red-400 font-semibold">Radar DD</th>
                <th className="text-center py-4 px-4 text-slate-400 font-semibold">B&H DD</th>
              </tr>
            </thead>
            <tbody>
              {resultsData.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-semibold text-slate-200">{row.period}</td>
                  <td className="text-center py-4 px-4 text-green-400 font-semibold">{row.radarReturn}</td>
                  <td className="text-center py-4 px-4 text-slate-400">{row.bhReturn}</td>
                  <td className="text-center py-4 px-4 text-blue-400 font-semibold">{row.radarSharpe}</td>
                  <td className="text-center py-4 px-4 text-slate-400">{row.bhSharpe}</td>
                  <td className="text-center py-4 px-4 text-red-400">{row.radarDD}</td>
                  <td className="text-center py-4 px-4 text-slate-400">{row.bhDD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg">Retorno Anualizado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-400">87,45%</p>
              <p className="text-slate-400 text-sm mt-2">Radar BTC vs 82,31% (Buy & Hold)</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-lg">Volatilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-400">76,12%</p>
              <p className="text-slate-400 text-sm mt-2">Radar BTC vs 78,34% (Buy & Hold)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
