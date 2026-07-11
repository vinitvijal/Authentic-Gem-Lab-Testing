import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gemstone Testing Laboratory in Delhi | Vedic Certification AGL",
  description: "Delhi's leading ISO 9001:2015 certified gemstone testing laboratory in Rohini. We certify astrological natural gemstones, treatments (heating, glass filling) & origin.",
  alternates: {
    canonical: "https://authenticgemlab.com/testing/gemstones",
  },
  openGraph: {
    title: "Gemstone Testing Laboratory in Delhi | Vedic Certification AGL",
    description: "Delhi's leading ISO 9001:2015 certified gemstone testing laboratory in Rohini. We certify astrological natural gemstones, treatments (heating, glass filling) & origin.",
    url: "https://authenticgemlab.com/testing/gemstones",
    siteName: "Authentic Gem Lab",
    type: "website",
    locale: "en_IN",
  },
};

export default function GemstonesTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Vedic suitability &amp; Spectroscopic Identification
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Gemstone <br />
              <span className="italic text-primary">Testing &amp; Certification</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Bridging modern atomic analytics with planetary energies. As Delhi's premier <strong className="text-on-surface font-semibold text-primary">gemstone testing laboratory</strong>, we utilize laser Raman Spectroscopy, refractometry, and high-power gemological microscopes to identify synthetic treatments, color enhancements, and mineral origins.
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
                src="/rohit_3.jpeg"
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
              Certified gemstone testing requires advanced molecular scans. We check for thermal diffusion, lead glass fills, organic dyes, and composite overlays at our Rohini laboratory.
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
              Authentic Gem Lab provides dedicated <strong className="text-on-surface font-semibold text-primary">Vedic Suitability Assays</strong>, certifying that the gemstone is completely untreated, natural, and possesses the correct clarity to transmit planetary frequencies.
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

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-4 text-on-surface">Frequently Asked Questions</h2>
            <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
              Find answers to the most common queries regarding gemstone certification in Delhi, treatment scans, and Vedic planetary wear suitability.
            </p>
            <div className="w-20 h-[2px] bg-primary-container mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What is an astrological gemstone and why must it be untreated?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                In Vedic Jyotish, a gemstone acts as a physical conduit that captures and transmits specific planetary rays into the body's subtle energy channels. Heating, beryllium diffusion, or glass-filling permanently alters the stone's crystalline structure and chemical composition, disrupting its natural refractive properties. Consequently, treated stones are rendered astrologically inert and fail to provide the desired remedial benefits.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  How does AGL gemstone testing laboratory in Delhi identify treatments?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                At our Rohini testing laboratory, we utilize high-precision instruments including laser Raman Spectroscopy (532nm) to analyze internal mineral structures, gemstone refractometers to check refractive indices down to 0.001 RI, and high-power gemological microscopes to locate signature gas bubbles, flux residues, and thermal stress cracks indicative of artificial heating or glass-filling.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What gemstones are tested for Vedic astrology suitability at your Rohini lab?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                We perform comprehensive tests on the Navaratna (nine primary astrological gemstones), including Blue Sapphire (Neelam), Yellow Sapphire (Pukhraj), Ruby (Manik), Emerald (Panna), Red Coral (Moonga), Pearl (Moti), Hessonite (Gomed), Cat's Eye (Lehsuniya), and Diamond (Heera). We check each specimen for organic chemical structure and geological origin.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What information does an AGL Gemstone Purity Certificate contain?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                An AGL Gemstone Certificate contains the exact weight (in carats and ratti), shape/cut style, dimensions, color, species and mineral family, refractive index, and specific gravity. Crucially, it lists diagnostic findings on treatment status (e.g., No Indication of Heating) and origin, accompanied by a secure online report lookup QR code.
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
                "@id": "https://authenticgemlab.com/testing/gemstones/#service",
                "name": "Astrological Gemstone Testing & Vedic Verification",
                "provider": {
                  "@type": "GovernmentOffice",
                  "name": "AGL Authentic Gem Lab",
                  "url": "https://authenticgemlab.com",
                  "logo": "https://authenticgemlab.com/logo.png"
                },
                "areaServed": "Delhi",
                "description": "Scientific gemstone testing services in Rohini, Delhi. Specialized Raman spectroscopy scans, treatment profiles identification, and Vedic astrological suitability assays."
              },
              {
                "@type": "FAQPage",
                "@id": "https://authenticgemlab.com/testing/gemstones/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is an astrological gemstone and why must it be untreated?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Astrological gemstones channel planetary rays. Treatments like heat, glass-filling, or diffusion damage the crystal structure and block this energy, rendering them astrologically ineffective."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does AGL gemstone testing laboratory in Delhi identify treatments?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our Rohini lab uses laser Raman Spectroscopy (532nm), refractometer measurements, and gemological microscopes to locate signature growth lines, flux remnants, and thermal stress cracks."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What gemstones are tested for Vedic astrology suitability at your Rohini lab?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We test the Navaratna family including Blue Sapphire, Ruby, Emerald, Yellow Sapphire, Hessonite, Coral, Pearl, Cat's Eye, and Diamond for chemical integrity and natural geological origin."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What information does an AGL Gemstone Purity Certificate contain?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "An AGL certificate lists dimensions, weight, refractive index, specific gravity, mineral species, treatment declarations (e.g., natural/untreated), origin, and a digital lookup report code."
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
