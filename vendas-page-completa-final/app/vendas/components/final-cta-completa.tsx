import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FinalCtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Pare de decidir no impulso.<br />
          Comece a decidir com dados.
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-width-2xl mx-auto">
          O Radar BTC te mostra exatamente o que fazer, todo dia, baseado em 14 anos de dados.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/auth/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Começar com o Radar BTC
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg">
            Ver metodologia completa
          </Button>
        </div>

        <p className="text-slate-400 text-sm">
          Beta com acesso limitado • Resultados históricos • Sem promessas
        </p>
      </div>
    </section>
  );
}
