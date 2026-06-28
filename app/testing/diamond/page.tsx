import Link from "next/link";

export const metadata = {
  title: "Diamond Testing & Certification | Authentic Gem Lab",
  description: "Verify diamond authenticity, origin, and grade. High-resolution thermal conductivity, UV fluorescence, and microscopic inclusion mapping at Authentic Gem Lab.",
};

export default function DiamondTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 py-10 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="z-10 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Molecular Verification
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-on-surface leading-[1.15]">
              The Alchemy of <br />
              <span className="italic text-primary">Authenticity</span>
            </h1>
            <p className="text-base sm:text-lg text-secondary max-w-lg mx-auto lg:mx-0 leading-relaxed font-body">
              Through thermal conductivity, microscopic inclusion scans, and photoluminescence analysis, we reveal the origin of every stone. Professional testing that distinguishes natural from laboratory growth at Authentic Gem Lab.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline font-bold hover:translate-y-[-2px] transition-all shadow-[0_4px_12px_rgba(212,175,55,0.2)] border-t border-white/30 text-center"
              >
                Verify Your Diamond
              </Link>
              <Link
                href="#methods"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-headline font-bold hover:bg-surface-container-low transition-all text-center"
              >
                View Laboratory Methods
              </Link>
            </div>
          </div>
          
          <div className="relative justify-self-center w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 border border-outline-variant/15">
              <img
                alt="Diamond authentication"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf0B2Vr5a5stlYnkpvGl_nb96T4zNK7ekyCEM7Bws28SXssXQp_kjbyYIPfvaeb8wYIGt6KTf_AdqfrNTLhn63zgpxl82xJbzjCAkEiRa38MUz2L9MIdJrsmnOmh-LJIB8g1bcA1IIcQshHkZ-uNZ7fXm_n8LYBcFCdGD5QW4R6-rbsboKAOpYoqtU-72r5pR4vnC0dQqh_O74S0oFEuvJxKgSBKrNjRrjZoUQaxwEQLoJEKNbgAWooL3xrLDR6CY-Koj4KPXj1o8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Distinction Grid */}
      <section id="methods" className="bg-surface-container-low py-16 md:py-20 px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">Real vs Lab-Grown Distinction</h2>
            <p className="text-secondary font-body text-sm sm:text-base">
              While chemically identical, the origin story of a diamond is written in its atomic lattice. Our advanced diagnostic tools decode these microscopic chapters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Thermal Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">device_thermostat</span>
                </div>
                <h3 className="text-lg sm:text-xl font-headline font-semibold text-on-surface">Thermal Conductivity</h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  Diamonds are the world's most efficient heat conductors. We measure thermal displacement and heat dissipations to verify physical structure and rule out simulants.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                Precision Level: 0.001λ
              </span>
            </div>

            {/* Spectroscopic Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all md:mt-8 lg:mt-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">light_mode</span>
                </div>
                <h3 className="text-lg sm:text-xl font-headline font-semibold text-on-surface">UV Fluorescence</h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  Observation under short-wave and long-wave ultraviolet light displays structural growth patterns and color fluorescence unique to natural deep-crust pressure settings.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                Spectral Mapping
              </span>
            </div>

            {/* Microscopic Card */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-primary text-2xl">biotech</span>
                </div>
                <h3 className="text-lg sm:text-xl font-headline font-semibold text-on-surface">Inclusion Mapping</h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  We catalog internal crystallization anomalies, feathers, and carbon pinpoints under 60x loupe microscopy to establish the geological signature of the stone.
                </p>
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary mt-6">
                Atomic Clarity Scans
              </span>
            </div>
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
