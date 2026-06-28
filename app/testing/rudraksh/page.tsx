import Link from "next/link";

export const metadata = {
  title: "Rudraksh Verification & X-Ray Certification | Authentic Gem Lab",
  description: "Identify genuine Rudraksh beads using digital radiography (X-Ray), density analysis, and botanical verification. Spot carved lines and composite fakes at Authentic Gem Lab.",
};

export default function RudrakshTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Botanical &amp; Radiographic Assays
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Rudraksh Seed <br />
              <span className="italic text-primary">X-Ray Certification</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Using state-of-the-art digital radiography, density calculations, and microscopic botanical profiling, we reveal the internal truth of sacred seeds. We protect collectors against carved lines and composite glue enhancements at Authentic Gem Lab.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
              >
                Scan Your Seed
              </Link>
              <Link
                href="#methods"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-headline font-semibold hover:bg-surface-container-low transition-all text-center"
              >
                X-Ray Methods
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 group border border-outline-variant/15">
              <img
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                alt="A close-up photograph of a sacred Rudraksh bead being scanned under digital X-ray imaging in a laboratory setting"
                src="/images/rudraksh-testing.png"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-outline-variant/30 rounded-full z-0 opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="bg-surface-container-low py-16 md:py-20 px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold mb-4 text-on-surface">Advanced Verification Protocols</h2>
            <p className="font-body text-secondary text-sm sm:text-base">
              How our laboratory isolates genuine Elaeocarpus ganitrus seeds from elaborate human manipulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* X-Ray Radiography */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block">science</span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Digital Radiography</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-body">
                  The ultimate verification test. A genuine bead has internal seed cavities (chambers) matching its external facets (Mukhis) exactly. X-Ray immediately exposes carved lines or composite beads with no internal seeds.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Chamber Scan: 100% Non-destructive
              </div>
            </div>

            {/* Density & Specific Gravity */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block">balance</span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Density Profiling</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-body">
                  Using hydrostatic balance to determine density. Synthetic resins, wood-paste additions, and lead weights used to fake rare, heavy beads are easily detected by deviation from organic density thresholds.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Specific Gravity Balance
              </div>
            </div>

            {/* Botanical Micro-scopy */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block">biotech</span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Botanical Profiling</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-body">
                  Inspecting structural furrows, natural fibers, and cell walls under digital magnification. This excludes plastic casting, wood carving, or seeds of other botanical species.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                60x Visual Zoom Scans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Table */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h2 className="font-headline text-2xl sm:text-3xl font-semibold mb-8 text-center text-on-surface">Vedic Rudraksh Classifications</h2>
        
        <div className="bg-surface-container-lowest rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-outline-variant/15">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-sm sm:text-base">
              <thead>
                <tr className="border-b border-outline-variant/20 pb-4">
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Mukhi (Faces)</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Planetary Ruler</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Internal Chambers Required</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Common Counterfeits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">1 Mukhi (Round)</td>
                  <td className="py-4">Sun (Surya)</td>
                  <td className="py-4 font-mono">1 Chamber (Exceedingly Rare)</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Carved 5-Mukhi beads, or half-moon cashew seeds</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">7 Mukhi</td>
                  <td className="py-4">Venus (Shukra)</td>
                  <td className="py-4 font-mono">7 Symmetric Chambers</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Artificial line carvings on standard beads</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">12 Mukhi</td>
                  <td className="py-4">Sun (Surya)</td>
                  <td className="py-4 font-mono">12 Chambers</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Segments glued together using adhesive resins</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">14 Mukhi (Dev Mani)</td>
                  <td className="py-4">Saturn (Shani)</td>
                  <td className="py-4 font-mono">14 Chambers</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Extremely high-value counterfeits made from wood dust</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-4 sm:mx-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 alchemical-mandala"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-headline text-white font-bold">Certify Your Sacred Beads</h2>
            <p className="text-surface-container-low max-w-xl mx-auto font-body text-xs sm:text-sm">
              Protect your spiritual practices. Every verified seed receives an official certificate with X-Ray photograph attachments from our Rohini laboratory.
            </p>
            <Link
              href="/about#contact"
              className="inline-block bg-white text-primary px-10 py-3.5 rounded-xl font-headline font-bold hover:shadow-lg active:scale-95 transition-all text-center"
            >
              Book X-Ray Scan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
