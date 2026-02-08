import { Button } from '@/components/ui/button';
import Link from 'next/link';

const benefits = [
  'Veja o regime do mercado',
  'Saiba exatamente o que fazer agora',
  'Tenha uma estratégia clara para cada fase',
  'Invista com menos estresse e mais consistência',
];

export function FinalCtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">🚀 Pare de investir no escuro. Use dados.</h2>

        <div className="max-w-md mx-auto text-left space-y-3 mb-10">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold">✅</span>
              <span className="text-lg text-slate-200">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <Link href="/auth/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              👉 Acesse agora o Radar BTC (Beta)
            </Button>
          </Link>
          <p className="text-sm text-slate-400">Comece a investir com método, não com emoção</p>
        </div>
      </div>
    </section>
  );
}
