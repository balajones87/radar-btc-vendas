export function DisclaimerSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">⚠️ Disclaimer (Importante)</h2>
          <div className="space-y-3 text-slate-300">
            <p>Este sistema é apenas educacional e informativo.</p>
            <p>Não constitui recomendação de investimento.</p>
            <p>Criptomoedas são ativos de alto risco.</p>
            <p>Sempre considere sua situação financeira e, se necessário, consulte um profissional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
