import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Silver Purity Testing & Certification Delhi | AGL",
  description: "Delhi's trusted silver testing laboratory in Rohini. We provide sterling silver (925) hallmarking, XRF spectrometry scans & chemical assaying services.",
  alternates: {
    canonical: "https://authenticgemlab.com/testing/silver",
  },
  openGraph: {
    title: "Silver Purity Testing & Certification Delhi | AGL",
    description: "Delhi's trusted silver testing laboratory in Rohini. We provide sterling silver (925) hallmarking, XRF spectrometry scans & chemical assaying services.",
    url: "https://authenticgemlab.com/testing/silver",
    siteName: "Authentic Gem Lab",
    type: "website",
    locale: "en_IN",
  },
};

export default function SilverTesting() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              Scientific Precision &amp; Purity Certification
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-[1.15]">
              Silver Purity <br />
              <span className="italic text-primary">&amp; Testing Laboratory</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body">
              Employing high-frequency X-Ray Fluorescence (XRF) and traditional chemical Fire Assay techniques to certify the molecular integrity of your silver assets. As the leading <strong className="text-on-surface font-semibold text-primary">silver testing laboratory in Delhi</strong>, we verify purity levels up to 99.99% accuracy at our Rohini center.
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
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                alt="Macro shot of a pure silver bar under bright clinical laboratory lighting"
                src="/rohit_8.jpeg"
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
              Our silver testing center Rohini utilizes a dual-verification process to ensure commercial and investment grade compliance.
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

          <div className="flex-1 order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
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

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-4 text-on-surface">Frequently Asked Questions</h2>
            <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
              Find answers to common queries regarding silver hallmarking, 925 sterling purity tests, and chemical assaying.
            </p>
            <div className="w-20 h-[2px] bg-primary-container mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  How is silver purity tested at AGL?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                We verify silver purity using non-destructive X-Ray Fluorescence (XRF) spectrometry for surface alloys and traditional chemical Fire Assay (cupellation at 980°C) for complete core verification. Hydrostatic balances are also used to test internal densities on larger bullion pieces.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  What are the common purity standards for silver assets?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                The most common standard is Sterling Silver (92.5% pure silver, often marked as 925). We also test Fine Silver (99.9% pure, marked as 999) typically used in investment bullion bars, and lower purity silverware grades ranging down to 80% purity.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  Can XRF testing detect heavy-metal plating on silverware?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                Handheld XRF scans read surface depths up to a few microns. If a brass or copper base is thickly plated with sterling silver, XRF alone might misidentify it. To check for internal metals, our silver testing laboratory in Delhi uses hydrostatic specific gravity density measurements and, when necessary, micro-scraping tests.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-surface-container-lowest rounded-2xl border border-outline-variant/15 p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none focus:outline-none">
                <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface pr-4">
                  Do you test antique silverware and heritage coins?
                </h3>
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-outline-variant/10 text-sm sm:text-base text-secondary font-body leading-relaxed">
                Yes, we perform specialized non-destructive tests (spectrometry, density balance, and spot chemical tests) designed specifically to check antique heritage silver pieces, utensils, ornaments, and old currency coins without damaging their historical value.
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
                "@id": "https://authenticgemlab.com/testing/silver/#service",
                "name": "Silver Purity Testing & Hallmarking",
                "provider": {
                  "@type": "GovernmentOffice",
                  "name": "AGL Authentic Gem Lab",
                  "url": "https://authenticgemlab.com",
                  "logo": "https://authenticgemlab.com/logo.png"
                },
                "areaServed": "Delhi",
                "description": "Professional silver purity verification in Rohini, Delhi. Includes sterling silver 925 hallmarking, XRF spectrometry analysis, and Fire Assay chemical smelting."
              },
              {
                "@type": "FAQPage",
                "@id": "https://authenticgemlab.com/testing/silver/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How is silver purity tested at AGL?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We test silver purity using non-destructive XRF spectrometry, hydrostatic specific gravity balances for bullion bars, and high-precision cupellation Fire Assays for certified chemical purification."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the common purity standards for silver assets?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Common standards are Sterling Silver (92.5% purity, marked as 925) for jewelry and utensils, and Fine Silver (99.9% purity, marked as 999) for investment bars."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can XRF testing detect heavy-metal plating on silverware?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "XRF is a surface-level scan. To detect base metals thickly plated with silver, we combine XRF with specific gravity density measurements and micro-scraping assays."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you test antique silverware and heritage coins?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we execute specialized non-destructive tests (spectroscopic scans, density balance, and legacy spot chemical analyses) to certify heritage artifacts without damaging them."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

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
