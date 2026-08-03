"use client";

import { useState } from "react";


interface Verification {
  success: Boolean,
  id?: string,
  imageUrl?: string,
  error?: string
}

export default function VerifyClient() {
  const [reportId, setReportId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<Verification | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportId.trim()) return;
    console.log(reportId)

    setIsLoading(true);
    setReport(null);
    setSearched(true);

    const res = await fetch("https://agl-admin.authenticgemlab.workers.dev" + "/api/verify/" + reportId)
    const data: Verification = await res.json();

    if (data.success && data.imageUrl) {
      setReport(data);
    } else {
      alert("Invalid Certificate ID")
    }
    setIsLoading(false);
    setSearched(true);

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
      <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 mt-12">
        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-sm border border-outline-variant/15">
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-stone-700 font-semibold mb-2 font-body text-sm">
                Enter Certificate / Report ID
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={reportId}
                  onChange={(e) => setReportId(e.target.value)}
                  placeholder="e.g. AGL-303-Rudraksha, AGL-101-GOLD"
                  className="flex-grow bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all font-mono uppercase text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-headline font-semibold text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shadow-sm"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Fetching Registry...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      <span>Verify Report</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 font-body leading-normal">
              <strong>Sample IDs to test:</strong> <code className="bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-[10px] text-primary">AGL-101-GOLD</code>, <code className="bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-[10px] text-primary">AGL-202-DIAMOND</code>, <code className="bg-surface-container-low px-1.5 py-0.5 rounded font-mono text-[10px] text-primary">AGL-303-Rudraksha</code>
            </div>
          </form>
        </div>
      </section>

      {/* Result Display Section */}
      {searched && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-12 animate-fade-in">
          {isLoading ? (
            <div className="bg-surface-container-lowest rounded-3xl p-12 text-center border border-outline-variant/15 shadow-sm space-y-4">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-secondary font-headline text-lg italic">Accessing AGL Secure Ledger database...</p>
            </div>
          ) : report ? (
            <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/15 shadow-[0_20px_40px_rgba(27,28,26,0.03)] overflow-hidden">
              <div className="bg-primary/5 px-6 py-4 border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[10px] font-label font-bold uppercase tracking-widest text-primary block">AGL Official Registry Record</span>
                  <span className="font-mono font-bold text-on-surface text-base uppercase">{report.id}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full font-label text-[10px] font-bold uppercase tracking-widest border border-green-200">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Verified Genuine</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 gap-8 items-center">

                {/* Specimen Response Image */}
                <div className="space-y-4 flex justify-center items-center">
                  <div className=" rounded-2xl aspect-auto overflow-hidden shadow border border-outline-variant/15 relative bg-background flex items-center justify-center">
                    <img
                      src={"https://agl-admin.authenticgemlab.workers.dev" + report.imageUrl}
                      alt="Verified specimen registry"
                      className="w-full h-full  object-cover"
                    />
                  </div>
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
