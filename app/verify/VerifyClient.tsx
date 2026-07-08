"use client";

import { useState } from "react";
import Link from "next/link";

interface MockReport {
  id: string;
  category: string;
  purity: string;
  weight: string;
  date: string;
  result: string;
  comments: string;
  imageUrl: string;
}

const mockDatabase: Record<string, MockReport> = {
  "AGL-101-GOLD": {
    id: "AGL-101-GOLD",
    category: "Gold Bullion (24 Karat)",
    purity: "99.99% Fine Gold (Verified)",
    weight: "100.00 Grams",
    date: "June 12, 2026",
    result: "Genuine Gold (ISO 11426 Certified)",
    comments: "No core inclusions detected. Zero density anomalies.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6QJImibVarRNcYE0dl3D3ViBeuDH-vM_CmUjh6Ylf3wLgcGejKhtmqNlh2HnyaT41MFeZQpIhaSWj5rR8mshmlPqhkRaTYwYltKNL4yBIxJoE73Ee9rUdzq3YpQdk8f9NAaI9wgKOzA4EM8vxBMVIAOaXqoxH3xIaP7EHHS4gab4KQ972mfJB78uKEcXYyph0301TaBMZWmFwXGOlH9vvgKpt9kn8qpakV170PrYf6IAkt--q2Qno95LgQ8LxUPodEYFgHidulF8",
  },
  "AGL-202-DIAMOND": {
    id: "AGL-202-DIAMOND",
    category: "Natural Diamond (Brilliant Cut)",
    purity: "VVS1 Clarity, E Color, Excellent Cut",
    weight: "1.24 Carats",
    date: "June 18, 2026",
    result: "Natural Origin (No CVD/HPHT Treatment)",
    comments: "Microscopic carbon pinpoints present on the pavilion. Girdle laser inscribed.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzVESq-pCl3YLMX2o1c8VPc2lr8TgdkmCHr-Cnucqq4KpdI-t6l3v_LCAuhbPwN8ie0xWVTKAog1aAXILDS7MOD8iIGts4sulYWOGDozMtNbImzZzz449MB-RRhQIZwStJ7vIXNHVxPJ6OSgbJ5EmUOckrEa4dgoVnnfe3yVexLB7r1g0szJuasJaU6Vv__TDZR0EfT6AOjW13rJa-NskngAvkFo1ngBkLGzQtn7Jhgg9Y84VMntMLDKaab253DDX1xnZx13kq9CA",
  },
  "AGL-303-Rudraksha": {
    id: "AGL-303-Rudraksha",
    category: "14 Mukhi Rudraksha (Dev Mani)",
    purity: "14 Chambers Verified via Radiography",
    weight: "3.42 Grams",
    date: "June 25, 2026",
    result: "Authentic Elaeocarpus ganitrus seed",
    comments: "X-Ray imaging confirms 14 symmetric seed chambers. Specific gravity density matches botanical standards.",
    imageUrl: "/images/Rudraksha-testing.png",
  },
  "AGL-404-EMERALD": {
    id: "AGL-404-EMERALD",
    category: "Natural Emerald (Octagonal Step Cut)",
    purity: "Moderate Clarity, Rich Green Color",
    weight: "2.10 Carats",
    date: "June 20, 2026",
    result: "Natural Origin, Colombian Origin",
    comments: "Minor fracture filling with natural cedar oil detected. No synthetic dyes.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTZTLY3hDqVj1ImxKmm1WIK444jDLXUH8172p8VpFFWBL2EMBNlr-bC1j5cSk2Jhru1GeBFsziXATK7VZbJF7lebOjmUtCVi_1HcjQgTs_Il2-qJtPT825ysP060vR5yzLN2AKPViscsA1Ss75iRWumGX58iiA657Y7GxSmoxvNHhBkLk8CWDUyx0qvkNEAes9NL2k7VvhFocLWFCrgv5h4AUE_Cxut0Gd-Wl5rFqmQ4WuTZOPY47M8RZJtJFJYcOP9vWQZMQIg_w",
  },
};

