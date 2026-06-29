import Link from "next/link";

export const metadata = {
  title: "Diamond, CVD, HPHT & Simulant Testing | Authentic Gem Lab",
  description: "Verify diamond authenticity, origin, and grade. Differentiate natural diamonds from lab-grown CVD & HPHT diamonds, and simulants like Moissanite, Cubic Zirconia, and White Sapphire.",
};

export default function DiamondTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 py-10 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="z-10 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Molecular Verification &amp; Simulant Identification
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-on-surface leading-[1.15]">
              Diamond<br />
              <span className="italic text-primary">Testing & Verification</span>
            </h1>
            <p className="text-base sm:text-lg text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed font-body">
              Using advanced photoluminescence spectroscopy, thermal conductivity profiling, and microscopic analysis, we distinguish natural diamonds from laboratory-grown (CVD &amp; HPHT) diamonds and detect simulants like Moissanite, Cubic Zirconia, and White Sapphire.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
              >
                Verify Your Diamond
              </Link>
              <Link
                href="#methods"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-headline font-semibold hover:bg-surface-container-low transition-all text-center"
              >
                View Diagnostic Methods
              </Link>
            </div>
          </div>

          <div className="relative justify-self-center w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 border border-outline-variant/15">
              <img
                alt="Macro view of a brilliant-cut diamond placed on a testing stage in a gemstone analysis laboratory being scanned by a spectrometer laser"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                src="/images/smartpro-aura.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Distinction Grid */}
      <section id="methods" className="bg-surface-container-low py-16 md:py-20 px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">Laboratory Diagnostic Suite</h2>
            <p className="text-secondary font-body text-sm sm:text-base">
              While lab-grown diamonds share a chemical blueprint with natural stones, their crystal lattices retain distinct growth markers. Simulants differ entirely at the molecular level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* CVD & HPHT Identification */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
                </div>
                <h3 className="text-lg font-headline font-semibold text-on-surface">CVD &amp; HPHT Detection</h3>
                <p className="text-secondary text-xs leading-relaxed font-body">
                  We use Photoluminescence (PL) spectroscopy to detect silicon-vacancies (CVD) or metallic fluxes (HPHT), and DiamondView imaging to trace geometric growth patterns and phosphorescence.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                PL Spectroscopy &amp; UV Scan
              </span>
            </div>

            {/* Moissanite (Mozinite) Isolation */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">electric_bolt</span>
                </div>
                <h3 className="text-lg font-headline font-semibold text-on-surface">Moissanite Verification</h3>
                <p className="text-secondary text-xs leading-relaxed font-body">
                  Silicon Carbide conducts heat similarly to diamond. We isolate Moissanite by checking for double refraction (birefringence) under 10x-60x magnification and utilizing electrical conductivity.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                Birefringence &amp; Conductivity
              </span>
            </div>

            {/* Cubic Zirconia (CZ) Diagnostics */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">scale</span>
                </div>
                <h3 className="text-lg font-headline font-semibold text-on-surface">Cubic Zirconia (CZ)</h3>
                <p className="text-secondary text-xs leading-relaxed font-body">
                  A heavy zirconium dioxide simulant. We detect Cubic Zirconia through specific gravity measurements (CZ has ~1.6x the density of diamond) and thermal resistance testing.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                Specific Gravity &amp; Thermal Drift
              </span>
            </div>

            {/* White Sapphire & Simulants */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">light_mode</span>
                </div>
                <h3 className="text-lg font-headline font-semibold text-on-surface">White Sapphire &amp; Glass</h3>
                <p className="text-secondary text-xs leading-relaxed font-body">
                  Corundum and glass simulants lack diamond's high refractive index (RI 2.42) and dispersion. We identify them via refractometry (RI ~1.76 for Sapphire) and polariscope analysis.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                Refractometry &amp; Polarizing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-3xl font-semibold mb-4 text-on-surface">Diamond &amp; Simulant Verification Matrix</h2>
          <p className="text-secondary font-body text-sm sm:text-base">
            Technical properties compared to establish absolute diagnostic certainty during analysis.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-outline-variant/15">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-sm sm:text-base">
              <thead>
                <tr className="border-b border-outline-variant/20 pb-4">
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Material Type</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Composition</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Refractive Index (RI)</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Thermal Conductivity</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Key Distinguishing Laboratory Test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">Natural Diamond</td>
                  <td className="py-4">Carbon (C)</td>
                  <td className="py-4">2.42 (Singly Refractive)</td>
                  <td className="py-4">Exceptional (~2000 W/m·K)</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Natural nitrogen impurities (Type Ia/Ib), mineral inclusions, and irregular growth lines under magnification.</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">HPHT Synthetic Diamond</td>
                  <td className="py-4">Carbon (C)</td>
                  <td className="py-4">2.42 (Singly Refractive)</td>
                  <td className="py-4">Exceptional (~2000 W/m·K)</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Metal flux inclusions (Ni, Fe, Co), strong phosphorescence, and cuboctahedral growth patterns under DiamondView.</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">CVD Synthetic Diamond</td>
                  <td className="py-4">Carbon (C)</td>
                  <td className="py-4">2.42 (Singly Refractive)</td>
                  <td className="py-4">Exceptional (~2000 W/m·K)</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Silicon-vacancy (SiV-) defect line at 737nm detected by Photoluminescence, and tabular growth striations.</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">Moissanite (Mozinite)</td>
                  <td className="py-4">Silicon Carbide (SiC)</td>
                  <td className="py-4">2.65 - 2.69 (Doubly Refractive)</td>
                  <td className="py-4">High (~150 W/m·K)</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Birefringence (displays facet doubling under 10x loupe), electrical conductivity, and high dispersion (intense rainbow fire).</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">Cubic Zirconia (CZ)</td>
                  <td className="py-4">Zirconium Dioxide (ZrO₂)</td>
                  <td className="py-4">2.15 (Singly Refractive)</td>
                  <td className="py-4">Very Low (Thermal Insulator)</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">High Specific Gravity (5.6 - 6.0, feels 1.6x heavier than diamond), immediate failure on standard thermal tester, lower hardness (8.5 Mohs).</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">White Sapphire</td>
                  <td className="py-4">Aluminum Oxide (Al₂O₃)</td>
                  <td className="py-4">1.76 - 1.77 (Doubly Refractive)</td>
                  <td className="py-4">Low</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Much lower Refractive Index, lacks dispersion/fire (looks glassy), doubly refractive, and low thermal conductivity.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certification Importance (Asymmetric Layout) */}
      <section className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1 max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
            <div className="relative z-10 border-[8px] sm:border-[12px] border-white shadow-2xl rounded-lg overflow-hidden">
              <img
                alt="Certification process"
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBITJqgGR_cXP3HhyOaJvVZ6dt5DsNoCQmfUBa_TTq00cy_6GJBdyQo9HqRINV2BJqi1qplh-LHoexjr32gDuCOLXu8CV98KSu3d3ragFnXaS4TVe-06MAkjP-AwBKzsNDNu5PXGE1TZPEPUWU4-BVESi-Gjs7UgLfPlK8bFJ6_D1dPKa3owFaT4HaQlOj4IQNLDxA9nUwRygpoDaQcA6woADuuThcOSZfLHUJVJeyfPUX34R9YzbpOSdM4vII4j50Qf63d6c38ArU"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-container p-6 z-20 hidden md:block rounded-xl shadow-lg border-t border-white/30">
              <p className="font-headline text-on-primary-container text-xl lg:text-2xl font-bold italic leading-normal">
                &ldquo;Trust is the hardest mineral.&rdquo;
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              The Ledger of Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface">Why Certification Matters</h2>

            <div className="space-y-6 text-left">
              <div className="flex gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2 font-headline">Investment Security</h4>
                  <p className="text-secondary text-xs sm:text-sm font-body leading-relaxed">
                    A laboratory-backed diamond report verifies identity and grades, protecting your capital value across all global diamond trading exchanges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary text-2xl">gavel</span>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2 font-headline">Laser-Inscribed Provenance</h4>
                  <p className="text-secondary text-xs sm:text-sm font-body leading-relaxed">
                    Tested diamonds receive a microscopic laser inscription on the girdle, linking the physical gemstone directly to its secure digital database registry.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary text-2xl">history_edu</span>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2 font-headline">Ethical Tracing</h4>
                  <p className="text-secondary text-xs sm:text-sm font-body leading-relaxed">
                    We strictly audit the supply chain of all submissions, ensuring diamonds certified by our laboratory are conflict-free and compliant with the Kimberley Process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Canvas */}
      <section className="mx-4 sm:mx-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 alchemical-mandala"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline text-white font-bold">Begin Your Laboratory Analysis</h2>
            <p className="text-surface-container-low max-w-xl mx-auto text-xs sm:text-sm font-body leading-relaxed">
              Secure your diamond's legacy with the industry's most rigorous scientific verification. Appraisals and testing bookings available at our key global stations and Delhi headquarters.
            </p>
            <Link
              href="/about#contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-headline font-bold text-base hover:bg-primary-container hover:text-white transition-all transform hover:scale-105"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
