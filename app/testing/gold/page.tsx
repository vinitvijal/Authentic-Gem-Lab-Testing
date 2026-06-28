import Link from "next/link";

export const metadata = {
  title: "Gold Purity Verification | Authentic Gem Lab",
  description: "Verify the molecular composition and karatage of your gold. Professional XRF spectrometry, Fire Assay, and ultrasonic scanning for gold bars and jewelry at Authentic Gem Lab.",
};

export default function GoldTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Metallurgical Integrity
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Aurum Gold <br />
              <span className="italic text-primary">Analysis Laboratory</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              We employ clinical-grade X-Ray Fluorescence (XRF) scanners and traditional chemical Fire Assay (cupellation) to certify your gold assets with absolute molecular precision at Authentic Gem Lab.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-headline font-semibold shadow-lg hover:opacity-90 active:scale-95 transition-all text-center"
              >
                Book Purity Scan
              </Link>
              <Link
                href="#methodology"
                className="border border-outline-variant/30 text-primary px-8 py-4 rounded-xl font-headline font-semibold hover:bg-surface-container-low transition-all text-center"
              >
                View Methods
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 group border border-outline-variant/15">
              <img
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="Macro shot of pure gold bars stacked under bright clinical laboratory lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6QJImibVarRNcYE0dl3D3ViBeuDH-vM_CmUjh6Ylf3wLgcGejKhtmqNlh2HnyaT41MFeZQpIhaSWj5rR8mshmlPqhkRaTYwYltKNL4yBIxJoE73Ee9rUdzq3YpQdk8f9NAaI9wgKOzA4EM8vxBMVIAOaXqoxH3xIaP7EHHS4gab4KQ972mfJB78uKEcXYyph0301TaBMZWmFwXGOlH9vvgKpt9kn8qpakV170PrYf6IAkt--q2Qno95LgQ8LxUPodEYFgHidulF8"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-outline-variant/30 rounded-full z-0 opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="bg-surface-container-low py-16 md:py-20 px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold mb-4 text-on-surface">Scientific Assaying Methods</h2>
            <p className="font-body text-secondary text-sm sm:text-base">
              A comprehensive three-stage testing system guarantees that every specimen is mapped inside and out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Method 1 */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 text-primary">
                  <span className="material-symbols-outlined text-2xl">biotech</span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">XRF Spectrometry</h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  Non-destructive optical scanning that exposes the elemental components (Gold, Silver, Platinum, Palladium, Nickel, Zinc) on the surface of your metal with 0.01% accuracy.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Precision: 0.01% | Time: 120s
              </div>
            </div>

            {/* Method 2 */}
            <div className="bg-primary text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-2xl">local_fire_department</span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-bold">Chemical Fire Assay</h3>
                <p className="text-white/80 text-sm leading-relaxed font-body">
                  The traditional gold standard of purification. A tiny scraping is combined with lead and cupelled at 1050°C, separating pure gold from all base metals to verify Karatage.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-white/90 bg-white/10 px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Standard: GIA &amp; ISO 11426
              </div>
            </div>

            {/* Method 3 */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl shadow-sm border border-outline-variant/15 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 text-primary">
                  <span className="material-symbols-outlined text-2xl">settings_input_antenna</span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">Ultrasonic Core Scans</h3>
                <p className="text-secondary text-sm leading-relaxed font-body">
                  Advanced sound wave penetration scans the internal density of bullion bars, immediately exposing tungsten core insertions or heavy-metal plating without cutting the bar.
                </p>
              </div>
              <div className="text-[10px] font-label font-bold uppercase tracking-widest text-primary bg-background px-3 py-1.5 rounded-full inline-block mt-6 self-start">
                Tungsten Detection: 100%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purity Levels & No-Line Rules */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <h2 className="font-headline text-2xl sm:text-3xl font-semibold mb-8 text-center text-on-surface">Gold Karat Purity Standards</h2>
        
        {/* Table wrapping custom typography with ghost borders and no-line spacing */}
        <div className="bg-surface-container-lowest rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm border border-outline-variant/15">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-sm sm:text-base">
              <thead>
                <tr className="border-b border-outline-variant/20 pb-4">
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Karatage</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Gold Purity</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Parts Per Thousand</th>
                  <th className="font-headline text-stone-800 text-xs sm:text-sm font-semibold uppercase tracking-wider py-4">Common Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">24 Karat</td>
                  <td className="py-4">99.9%</td>
                  <td className="py-4 font-mono">999 Fine Gold</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Investment bullion bars, sovereign coins</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">22 Karat</td>
                  <td className="py-4">91.6%</td>
                  <td className="py-4 font-mono">916 Gold</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Traditional Indian jewelry, bridal ornaments</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">18 Karat</td>
                  <td className="py-4">75.0%</td>
                  <td className="py-4 font-mono">750 Gold</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Luxury diamonds, high-end rings and watches</td>
                </tr>
                <tr className="hover:bg-background/40 transition-colors">
                  <td className="py-4 font-semibold text-primary">14 Karat</td>
                  <td className="py-4">58.3%</td>
                  <td className="py-4 font-mono">583 Gold</td>
                  <td className="py-4 text-secondary text-xs sm:text-sm">Daily wear rings, sturdy earrings, bands</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-4 sm:mx-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary-container p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-10 alchemical-mandala"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-headline text-on-primary-container font-bold">Secure Your Gold Valuation</h2>
            <p className="text-on-primary-container/85 max-w-xl mx-auto font-body text-xs sm:text-sm">
              Ensure your assets are pure. Contact us to schedule an appointment for hallmarking, appraisal, or scrap gold composition scanning at Rohini.
            </p>
            <Link
              href="/about#contact"
              className="inline-block bg-primary text-white px-8 py-3.5 rounded-xl font-headline font-bold hover:shadow-lg active:scale-95 transition-all text-center"
            >
              Book Gold Assay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
