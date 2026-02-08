import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function HeroSectionCompleta() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-500/50">
          Backtest 2012–2026 • Dados históricos reais
        </Badge>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          O sistema que historicamente superou o Buy & Hold no Bitcoin
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          Mais retorno. Menos risco. Menos estresse. Baseado em dados desde 2012.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <p className="text-green-400 font-bold text-2xl">$10.000 → $153.102.766</p>
            <p className="text-slate-400 text-sm mt-2">Radar BTC (14 anos)</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <p className="text-blue-400 font-bold text-2xl">+188.837%</p>
            <p className="text-slate-400 text-sm mt-2">Outperformance vs Buy & Hold</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <p className="text-emerald-400 font-bold text-2xl">1,15</p>
            <p className="text-slate-400 text-sm mt-2">Sharpe Ratio (vs 1,08)</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Quero usar o Radar BTC
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg">
            Ver metodologia completa
          </Button>
        </div>
      </div>
    </section>
  );
}
