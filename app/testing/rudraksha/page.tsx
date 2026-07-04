import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rudraksha Verification & X-Ray Certification Delhi | AGL",
  description: "Delhi's leading laboratory for scientific Rudraksha testing in Rohini. We verify genuine beads, Mukhis & internal seed compartments using digital X-Ray radiography.",
  alternates: {
    canonical: "https://authenticgemlab.com/testing/rudraksha",
  },
  openGraph: {
    title: "Rudraksha Verification & X-Ray Certification Delhi | AGL",
    description: "Delhi's leading laboratory for scientific Rudraksha testing in Rohini. We verify genuine beads, Mukhis & internal seed compartments using digital X-Ray radiography.",
    url: "https://authenticgemlab.com/testing/rudraksha",
    siteName: "Authentic Gem Lab",
    type: "website",
    locale: "en_IN",
  },
};

export default function RudrakshaTesting() {
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
              Rudraksha Testing <br />
              <span className="italic text-primary">&amp; X-Ray Certification</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Using state-of-the-art digital radiography, specific gravity density calculations, and microscopic botanical profiling, we reveal the internal truth of sacred seeds. As the premier <strong className="text-on-surface font-semibold text-primary">Rudraksha testing laboratory in Delhi</strong>, we protect collectors against artificial lines, glued compartments, and composite fakes.
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
                alt="A close-up photograph of a sacred Rudraksha bead being scanned under digital X-ray imaging in a laboratory setting"
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
              Our gemstone and Rudraksha certification Rohini center isolates genuine Elaeocarpus ganitrus seeds from elaborate human manipulation.
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
        <h2 className="font-headline text-2xl sm:text-3xl font-semibold mb-8 text-center text-on-surface">Vedic Rudraksha Classifications</h2>

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

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-4 text-on-surface">Frequently Asked Questions</h2>
            <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
              Find answers to the most common queries regarding digital X-Ray radiography, specific gravity tests, and botanical identification of Rudraksha seeds.
            </p>
            <div className="w-20 h-[2px] bg-primary-container mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  Why is digital X-Ray imaging used to verify Rudraksha beads?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                A natural Rudraksha bead contains hollow internal seed cavities (chambers) that correspond exactly to its outer facets (Mukhi lines). Digital X-ray radiography allows us to view the internal anatomy non-destructively, proving whether the bead has genuine internal seed compartments or is an artificial carving.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What are the common ways counterfeit Rudraksha beads are made?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                Counterfeiters typically carve extra lines onto standard 5-Mukhi beads to sell them as rare high-Mukhi variants, glue segments together to form fakes, or cast beads entirely from wood dust and synthetic resins. In all these cases, specific gravity tests and X-Ray scans quickly identify the absence of natural internal seeds and chambers.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  How does AGL verify a 1 Mukhi (one-faced) round Rudraksha bead?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                Round 1-Mukhi beads (Ek Mukhi) are extraordinarily rare in nature. The vast majority in the market are fakes carved from regular beads or made of cashew-shaped Bhadraksha seeds. Under X-ray radiography, a genuine round 1-Mukhi must show exactly one internal seed chamber. If it shows multiple chambers or is carved from a standard 5-Mukhi, it is identified as a fake.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What botanical checks are performed to verify genuine Elaeocarpus ganitrus seeds?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                Under 10x to 60x digital zoom microscopy, we inspect the fiber structure, the natural pattern of surface cells (cytology), and the characteristics of the surface grooves (capsules) to ensure they match the botanical blueprint of authentic Elaeocarpus ganitrus trees.
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
                "@id": "https://authenticgemlab.com/testing/rudraksha/#service",
                "name": "Rudraksha Mukhi & Purity Certification",
                "provider": {
                  "@type": "GovernmentOffice",
                  "name": "AGL Authentic Gem Lab",
                  "url": "https://authenticgemlab.com",
                  "logo": "https://authenticgemlab.com/logo.png"
                },
                "areaServed": "Delhi",
                "description": "Scientific Rudraksha authentication services in Rohini, Delhi. Includes digital X-ray radiography scans, Specific Gravity density balances, and botanical microscopy."
              },
              {
                "@type": "FAQPage",
                "@id": "https://authenticgemlab.com/testing/rudraksha/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why is digital X-Ray imaging used to verify Rudraksha beads?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A natural Rudraksha bead has internal seed cavities matching its external Mukhis. Digital X-ray radiography lets us examine these compartments non-destructively to prove authenticity."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the common ways counterfeit Rudraksha beads are made?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Fakes are typically made by carving extra lines on standard beads, gluing segments together, or casting from wood dust and synthetic resins. These are easily detected by X-ray or specific gravity checks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does AGL verify a 1 Mukhi (one-faced) round Rudraksha bead?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Extremely rare in nature, a genuine round 1-Mukhi must show exactly one internal seed chamber under X-Ray. If it displays multiple chambers or carved lines, it is flagged as counterfeit."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What botanical checks are performed to verify genuine Elaeocarpus ganitrus seeds?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Using 10x-60x digital zoom microscopy, we verify natural fiber walls, cell structures, and furrow paths to exclude resin casts, wood carvings, or other seed species."
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
