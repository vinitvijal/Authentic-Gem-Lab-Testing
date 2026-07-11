import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gold Assaying & Hallmarking Laboratory Delhi | AGL",
  description: "Delhi's leading government-approved gold testing laboratory in Rohini. We offer XRF spectrometry, chemical Fire Assay (cupellation) & bullion testing.",
  alternates: {
    canonical: "https://authenticgemlab.com/testing/gold",
  },
  openGraph: {
    title: "Gold Assaying & Hallmarking Laboratory Delhi | AGL",
    description: "Delhi's leading government-approved gold testing laboratory in Rohini. We offer XRF spectrometry, chemical Fire Assay (cupellation) & bullion testing.",
    url: "https://authenticgemlab.com/testing/gold",
    siteName: "Authentic Gem Lab",
    type: "website",
    locale: "en_IN",
  },
};

export default function GoldTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Metallurgical Integrity &amp; Purity Certification
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Gold Testing <br />
              <span className="italic text-primary">&amp; Assaying Laboratory</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              We employ clinical-grade X-Ray Fluorescence (XRF) scanners and traditional chemical Fire Assay (cupellation) methods to certify the purity of your gold assets. As Delhi's leading <strong className="text-on-surface font-semibold text-primary">gold testing laboratory in Rohini</strong>, we guarantee absolute precision for jewelry, bullion, and scrap.
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
                src="/rohit_3.jpeg"
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
              Our gold assaying center Rohini utilizes a comprehensive three-stage testing system to guarantee that every gold specimen is mapped internally and externally.
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

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-4 text-on-surface">Frequently Asked Questions</h2>
            <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
              Find answers to common queries regarding gold hallmarking, purity certification, and metallurgical testing procedures.
            </p>
            <div className="w-20 h-[2px] bg-primary-container mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  How does AGL test the purity of gold?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                We perform gold purity scans using a dual-verification system. First, non-destructive X-Ray Fluorescence (XRF) spectrometry analyzes surface elemental compositions. Second, for legal valuation and complete accuracy, we execute Fire Assay cupellation, which completely isolates pure gold by smelting out base metals.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What is the difference between XRF spectrometry and Fire Assay?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                XRF spectrometry is a fast, 100% non-destructive scan that reads surface plating and alloys. However, it cannot penetrate deeply into thick gold bars. Fire Assay is a destructive chemical assaying method that smelt-purifies a tiny scraping of the gold specimen at 1050°C. It is the gold standard for global trading because it tests the core metal purity.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  How does your Rohini lab detect tungsten and heavy-metal inserts in gold bars?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                Tungsten has an identical density to gold, meaning standard gravity balances cannot spot it. Our gold testing laboratory in Delhi utilizes advanced Ultrasonic Core Scanners. These propagate high-frequency sound waves through the metal, detecting acoustic mismatches at boundary interfaces created by internal tungsten or lead inserts.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What gold purity standards are tested at AGL?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                We test and certify all standard gold alloy grades, including 24K (999 Fine), 22K (916 Fine), 18K (750 Fine), and 14K (583 Fine) jewelry, bullion coins, raw scrap, and dental gold alloys.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://authenticgemlab.com/testing/gold/#service",
                "name": "Gold Assaying & Hallmark Testing",
                "provider": {
                  "@type": "GovernmentOffice",
                  "name": "AGL Authentic Gem Lab",
                  "url": "https://authenticgemlab.com",
                  "logo": "https://authenticgemlab.com/logo.png"
                },
                "areaServed": "Delhi",
                "description": "Authorized gold assaying and purity verification in Rohini, Delhi. Specialized XRF scans, chemical Fire Assay cupellation, and ultrasonic tungsten core detection."
              },
              {
                "@type": "FAQPage",
                "@id": "https://authenticgemlab.com/testing/gold/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does AGL test the purity of gold?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We test gold purity using a dual-verification system: surface XRF spectrometry scans followed by traditional cupellation Fire Assay chemical smelting for absolute core purity readings."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the difference between XRF spectrometry and Fire Assay?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "XRF spectrometry is non-destructive and measures surface purity. Fire Assay chemically separates base metals from pure gold in a high-temperature furnace (1050°C), verifying core composition."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does your Rohini lab detect tungsten and heavy-metal inserts in gold bars?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Since tungsten has a similar density to gold, we use Ultrasonic Core Scanners to propagate sound waves through the metal, spotting acoustic anomalies caused by internal foreign metal inserts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What gold purity standards are tested at AGL?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We certify all gold grades: 24K (999 Fine), 22K (916 Fine traditional Indian jewelry), 18K (750 Fine luxury diamonds), and 14K (583 Fine daily wear assets)."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

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
