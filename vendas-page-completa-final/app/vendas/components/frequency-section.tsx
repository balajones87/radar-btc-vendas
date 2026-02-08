import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FrequencySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Frequência e Disciplina</h2>
        <p className="text-center text-slate-300 mb-12">
          Não é trading ativo. É gestão de risco estruturada.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-base">Rebalanceamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-blue-400">47</p>
              <p className="text-slate-400 text-sm mt-2">em 14 anos</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-base">Média por Ano</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-green-400">3-4</p>
              <p className="text-slate-400 text-sm mt-2">ajustes anuais</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-base">Tempo no Mercado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-emerald-400">85,4%</p>
              <p className="text-slate-400 text-sm mt-2">exposição média</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-base">Overtrading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-red-400">❌</p>
              <p className="text-slate-400 text-sm mt-2">sem flip-flop</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
          <p className="text-slate-300 mb-4 font-semibold">Distribuição de Tempo</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Tempo no Mercado</span>
                <span className="text-emerald-400 font-bold">85,4%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '85.4%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Tempo em Proteção</span>
                <span className="text-red-400 font-bold">14,6%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div className="bg-red-500 h-full rounded-full" style={{ width: '14.6%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
          <p className="text-slate-300">
            📌 Você não perde os bull markets e não fica totalmente exposto nos piores momentos.
          </p>
        </div>
      </div>
    </section>
  );
}
