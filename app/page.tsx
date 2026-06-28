import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 py-10 md:py-16 lg:py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="absolute inset-0 alchemical-mandala pointer-events-none -z-10"></div>
        
        <div className="flex-grow space-y-6 z-10 w-full lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-outline">
              Delhi's Trusted Verification Lab
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-bold text-on-surface leading-[1.15] tracking-tight">
            Authentic <br />
            <span className="text-primary italic font-normal">Gem Laboratory</span> <br />
            &amp; Assaying Solutions
          </h1>
          <p className="text-base sm:text-lg text-secondary max-w-xl mx-auto lg:mx-0 font-body leading-relaxed">
            Where empirical scientific precision meets trusted gemstone heritage. We provide definitive composition analysis and hallmark certification for Gold, Silver, Gemstones, Rudraksh, and Diamonds.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <span className="text-xs font-label font-bold uppercase tracking-wider">Government Approved Specs</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-primary text-xl">biotech</span>
              <span className="text-xs font-label font-bold uppercase tracking-wider">ISO 9001 Verified</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
              <span className="text-xs font-label font-bold uppercase tracking-wider">Vedic Certification</span>
            </div>
          </div>
          
          <div className="pt-4">
            <Link
              href="/about#contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-headline font-semibold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all text-center"
            >
              Book Your Analysis
            </Link>
          </div>
        </div>

        <div className="flex-grow w-full max-w-sm sm:max-w-md lg:max-w-none relative justify-self-center lg:w-2/5">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_15px_30px_rgba(27,28,26,0.08)] border border-outline-variant/20 transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              className="w-full h-full object-cover"
              alt="High-end close-up of a raw diamond being inspected with a professional magnifying loupe under clinical laboratory lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeMpQIll74JNTRd9ykbncybHTwz5IfqXyTPmT_uNhkFvC-wn6pGvuVi9KduqvwzB9Zftd2pi5QTKUouxMnTrZedpjBXHwjgSbg_HqgMvCNKAlCqrGg00UF51WzYzrrUJzj63fEqKXaGTYTLV5jDZWVuOj174frTp0zBqScDSSdP0eq3-wB-nUIJB5JDNg5RJiow99hRilydtHOlmpsi-Z7EqgWzwxegptLUP8n6zR20_oDJYsduZB6gnhCFRP9d7VaT2wUbUCizDM"
            />
          </div>
          {/* Floating Decorative Element */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-lg border border-outline-variant/10 max-w-[220px] transform -rotate-3 hidden md:block">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">brightness_7</span>
              </div>
              <p className="text-xs font-headline italic text-on-surface leading-normal">
                &ldquo;Every gemstone holds a natural blueprint. We decrypt it with absolute integrity.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section: Bento Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-4 text-on-surface">Our Testing Services</h2>
              <p className="text-secondary font-body text-sm sm:text-base leading-relaxed">
                Empirical assaying, spectroscopic analysis, and botanical verification mapping to identify true composition.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <span className="text-[10px] font-label font-bold uppercase tracking-[0.3em] text-primary">
                ISO 9001:2015 Standards
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Gold Testing */}
            <div className="md:col-span-8 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group">
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                <div className="flex-1 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl text-primary-container">science</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-headline font-bold text-on-surface">Gold Assaying &amp; Hallmarking</h3>
                    <p className="text-sm leading-relaxed text-secondary font-body">
                      Precision XRF spectrometry and chemical Fire Assay cupellation to identify gold purity up to 99.99%. Hallmark verification for bars, jewelry, and scrap.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/testing/gold"
                      className="text-xs font-label uppercase tracking-widest text-primary font-bold flex items-center gap-1 hover:opacity-80"
                    >
                      Explore Gold Verification <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden aspect-video sm:aspect-auto h-48 sm:h-auto">
                  <img
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    alt="Gold bullion bars stacked neatly under professional laboratory lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6QJImibVarRNcYE0dl3D3ViBeuDH-vM_CmUjh6Ylf3wLgcGejKhtmqNlh2HnyaT41MFeZQpIhaSWj5rR8mshmlPqhkRaTYwYltKNL4yBIxJoE73Ee9rUdzq3YpQdk8f9NAaI9wgKOzA4EM8vxBMVIAOaXqoxH3xIaP7EHHS4gab4KQ972mfJB78uKEcXYyph0301TaBMZWmFwXGOlH9vvgKpt9kn8qpakV170PrYf6IAkt--q2Qno95LgQ8LxUPodEYFgHidulF8"
                  />
                </div>
              </div>
            </div>

            {/* Silver Testing */}
            <div className="md:col-span-4 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-2xl">blur_on</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-on-surface">Silver Testing</h3>
                <p className="text-sm text-secondary font-body leading-relaxed">
                  Testing for Sterling Silver standards (925) using electronic titration and non-destructive surface testing.
                </p>
                <Link
                  href="/testing/silver"
                  className="text-xs font-label uppercase tracking-widest text-primary font-bold flex items-center gap-1 hover:opacity-80 pt-2 block"
                >
                  View Silver Lab <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden h-36">
                <img
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  alt="Intricate silver ornaments under laboratory scrutiny"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUw5YtWMNLhCHdZaVF3fADExo6wmkpC_V7srHM5ws2LInt2sgDifJb21ko-hzgxU2X3F2AgjDLfNDPX2V-wV26moUHNqgb6YVviEMlOM8U4DqhXAH6YU82Kms3VqoGYgJVsYeec42icGZBT-sghaHBzthGxwDwafInWMc0583OU3d-i8XCsXwQLQO9MefvqE28BhKrNu9Am4CGXOgAL6XKH5dlv0_xFY6K0hzZ2Pyuo-5obJ-BiQevI6MwUi6hZw-Q7gOtSknZ7jc"
                />
              </div>
            </div>

            {/* Diamond Testing */}
            <div className="md:col-span-4 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2.5xl">diamond</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-headline font-bold text-on-surface">Diamond Grading</h3>
                <p className="text-sm text-secondary font-body leading-relaxed">
                  Full 4C grading evaluation (Cut, Color, Clarity, Carat) and spectroscopic CVD/HPHT lab-grown checks.
                </p>
                <Link
                  href="/testing/diamond"
                  className="text-xs font-label uppercase tracking-widest text-primary font-bold flex items-center gap-1 hover:opacity-80 pt-2 block"
                >
                  View Diamond Lab <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden h-36">
                <img
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  alt="A cut diamond held in metal tweezers reflecting spectrums of light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzVESq-pCl3YLMX2o1c8VPc2lr8TgdkmCHr-Cnucqq4KpdI-t6l3v_LCAuhbPwN8ie0xWVTKAog1aAXILDS7MOD8iIGts4sulYWOGDozMtNbImzZzz449MB-RRhQIZwStJ7vIXNHVxPJ6OSgbJ5EmUOckrEa4dgoVnnfe3yVexLB7r1g0szJuasJaU6Vv__TDZR0EfT6AOjW13rJa-NskngAvkFo1ngBkLGzQtn7Jhgg9Y84VMntMLDKaab253DDX1xnZx13kq9CA"
                />
              </div>
            </div>

            {/* Gemstone Testing */}
            <div className="md:col-span-8 bg-primary text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between shadow-sm border border-primary/20">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="max-w-md space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-headline font-bold">Colored Gemstones &amp; Vedic Alignment</h3>
                  <p className="opacity-80 text-sm leading-relaxed font-body">
                    Identifying treatment profiles (heating, glass-filling), natural origin, and mineral families. We certify suitability for astrological planetary alignment.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/testing/gemstones"
                      className="inline-block px-6 py-3 bg-white text-primary rounded-full text-xs font-label font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all"
                    >
                      Explore Gemology
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-30 md:opacity-40 group-hover:opacity-50 transition-opacity">
                <img
                  className="w-full h-full object-cover"
                  alt="Raw multi-colored gemstones emeralds and rubies on laboratory tray"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTZTLY3hDqVj1ImxKmm1WIK444jDLXUH8172p8VpFFWBL2EMBNlr-bC1j5cSk2Jhru1GeBFsziXATK7VZbJF7lebOjmUtCVi_1HcjQgTs_Il2-qJtPT825ysP060vR5yzLN2AKPViscsA1Ss75iRWumGX58iiA657Y7GxSmoxvNHhBkLk8CWDUyx0qvkNEAes9NL2k7VvhFocLWFCrgv5h4AUE_Cxut0Gd-Wl5rFqmQ4WuTZOPY47M8RZJtJFJYcOP9vWQZMQIg_w"
                />
              </div>
            </div>

            {/* Rudraksh Testing */}
            <div className="md:col-span-12 bg-surface-container-lowest p-6 sm:p-8 md:p-10 rounded-3xl border border-outline-variant/15 shadow-sm hover:shadow-md transition-all group">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 space-y-4 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                    <span className="text-[10px] font-label font-bold uppercase tracking-widest text-primary">
                      Botanical X-Ray Radiography
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">Rudraksh Mukhi Certification</h3>
                  <p className="text-sm text-secondary font-body leading-relaxed">
                    Rudraksh beads possess distinct facets (Mukhis). Our laboratory utilizes digital X-Ray imaging to check internal seed compartments, density scans to detect fake faces/glue modifications, and botanical testing to verify genuine Elaeocarpus ganitrus seeds.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/testing/rudraksh"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-headline font-semibold text-sm hover:opacity-90 transition-all shadow-md"
                    >
                      Authenticate Rudraksh <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 order-1 lg:order-2 w-full aspect-video rounded-2xl overflow-hidden shadow border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    alt="A close-up photograph of a sacred Rudraksh bead being scanned under digital X-ray imaging in a modern laboratory"
                    src="/images/rudraksh-testing.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-surface-container-highest rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border border-outline-variant/20 shadow-sm">
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-1">45k+</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              Tests Completed
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-1">99.9%</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              Accuracy Rate
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-1">24h</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              Standard TAT
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-headline font-bold text-primary mb-1">ISO</div>
            <div className="font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-outline">
              9001:2015 Certified
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-outline-variant/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-4 text-on-surface">Client Reviews</h2>
          <div className="w-20 h-[2px] bg-primary-container mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Testimonial 1 */}
          <div className="space-y-4 flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
            <div className="w-16 h-16 rounded-full border border-primary-container p-1 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                alt="Portrait of Vikram Mehta"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvOPQhPNzhjvieE_CFqDlCln1Suv2-UarSIqDjJ_7bN6c6QN7GC4N4cjJK_MBcIJJX5zIiIVblnt95W6NUDEbKTBZnXxqwFxHWkgS4RjpLIaUU5NuK_jXoJkKX4jrVm6bv3CpzifjQyawQVuv8oUVS6I1ir4EQpv0vrURTKSvoLVylQLc9dxz2vXAM9stnl6UQl9itHcWzK-49l8j635tT166142bWupILszY6k_68FBTqrYDI4hWxG2YqofwJF7TEmo2Pr4Evxg"
              />
            </div>
            <div className="text-primary flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-secondary italic font-body text-xs sm:text-sm leading-relaxed max-w-xs">
              &ldquo;The level of detail in the certificate was astonishing. I finally understood the energetic suitability of my heirloom sapphire.&rdquo;
            </p>
            <div className="pt-2">
              <h4 className="font-headline font-bold text-on-surface text-sm sm:text-base">Vikram Mehta</h4>
              <p className="text-[9px] font-label uppercase tracking-widest text-outline">Private Collector</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="space-y-4 flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
            <div className="w-16 h-16 rounded-full border border-primary-container p-1 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                alt="Portrait of Priya Sharma"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuZIh_8ReMWR0ffNkosM7gXCig4PZGLokUOyxjQrIBfdKoixinTUB80Xh4APzuM5Vc7PoT2gjnR_e2eyteHipW5UqAX3wc5b5TVWSP3tbGSb0kwUEZ5pPycaOquwFNpJwG52hk3_dnBXDvRhdgxyAu_HWU-mJCuXUsi--knJj_uXMPZWgct5P46zwV1mjpU91tQfShJGkap2DFe1o2llFfzPBw-BP3vePHty8BC5ZXRvE_mHPeFVNOAYN_fqYV-DPfwn-5MqkOaJxo"
              />
            </div>
            <div className="text-primary flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-secondary italic font-body text-xs sm:text-sm leading-relaxed max-w-xs">
              &ldquo;Unmatched integrity. Their testing of my gold jewelry collection gave me complete peace of mind before the appraisal process.&rdquo;
            </p>
            <div className="pt-2">
              <h4 className="font-headline font-bold text-on-surface text-sm sm:text-base">Priya Sharma</h4>
              <p className="text-[9px] font-label uppercase tracking-widest text-outline">Jewelry Artisan</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="space-y-4 flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm">
            <div className="w-16 h-16 rounded-full border border-primary-container p-1 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                alt="Portrait of Dr. Anirudh Rao"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwzhIxrTPMn9SJfINLt-506h0_eIzCB6O5u6ySwILuBNGHCKvTkTErd4irw1C5-0xsDzM5TetrCH3zTpUCk_yawqGrN9_wNIGLHpodJtPAVbg5X0r9-ItxncaEelxdqnrdgvGcgVWfd7vTWT4rb8Qipbf9XIE7pGyBxNgFwGeQne9E6MMVuUiWffafMbbs3XSxiJYxVi-VjtbqPCJelXMcEueZdDhBxNA3hxP8EpNK4Hb2gVQgIQ6xppKwq5H9HmuOxuPB118HWbg"
              />
            </div>
            <div className="text-primary flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-secondary italic font-body text-xs sm:text-sm leading-relaxed max-w-xs">
              &ldquo;A unique blend of science and Vedic wisdom. Their specific gravity testing of my Rudraksh seeds was highly scientific.&rdquo;
            </p>
            <div className="pt-2">
              <h4 className="font-headline font-bold text-on-surface text-sm sm:text-base">Dr. Anirudh Rao</h4>
              <p className="text-[9px] font-label uppercase tracking-widest text-outline">Gemology Consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-container border-t border-outline-variant/10">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest shadow-[0_20px_40px_rgba(27,28,26,0.04)] border border-outline-variant/15 rounded-3xl p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 alchemical-mandala opacity-10"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-on-surface">Begin Your Laboratory Analysis</h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto font-body leading-relaxed">
              Whether you seek chemical assaying, certification authenticity, or planetary suitability, our Rohini lab is equipped to deliver the truth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-2">
              <Link
                href="/about#contact"
                className="bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-headline font-bold text-base sm:text-lg hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md text-center"
              >
                Book Your Analysis
              </Link>
              <Link
                href="/about"
                className="bg-white border border-outline-variant text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-headline font-bold text-base sm:text-lg hover:bg-surface-container-low transition-all text-center"
              >
                View Our Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
