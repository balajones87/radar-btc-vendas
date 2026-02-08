'use client';

import { HeroSectionCompleta } from './components/hero-completa';
import { ComparisonSection } from './components/comparison-section';
import { ProblemSection } from './components/problem-section';
import { HowItWorksSection } from './components/how-it-works-completa';
import { ResultsTableSection } from './components/results-table-section';
import { ProtectionSection } from './components/protection-section';
import { FrequencySection } from './components/frequency-section';
import { ForWhoSection } from './components/for-who-completa';
import { TransparencySection } from './components/transparency-completa';
import { FinalCtaSection } from './components/final-cta-completa';
import { FooterSection } from './components/footer-section';

export default function VendasPage() {
  return (
    <main className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <HeroSectionCompleta />
      <ComparisonSection />
      <ProblemSection />
      <HowItWorksSection />
      <ResultsTableSection />
      <ProtectionSection />
      <FrequencySection />
      <ForWhoSection />
      <TransparencySection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
