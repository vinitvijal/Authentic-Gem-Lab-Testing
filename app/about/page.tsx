import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us & Laboratory Credentials | Authentic Gem Lab",
  description: "Learn about Delhi's leading integrated testing facility for Gold, Silver, Gemstones, Rudraksha, and Diamonds in Rohini, directed by Rohit Aggarwal.",
  alternates: {
    canonical: "https://authenticgemlab.com/about",
  },
  openGraph: {
    title: "About Us & Laboratory Credentials | Authentic Gem Lab",
    description: "Learn about Delhi's leading integrated testing facility for Gold, Silver, Gemstones, Rudraksha, and Diamonds in Rohini, directed by Rohit Aggarwal.",
    url: "https://authenticgemlab.com/about",
    siteName: "Authentic Gem Lab",
    type: "website",
    locale: "en_IN",
  },
};

export default function AboutHeritage() {
  return (
    <div className="pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2 block font-semibold">
              India&apos;s Pioneering Integrated Facility
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-bold tracking-tight text-on-surface">
              India&apos;s First Lab for Gold, Silver, Diamond, Rudraksha &amp; Gemstone Testing—<br className="hidden sm:inline" />
              <span className="text-primary italic">All at one place.</span>
            </h1>
            <p className="font-body text-base sm:text-lg text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Established under the leadership of Rohit Aggarwal, Authentic Gem Lab (AGL) brings absolute transparency, state-of-the-art scientific instrumentation, and ISO-accredited testing standards to every certification, all under one roof.
            </p>
          </div>
          <div className="lg:col-span-5 relative w-full max-w-sm sm:max-w-md lg:max-w-none justify-self-center">
            <div className="aspect-[4/5] bg-surface-container-high rounded-3xl overflow-hidden relative z-10 shadow-lg border border-outline-variant/15">
              <img
                className="w-full h-full object-cover"
                alt="Close-up of a vintage microscope reflecting a brilliant cut sapphire in an editorial laboratory setting"
                src="/group.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-outline-variant/30 rounded-full z-0 opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Mission Statement: Asymmetric Layout */}
      <section className="bg-surface-container-low py-16 mb-16 overflow-hidden px-4 sm:px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1 w-full max-w-sm mx-auto lg:mx-0">
              <div className="bg-white p-3 sm:p-4 shadow-xl rotate-[-2deg] border border-outline-variant/10 rounded-lg">
                <img
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded"
                  alt="Monochrome editorial portrait of two visionary founders in minimalist linen attire"
                  src="/rohit.jpg"
                />
              </div>
              <div className="absolute -top-8 -right-2 text-7xl sm:text-8xl font-headline text-outline-variant/10 select-none pointer-events-none font-bold">
                AGL
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface">The AGL Mission</h2>
              <p className="font-body text-secondary text-sm sm:text-base leading-relaxed">
                Our mission is to bring transparency and absolute scientific proof to the gemstone and jewelry trade. Directed by Rohit Aggarwal, we combine advanced digital radiography, specific gravity tests, and Raman Spectroscopy to check every item and issue high-integrity certifications.
              </p>
              <p className="font-body text-secondary text-sm sm:text-base leading-relaxed">
                We believe that trust is the hardest mineral. By eliminating the ambiguity of trade, we protect collectors, artisans, and individuals who seek genuine astrological gemstones or verified gold and silver assets.
              </p>
              <div className="pt-4 flex justify-center lg:justify-start">
                <div className="flex items-center gap-4 text-primary font-semibold font-label text-sm uppercase tracking-widest">
                  <span>Directed by Rohit Aggarwal</span>
                  <div className="h-[1px] w-12 bg-primary-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold">Laboratory Standards</h2>
          <div className="h-[2px] w-20 bg-primary-container mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Large Feature */}
          <div className="md:col-span-2 bg-surface-container-lowest p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/15 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl">science</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Precision Spectroscopy</h3>
              <p className="text-secondary font-body leading-relaxed text-sm sm:text-base">
                Our laboratory in Rohini, Delhi is equipped with high-resolution XRF spectrometry and laser diagnostics to analyze chemical compositions and spot synthetic fills, glass insertions, or thermal treatments.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-widest text-outline">
                ISO 9001:2015 Accredited
              </span>
              <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] uppercase font-bold tracking-widest text-outline">
                GIA Standardized Equipment
              </span>
            </div>
          </div>

          {/* Small Feature 1 */}
          <div className="bg-primary-container p-6 sm:p-8 rounded-3xl flex flex-col justify-between text-on-primary-container shadow-md border-t border-white/20">
            <span className="material-symbols-outlined text-4xl">workspace_premium</span>
            <div>
              <h3 className="font-headline text-xl font-bold mb-2">Verified Provenance</h3>
              <p className="text-xs sm:text-sm opacity-90 font-body leading-relaxed">
                Beyond physical specs, we evaluate gemstone structural authenticity and provide detailed reporting on natural origin.
              </p>
            </div>
          </div>

          {/* Small Feature 2 */}
          <div className="bg-surface-container-highest p-6 sm:p-8 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
            <div>
              <h3 className="font-headline text-xl font-bold mb-2 text-on-surface">Digital Registry</h3>
              <p className="text-xs sm:text-sm text-secondary font-body leading-relaxed">
                Every certificate is registered in our secure database with macro photographs to prevent duplicate copy falsification.
              </p>
            </div>
          </div>

          {/* Medium Feature */}
          <div className="md:col-span-2 relative h-64 sm:h-80 rounded-3xl overflow-hidden group shadow-md border border-outline-variant/10">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Interior of a ultra-modern white laboratory with gold accents and high-end scientific equipment"
              src="/rohit_3.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex items-end p-6 sm:p-8">
              <h3 className="font-headline text-xl sm:text-2xl text-white font-bold">Ethical Verification Lab</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors / Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-outline-variant/20 mb-16 text-center">
        <div>
          <div className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-1">15k+</div>
          <div className="font-label text-xs uppercase tracking-widest text-outline font-bold">Items Certified</div>
        </div>
        <div>
          <div className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-1">0.02%</div>
          <div className="font-label text-xs uppercase tracking-widest text-outline font-bold">Variance Margin</div>
        </div>
        <div>
          <div className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-1">99.9%</div>
          <div className="font-label text-xs uppercase tracking-widest text-outline font-bold">Accuracy Index</div>
        </div>
        <div>
          <div className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-1">24/7</div>
          <div className="font-label text-xs uppercase tracking-widest text-outline font-bold">Online Verification</div>
        </div>
      </section>

      {/* Direct Reach Details Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mb-12">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_20px_40px_rgba(27,28,26,0.04)] border border-outline-variant/15 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-headline text-3xl font-bold text-on-surface">Direct Contact &amp; Consultations</h2>
            <p className="text-sm text-secondary font-body">
              For direct submissions, certification inquiries, or immediate metal assaying at our Rohini center, please connect with us directly via the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-sm">
            {/* Phone & Email Card */}
            <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">contact_phone</span>
                  <span>Direct Helpline</span>
                </h3>
                <div className="space-y-2 text-secondary">
                  <p><strong>Owner / Director:</strong> Rohit Aggarwal</p>
                  <p className="flex items-center gap-2">
                    <strong>Phone:</strong>
                    <a href="tel:9643210025" className="text-primary hover:underline">9643210025</a>{" "}
                    {/* <a href="tel:7838111023" className="text-primary hover:underline">7838111023</a> */}
                  </p>
                  <p className="flex items-center gap-2">
                    <strong>Email:</strong>
                    <a href="mailto:authenticgemlab@gmail.com" className="text-primary hover:underline">
                      authenticgemlab@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-xs text-stone-500 pt-2 border-t border-outline-variant/10">
                Call ahead for booking priority analysis sessions.
              </div>
            </div>

            {/* Address & Hours Card */}
            <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-headline text-lg font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                  <span>Laboratory Address</span>
                </h3>
                <div className="space-y-2 text-secondary leading-relaxed text-xs sm:text-sm">
                  <Link href="https://maps.app.goo.gl/J3eB8YT3zQbjPfUc7" target="_blank">
                    Shop No. 6, DDA Market, CSC-IV, Pocket C-8, Sector-8, Rohini, Delhi - 110085
                  </Link>
                  <p className="text-[11px] italic text-stone-500">
                    (Opposite Gurudwara, Near Mother Dairy, Madhuban Chowk)
                  </p>
                  <p><strong>Operating Hours:</strong> Tuesday – Sunday: 11:00 AM – 8:00 PM</p>
                </div>
              </div>
              <div className="text-xs text-stone-500 pt-2 border-t border-outline-variant/10">
                Metro Access: Rohini Sector-8 / Madhuban Chowk Intersection.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
