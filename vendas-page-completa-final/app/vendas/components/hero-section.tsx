import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Invista melhor em Bitcoin.<br />Com menos risco que Buy & Hold.
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
          O Radar BTC usa dados de mercado, on-chain e volatilidade para dizer quando aumentar, quando reduzir e quanto alocar em Bitcoin — sem achismo e sem emoção.
        </p>

        <div className="space-y-2 max-w-md mx-auto mb-10 text-left">
          <p className="text-green-400 font-semibold">✔ Backtest 2012–2026: +633%</p>
          <p className="text-green-400 font-semibold">✔ Buy & Hold no mesmo período: +494%</p>
          <p className="text-green-400 font-semibold">✔ Menor drawdown e melhor controle de risco</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Link href="/auth/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              👉 Comece agora com o Radar BTC
            </Button>
          </Link>
          <p className="text-sm text-slate-400">(Beta com acesso limitado)</p>
        </div>
      </div>
    </section>
  );
}