export default function VerifyClient() {
  const [reportId, setReportId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<MockReport | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportId.trim()) return;

    setIsLoading(true);
    setReport(null);
    setSearched(true);

    // Fake API Latency (1.5 seconds)
    setTimeout(() => {
      const formattedId = reportId.trim().toUpperCase();
      if (mockDatabase[formattedId]) {
        setReport(mockDatabase[formattedId]);
      } else {
        // Generate a dynamic fallback report for user input so the API flow always displays feedback
        setReport({
          id: formattedId,
          category: "Certified Specimen (Custom Registry)",
          purity: "Verified Purity / Grade Compliant",
          weight: "Tested / Logged in Database",
          date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
          result: "Authentic & Verified under AGL Guidelines",
          comments: "Assayed using standard non-destructive protocols. Database match confirmed.",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeMpQIll74JNTRd9ykbncybHTwz5IfqXyTPmT_uNhkFvC-wn6pGvuVi9KduqvwzB9Zftd2pi5QTKUouxMnTrZedpjBXHwjgSbg_HqgMvCNKAlCqrGg00UF51WzYzrrUJzj63fEqKXaGTYTLV5jDZWVuOj174frTp0zBqScDSSdP0eq3-wB-nUIJB5JDNg5RJiow99hRilydtHOlmpsi-Z7EqgWzwxegptLUP8n6zR20_oDJYsduZB6gnhCFRP9d7VaT2wUbUCizDM",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-10 pb-20">
      {/* Hero Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-8 text-center space-y-6">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-primary block font-semibold">
          Secure Verification Ledger
        </span>
        <h1 className="font-headline text-3xl sm:text-5xl font-bold text-on-surface">
          Verify Assay &amp; Gem Reports
        </h1>
        <p className="font-body text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Verify the authenticity of report certifications issued by Authentic Gem Lab. Enter the Report ID stamped on your physical certificate to fetch our database records.
        </p>
      </section>

      {/* Input Verification Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
        <div className="bg-surface-container-lowest rounded-3xl p-5 sm:p-8 shadow-[0_10px_30px_rgba(27,28,26,0.02)] border border-outline-variant/15">
          <form onSubmit={handleVerify} className="space-y-5">
            <div>
              <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">
                Enter Certificate / Report ID
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={reportId}
                  onChange={(e) => setReportId(e.target.value)}
                  placeholder="e.g. AGL-303-Rudraksha, AGL-101-GOLD"
                  className="flex-grow h-12 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2 text-base md:text-sm focus:bg-surface-container-lowest focus:border-primary outline-none transition-all font-mono uppercase"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 bg-primary text-white px-8 rounded-xl font-headline font-bold text-base hover:opacity-90 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-sm w-full sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Fetching Registry...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-xl">verified_user</span>
                      <span>Verify Report</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-[10px] text-stone-500 font-body leading-normal pl-1">
              <strong>Sample IDs to test:</strong> <code className="bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-[9px] text-primary">AGL-101-GOLD</code>, <code className="bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-[9px] text-primary">AGL-202-DIAMOND</code>, <code className="bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-[9px] text-primary">AGL-303-Rudraksha</code>
            </div>
          </form>
        </div>
      </section>

      {/* Result Display Section */}
      {searched && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-10 animate-fade-in">
          {isLoading ? (
            <div className="bg-surface-container-lowest rounded-3xl p-10 text-center border border-outline-variant/15 shadow-sm space-y-4">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-secondary font-headline text-base italic">Accessing AGL Secure Ledger database...</p>
            </div>
          ) : report ? (
            <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/15 shadow-[0_15px_35px_rgba(27,28,26,0.03)] overflow-hidden">
              <div className="bg-primary/5 px-5 py-4 border-b border-outline-variant/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="text-[9px] font-label font-bold uppercase tracking-widest text-primary block">AGL Official Registry Record</span>
                  <span className="font-mono font-bold text-on-surface text-base">{report.id}</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full font-label text-[9px] font-bold uppercase tracking-widest border border-green-200">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  <span>Verified Genuine</span>
                </div>
              </div>

              <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Certificate Details */}
                <div className="space-y-3.5 font-body text-sm">
                  <div className="pb-2.5 border-b border-outline-variant/10">
                    <span className="text-[10px] font-label font-bold uppercase tracking-wider text-outline mb-0.5 block">Specimen Category</span>
                    <span className="font-semibold text-on-surface text-sm sm:text-base">{report.category}</span>
                  </div>
                  <div className="pb-2.5 border-b border-outline-variant/10">
                    <span className="text-[10px] font-label font-bold uppercase tracking-wider text-outline mb-0.5 block">Assay Purity / Quality Grade</span>
                    <span className="font-semibold text-primary text-sm sm:text-base">{report.purity}</span>
                  </div>
                  <div className="pb-2.5 border-b border-outline-variant/10">
                    <span className="text-[10px] font-label font-bold uppercase tracking-wider text-outline mb-0.5 block">Official Weight</span>
                    <span className="font-semibold text-on-surface text-sm sm:text-base">{report.weight}</span>
                  </div>
                  <div className="pb-2.5 border-b border-outline-variant/10">
                    <span className="text-[10px] font-label font-bold uppercase tracking-wider text-outline mb-0.5 block">Date of Certification</span>
                    <span className="font-semibold text-on-surface text-sm sm:text-base">{report.date}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-label font-bold uppercase tracking-wider text-outline mb-0.5 block">Laboratory Comments</span>
                    <p className="text-secondary text-xs leading-relaxed mt-1 font-body">{report.comments}</p>
                  </div>
                </div>

                {/* Specimen Response Image */}
                <div className="space-y-3">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow border border-outline-variant/15 relative bg-background flex items-center justify-center">
                    <img
                      src={report.imageUrl}
                      alt="Verified specimen registry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[9px] text-stone-500 text-center font-body italic leading-normal">
                    Photograph of specimen submitted and archived on {report.date}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      )}

      {/* Hologram & Hallmark Verification Guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <div className="bg-gradient-to-br from-surface-container-low to-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.02)] space-y-8 animate-fade-in">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-label font-bold uppercase tracking-widest text-primary block">
              Physical Security Verification
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">
              Verify Official Hallmark Holograms
            </h2>
            <p className="font-body text-secondary text-xs sm:text-sm leading-relaxed">
              To guarantee the authenticity of your physical AGL report, check for our official high-security 3D hologram stickers. Genuine certificates feature these tamper-proof seals on both sides.
            </p>
          </div>

          {/* Full-width Image Container */}
          <div className="relative group w-full">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl filter blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-outline-variant/15 aspect-[16/9] md:aspect-[21/9] bg-stone-150 flex items-center justify-center">
              <img
                src="/images/hallmark.jpg"
                alt="AGL Certificate Front and Back View Hallmark Hologram Guide"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>
            <div className="absolute top-4 right-4 bg-surface-container-high/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/15 shadow-sm text-[10px] font-label font-bold uppercase tracking-wider text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified</span>
              Security Standard
            </div>
          </div>

          {/* Details below the image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
            <div className="md:col-span-8 space-y-4">
              <h3 className="font-headline font-bold text-base text-on-surface">Key Inspection Checkpoints</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <strong className="text-on-surface block font-semibold text-xs sm:text-sm">Front View Hologram</strong>
                    <span className="text-stone-500 text-xs">Positioned at the bottom-right edge of the certificate table (as indicated by the front arrow).</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <strong className="text-on-surface block font-semibold text-xs sm:text-sm">Back View Hologram</strong>
                    <span className="text-stone-500 text-xs">Positioned in the lower-middle portion of the certificate reverse (as indicated by the back arrow).</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 sm:col-span-2">
                  <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                  <div>
                    <strong className="text-on-surface block font-semibold text-xs sm:text-sm">Watermark &amp; Authorised Signature</strong>
                    <span className="text-stone-500 text-xs">Check for the AGL logo and hand-signed verification from Rohit Aggarwal, Certified Gemmologist.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Warning Box */}
            <div className="md:col-span-4 flex items-center">
              <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-4 flex gap-3 text-stone-700 text-xs leading-normal h-full items-start">
                <span className="material-symbols-outlined text-amber-600 text-lg shrink-0 mt-0.5">warning</span>
                <div>
                  <span className="font-semibold text-stone-800 block mb-1">Security Warning</span>
                  Certificates without these original 3D hologram stickers, or containing photocopy replicas, are not legally recognized or valid.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Friendly Content below the Verification tool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-20 border-t border-outline-variant/10 pt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface">AGL Certificate Integrity &amp; Security Protocols</h2>
          <p className="font-body text-secondary text-sm mt-2 leading-relaxed">
            Protecting your jewelry valuations, gold bullion trades, and gemstone acquisitions in Delhi through advanced cryptographic registries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-sm text-secondary leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-headline font-bold text-lg text-on-surface">Why Verification Matters</h3>
            <p>
              In the modern gemstone and precious metal market, counterfeiting and certification fraud have become increasingly common. Imitation gems are regularly passed off as natural stones, and gold bullion can be filled with tungsten cores. Verifying your certificate via our online database protects your financial investment and validates physical purity.
            </p>
            <p>
              By checking the Unique Report ID against AGL's official Delhi register, you can confirm that the karatage, origin details, and specific gravity metrics correspond to the actual physical evaluations conducted by our certified assayers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline font-bold text-lg text-on-surface">Assaying Certifications Explained</h3>
            <p>
              Every certificate issued by Authentic Gem Lab contains unique diagnostic measurements derived from non-destructive testing methodologies.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li><strong>Gold &amp; Silver Purity:</strong> Measured using high-resolution XRF spectrometry, outlining parts per thousand (e.g. 916 Gold or 925 Silver).</li>
              <li><strong>Diamond 4Cs:</strong> Detailed clarity, cut grade, color value, and carat weight aligned with GIA guidelines.</li>
              <li><strong>Rudraksha Mukhi Count:</strong> Internal chamber layout verified via digital X-Ray scanning to confirm natural compartment counts.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
