'use client';

import { Badge } from '@/components/ui/badge';
import { HeroSection } from './components/hero-section';
import { ProofSection } from './components/proof-section';
import { PainPointsSection } from './components/pain-points-section';
import { SolutionSection } from './components/solution-section';
import { HowItWorksSection } from './components/how-it-works-section';
import { WhyItWorksSection } from './components/why-it-works-section';
import { BacktestChartsSection } from './components/backtest-charts-section';
import { ForWhoSection } from './components/for-who-section';
import { TransparencySection } from './components/transparency-section';
import { DisclaimerSection } from './components/disclaimer-section';
import { FinalCtaSection } from './components/final-cta-section';

export default function VendasPage() {
  return (
    <main className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="bg-blue-900/30 border-b border-blue-500/30 py-3 px-4 text-center">
        <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/50">🚀 Beta - Acesso Limitado</Badge>
      </div>
      <HeroSection />
      <ProofSection />
      <PainPointsSection />
      <SolutionSection />
      <HowItWorksSection />
      <WhyItWorksSection />
      <BacktestChartsSection />
      <ForWhoSection />
      <TransparencySection />
      <DisclaimerSection />
      <FinalCtaSection />
    </main>
  );
}
