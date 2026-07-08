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
    { name: "Rudraksha", href: "/testing/rudraksha" },
    { name: "Diamond", href: "/testing/diamond" },
    { name: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur shadow-[0_10px_30px_rgba(27,28,26,0.03)] border-b border-outline-variant/10 pt-[env(safe-area-inset-top,0px)]">
      <div className="flex justify-center items-center px-4 py-3.5 max-w-7xl mx-auto h-14 md:h-18">
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary font-headline whitespace-nowrap text-center">
          AGL Authentic Gem Lab
        </Link>
      </div>
    </header>
  );
}
