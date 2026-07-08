import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-background/50">
      {/* Desktop Grid Footer */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-bold tracking-tighter text-primary font-headline">
            AGL Authentic Gem Lab
          </div>
          <p className="text-secondary font-body text-sm leading-relaxed max-w-sm">
            AGL Authentic Gem Lab is Delhi's premier laboratory providing ISO-certified testing for Gold, Silver, Gemstones, Rudraksha, and Diamonds. Under the guidance of Rohit Aggarwal, we ensure absolute scientific precision and trust.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-label text-xs uppercase tracking-[0.2em] font-bold">
            Laboratory Services
          </h5>
          <nav className="flex flex-col gap-2 font-label text-xs uppercase tracking-[0.1em]">
            <Link href="/testing/gold" className="text-secondary hover:text-primary transition-colors">
              Gold Purity Verification
            </Link>
            <Link href="/testing/silver" className="text-secondary hover:text-primary transition-colors">
              Silver Assay Testing
            </Link>
            <Link href="/testing/gemstones" className="text-secondary hover:text-primary transition-colors">
              Gemstones & Astrological Verification
            </Link>
            <Link href="/testing/rudraksha" className="text-secondary hover:text-primary transition-colors">
              Rudraksha X-Ray Scanning
            </Link>
            <Link href="/testing/diamond" className="text-secondary hover:text-primary transition-colors">
              Diamond 4C & Origin Grading
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-primary font-label text-xs uppercase tracking-[0.2em] font-bold">
            Connect & Support
          </h5>
          <p className="text-secondary text-sm leading-relaxed">
            <strong>Address:</strong> <Link href="https://maps.app.goo.gl/J3eB8YT3zQbjPfUc7" target="_blank">Shop No. 6, DDA Market, CSC-IV, Pocket C-8, Sector-8, Rohini, Delhi-85 (opp. Gurudwara) Near Mother Dairy, Madhuban Chowk</Link><br />
            <strong>Phone:</strong> 9643210025<br />
            <strong>Email:</strong> authenticgemlab@gmail.com
          </p>
          <nav className="flex flex-col gap-2 font-label text-xs uppercase tracking-[0.1em] pt-2">
            <Link href="/about" className="text-secondary hover:text-primary transition-colors">
              About Us & Credentials
            </Link>
            <Link href="/verify" className="text-secondary hover:text-primary transition-colors">
              Verify Report Online
            </Link>
            <Link href="/about#contact" className="text-secondary hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="pt-4 flex gap-4">
            <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
              mail
            </span>
            <Link href="https://maps.app.goo.gl/J3eB8YT3zQbjPfUc7" target="_blank">
              <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary transition-colors">
                location_on
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-only Compact Footer Info */}
      <div className="block md:hidden px-6 py-8 text-center space-y-4 font-body border-b border-outline-variant/10">
        <div className="text-lg font-bold tracking-tight text-primary font-headline">
          AGL Authentic Gem Lab
        </div>
        <p className="text-secondary text-xs leading-relaxed max-w-xs mx-auto">
          Delhi's premier ISO 9001:2015 certified laboratory for Gold assaying, gemstone authentication, and digital X-ray scans.
        </p>
        <div className="text-[11px] text-secondary space-y-1.5 pt-2">
          <p><strong>Owner / Director:</strong> Rohit Aggarwal</p>
          <p><strong>Direct Helpline:</strong> <a href="tel:9643210025" className="text-primary hover:underline font-semibold">9643210025</a></p>
          <p><strong>Address:</strong> Rohini Sector-8, Delhi - 110085 (opp. Gurudwara)</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 text-center">
        <p className="text-secondary font-label text-[9px] sm:text-[10px] uppercase tracking-[0.1em] leading-relaxed">
          © {new Date().getFullYear()} Authentic Gem Lab. All Rights Reserved.<br className="block sm:hidden" /> ISO 9001:2015 & GIA Standardized Guidelines.
        </p>
      </div>
    </footer>
  );
}
