import Link from "next/link";

export const metadata = {
  title: "Gemstones & Astrological Verification | Authentic Gem Lab",
  description: "Advanced colored gemstone testing, treatments identification, and Vedic astrological alignment. Certified Raman spectroscopy for sapphires, rubies, and emeralds at Authentic Gem Lab.",
};

export default function GemstonesTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Vedic &amp; Chemical Alignment
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Colored Gemstone <br />
              <span className="italic text-primary">Testing &amp; Verification</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Bridging modern atomic analytics with planetary energies. We utilize laser Raman Spectroscopy to identify heat treatments and chemical composition, validating both the mineral's authenticity and its suitability for Vedic purposes at Authentic Gem Lab.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
              >
                Verify Gemstone
              </Link>
              <Link
                href="#astrology"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-headline font-semibold hover:bg-surface-container-low transition-all text-center"
              >
                Astrological Guide
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 group border border-outline-variant/15">
              <img
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="Intricate arrangement of emeralds and sapphires on laboratory analysis tray"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTZTLY3hDqVj1ImxKmm1WIK444jDLXUH8172p8VpFFWBL2EMBNlr-bC1j5cSk2Jhru1GeBFsziXATK7VZbJF7lebOjmUtCVi_1HcjQgTs_Il2-qJtPT825ysP060vR5yzLN2AKPViscsA1Ss75iRWumGX58iiA657Y7GxSmoxvNHhBkLk8CWDUyx0qvkNEAes9NL2k7VvhFocLWFCrgv5h4AUE_Cxut0Gd-Wl5rFqmQ4WuTZOPY47M8RZJtJFJYcOP9vWQZMQIg_w"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-outline-variant/30 rounded-full z-0 opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Methodology Sections */}
      <section className="bg-surface-container-low py-16 md:py-20 px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold mb-4 text-on-surface">Scientific Assaying Standards</h2>
            <p className="font-body text-secondary text-sm sm:text-base">
              Colored gemstone diagnostics require identifying composite enhancements, heat injections, and geological origins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block">science</span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Raman Spectroscopy</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-body">
                  Exposing samples to high-intensity laser beams provides a chemical footprint, immediately identifying natural versus synthetic corundum or crystal fillers.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Laser Wavelength: 532nm
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block">light_mode</span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Refractive Index (RI)</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-body">
                  Measuring the speed of light refraction within the stone allows us to define doublets, triplets, or synthetic glass mockups with total precision.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Accurate to 0.001 RI
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block">healing</span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Treatment Detection</h3>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed font-body">
                  Thermal treatment, fracture filling with lead glass, diffusion of beryllium, and oil filling in emeralds are cataloged to evaluate true valuation.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Thermal &amp; Dye Scans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Astrological Alignment Section */}
      <section id="astrology" className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary block font-semibold">
              Jyotish Sciences
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface">Vedic Gemology Integration</h2>
            <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
              In Vedic astrology, natural, untreated gemstones function as cosmic transmitters, focusing planetary radiation into the wearer's field. If a gemstone is treated with high heat, chemicals, or lead glass-fillers, its crystal lattice is fractured, making it astrologically ineffective.
            </p>
            <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
              Authentic Gem Lab provides dedicated <strong>Vedic Suitability Assays</strong>, certifying that the gemstone is completely untreated, natural, and possesses the correct clarity to transmit planetary frequencies.
            </p>
          </div>
          
          <div className="bg-surface-container rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 border border-outline-variant/20 shadow-sm">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary text-center lg:text-left">Planetary Gemstone Matches</h3>
            <div className="space-y-4 font-body">
              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Blue Sapphire (Neelam)</h4>
                  <p className="text-[10px] sm:text-xs text-secondary">Planetary Ruler: Saturn (Shani)</p>
                </div>
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full font-label text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  Cosmic Power
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Ruby (Manik)</h4>
                  <p className="text-[10px] sm:text-xs text-secondary">Planetary Ruler: Sun (Surya)</p>
                </div>
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full font-label text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  Vitality
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-outline-variant/10">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Emerald (Panna)</h4>
                  <p className="text-[10px] sm:text-xs text-secondary">Planetary Ruler: Mercury (Budha)</p>
                </div>
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full font-label text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  Intellect
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Yellow Sapphire (Pukhraj)</h4>
                  <p className="text-[10px] sm:text-xs text-secondary">Planetary Ruler: Jupiter (Guru)</p>
                </div>
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full font-label text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  Prosperity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-4 sm:mx-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary-container p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-10 alchemical-mandala"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-headline text-on-primary-container font-bold">Vedic Gemology Scans</h2>
            <p className="text-on-primary-container/85 max-w-xl mx-auto font-body text-xs sm:text-sm">
              Identify treatment boundaries and verify astrological suitability. Contact our Rohini laboratory to submit your sapphire, ruby, or emerald.
            </p>
            <Link
              href="/about#contact"
              className="inline-block bg-primary text-white px-10 py-3.5 rounded-xl font-headline font-bold hover:shadow-lg active:scale-95 transition-all text-center"
            >
              Verify suitability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
