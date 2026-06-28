import Link from "next/link";

export const metadata = {
  title: "Lunar Silver Verification | Authentic Gem Lab",
  description: "Sterling silver testing and hallmark verification. Traditional fire assay, chemical spot analysis, and XRF scan for silverware and bullion at Authentic Gem Lab.",
};

export default function SilverTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section: Editorial Asymmetry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Scientific Precision
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Silver Purity <br />
              <span className="italic text-primary">Testing Laboratory</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Employing high-frequency X-Ray Fluorescence (XRF) and traditional Fire Assay techniques to certify the molecular integrity of your silver assets with 99.99% accuracy at Authentic Gem Lab.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
              >
                Start Analysis
              </Link>
              <Link
                href="#methodology"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-headline font-semibold hover:bg-surface-container-low transition-all text-center"
              >
                View Standards
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 group border border-outline-variant/15">
              <img
                className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-103 transition-transform duration-500"
                alt="Macro shot of a pure silver bar under bright clinical laboratory lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfYXvEginFk6RPPZS0f2gdrSdzgc_ID1HeUISfFW7utS71PLU8c0XOVeS_3D1WobGtAdGWPIr5gVJdLwFSuuh0ACapx3jA51E_tYo8wgrg2-Q2lJxw4uSi44Oq7FKScvs6VMRcb1R363MsmqlcIniuM7rM9BnDe6mM0ZJqmNFXrjowzyP8ePHFfpJqTcv46J-h7qzGdP1dNT423hS0CDhwh0ETU2LN4FyVlW3P7RwdsSKNKMzmFddrmqlnIj5O25dKhaU3QaJgRpM"
              />
            </div>
            {/* Decorative Alchemy Mandala Element */}
            <div className="absolute -bottom-6 -left-6 w-56 h-56 opacity-10 pointer-events-none">
              <svg className="text-primary w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" strokeWidth="0.5"></circle>
                <rect height="60" strokeWidth="0.5" transform="rotate(45 50 50)" width="60" x="20" y="20"></rect>
                <circle cx="50" cy="50" r="30" strokeWidth="0.5"></circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Testing Methodologies */}
      <section id="methodology" className="bg-surface-container-low py-16 md:py-20 px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold mb-4 text-on-surface">Purity Methodologies</h2>
            <p className="font-body text-secondary text-sm sm:text-base">
              Our laboratory utilizes a dual-verification process to ensure commercial and investment grade compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* XRF Spectrometry */}
            <div className="md:col-span-2 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 text-primary">
                    <span className="material-symbols-outlined text-2xl">biotech</span>
                  </div>
                  <h3 className="font-headline text-lg sm:text-xl font-bold">XRF Spectrometry</h3>
                  <p className="text-secondary text-sm leading-relaxed max-w-md font-body">
                    Non-destructive elemental analysis that identifies the exact composition of silver alloys within seconds. Critical for hallmarking and retail verification.
                  </p>
                </div>
                <div className="shrink-0 w-40 h-40 rounded-xl overflow-hidden self-center sm:self-auto border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover"
                    alt="Professional scientist using a handheld XRF spectrometer on a silver piece in a lab"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Yx8RtZSvKioGx9WfoqFgKW5J8h6hmwqGjUH-nFrf7wlawiTeQY2czMbxkZRjKXHFazx38aOq7LZN6JJtift8-VsKZr7rlFAGeNLWzUc2XK25GnDrTPtGVzPC7QzqR4_xb9UgwrtTtP4pcdsdSwcBt3wGvjIoKjavvSJAVBk-MzPig3EgyF64u2s32i3BLSiBwCKs9NlJN3rUYuYTLwLnftnHE736-og3iCF2QNf7mr-31fVG2D6evmTL4DysU86lmB2DZ4BAW50"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-6 border-t border-outline-variant/10 mt-6">
                <span className="bg-background text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  Precision: 0.01%
                </span>
                <span className="bg-background text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  Time: 120s
                </span>
              </div>
            </div>

            {/* Fire Assay */}
            <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-md border border-primary/20">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-bold">Fire Assay</h3>
                <p className="text-white/80 leading-relaxed text-sm font-body">
                  The global standard. Using thermal extraction in a cupellation furnace to isolate pure silver from lead and impurities at 980°C.
                </p>
              </div>
              <div className="mt-8 text-[10px] font-label font-bold uppercase tracking-widest text-white/90 bg-white/10 px-3 py-1.5 rounded-full inline-block self-start">
                ISO 11427 Standard
              </div>
            </div>

            {/* Density Analysis */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">balance</span>
              <h4 className="font-headline text-lg font-bold mb-2">Hydrostatic Balance</h4>
              <p className="text-xs sm:text-sm text-secondary mb-6 font-body leading-relaxed">
                Measuring specific gravity to detect internal tungsten or lead cores hidden inside large silver bullion bars.
              </p>
              <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-[85%]"></div>
              </div>
              <div className="flex justify-between mt-2 font-label text-[10px] font-bold">
                <span className="text-outline uppercase">Accuracy</span>
                <span className="text-primary uppercase">85% Verification</span>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">verified</span>
              <h4 className="font-headline text-lg font-bold mb-2">Accredited Assays</h4>
              <p className="text-xs sm:text-sm text-secondary font-body leading-relaxed">
                All results are provided with an encrypted digital certificate valid worldwide, signed by a senior chemical assayer.
              </p>
            </div>

            {/* Legacy Testing */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">history_edu</span>
              <h4 className="font-headline text-lg font-bold mb-2">Legacy Spot Assay</h4>
              <p className="text-xs sm:text-sm text-secondary font-body leading-relaxed">
                Acid and chemical streak analysis carefully executed to check antique silverware, heritage coins, and filigree art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Transparency Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 order-2 lg:order-1 space-y-8 md:space-y-12 w-full">
            <div className="flex gap-6 items-start">
              <span className="text-3xl sm:text-4xl font-headline font-bold text-outline-variant/40">01</span>
              <div>
                <h4 className="font-headline text-lg sm:text-xl font-bold text-on-surface mb-2">Secure Submission</h4>
                <p className="text-secondary font-body text-xs sm:text-sm leading-relaxed">
                  Each silver item is cataloged into our private ledger with high-resolution macro photography and weight verification.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <span className="text-3xl sm:text-4xl font-headline font-bold text-outline-variant/40">02</span>
              <div>
                <h4 className="font-headline text-lg sm:text-xl font-bold text-on-surface mb-2">Multi-Spectrum Scan</h4>
                <p className="text-secondary font-body text-xs sm:text-sm leading-relaxed">
                  Items undergo triplicate scanning using independent spectroscopic sensors to eliminate margin of error.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-3xl sm:text-4xl font-headline font-bold text-outline-variant/40">03</span>
              <div>
                <h4 className="font-headline text-lg sm:text-xl font-bold text-on-surface mb-2">Certified Assay Report</h4>
                <p className="text-secondary font-body text-xs sm:text-sm leading-relaxed">
                  A comprehensive purity report detailing exact alloy compositions is issued and embossed with our laboratory seal.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-2xl rotate-3 transform border border-outline-variant/10">
              <img
                className="rounded-xl w-full"
                alt="A scientist in a lab coat holding a silver ingot and comparing it to a digital purity report"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkY1I-QReHf5snbxKCYUz2P_4-2EXIQePK0OXehOFVc7ZxXGMfqAOXx_g4H6zwKwggqjehC-n5Ixpk2m4IFk-RU6rehzOt-mj3OL8Q9ksgrcqWeb4lnTMW1L8bNG2HUmMOTMkchEbATq0pyls2MILScpux8ZYny23YbD2C42p1bHBcTe1RUnGX6kOVEWHsBd38X1D-McmF7n-opGQu8WFS4eZIK3FNZnUCqo4LgXr-4FdTEImhnkKl0XF6Ychow5lIiVIFuMtKSbc"
              />
            </div>
            <div className="absolute inset-0 bg-primary-container/10 -rotate-3 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
        <div className="bg-surface-container-highest rounded-3xl p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border border-outline-variant/20 shadow-sm">
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-2">45k+</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              Tests Completed
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-2">99.9%</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              Accuracy Rate
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-2">24h</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              Standard TAT
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-2">ISO</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              9001 Certified
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
