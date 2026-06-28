"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Gold", href: "/testing/gold" },
    { name: "Silver", href: "/testing/silver" },
    { name: "Gemstones", href: "/testing/gemstones" },
    { name: "Rudraksh", href: "/testing/rudraksh" },
    { name: "Diamond", href: "/testing/diamond" },
    { name: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(27,28,26,0.05)] border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-primary font-headline whitespace-nowrap">
          Authentic Gem Lab
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-headline text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 pb-1 ${
                isActive(link.href)
                  ? "text-primary border-b-2 border-primary-container font-semibold"
                  : "text-secondary hover:text-primary hover:opacity-85"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Buttons / Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/verify"
            className="hidden lg:inline-flex items-center gap-2 text-primary hover:opacity-80 transition-all text-sm font-label uppercase tracking-widest font-semibold"
          >
            <span className="material-symbols-outlined text-xl">verified_user</span>
            <span>Verify Report</span>
          </Link>
          <Link
            href="/about#contact"
            className="bg-primary-container text-on-primary-container px-3 sm:px-5 py-2 rounded-full font-label text-[9px] sm:text-[10px] uppercase tracking-widest font-bold hover:opacity-95 active:scale-95 transition-all shadow-[0_4px_12px_rgba(212,175,55,0.2)] border-t border-white/30"
          >
            Book Analysis
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-outline-variant/10 px-6 py-6 space-y-4 animate-fade-in absolute w-full left-0 glass-effect">
          <nav className="flex flex-col gap-4 font-headline text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`pb-1 ${
                  isActive(link.href)
                    ? "text-primary border-l-2 border-primary-container pl-3 font-semibold"
                    : "text-secondary pl-3 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/verify"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 pl-3 text-primary text-sm font-label uppercase tracking-widest font-semibold pt-2"
            >
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <span>Verify Report</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
