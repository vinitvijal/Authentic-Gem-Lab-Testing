"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  name: string;
  icon: string;
  href: string;
  isAction?: boolean;
}

export default function BottomNavigation() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet on route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  const tabs: TabItem[] = [
    { name: "Home", icon: "home", href: "/" },
    { name: "Verify", icon: "qr_code", href: "/verify" },
    { name: "Services", icon: "grid_view", href: "#", isAction: true },
    { name: "About", icon: "info", href: "/about" },
  ];

  const isTabActive = (tab: TabItem) => {
    if (tab.isAction) {
      return pathname.startsWith("/testing") || isSheetOpen;
    }
    if (tab.href === "/") {
      return pathname === "/";
    }
    return pathname === tab.href;
  };

  const services = [
    { name: "Gold Assaying", icon: "science", desc: "Fire assay & spectroscopic purity verification", href: "/testing/gold" },
    { name: "Silver Assaying", icon: "blur_on", desc: "Sterling silver composition titrations", href: "/testing/silver" },
    { name: "Gemstones", icon: "stars", desc: "Natural origin & astrological suitability", href: "/testing/gemstones" },
    { name: "Rudraksha", icon: "wb_sunny", desc: "Botanical X-Ray Mukhi radiography", href: "/testing/rudraksha" },
    { name: "Diamond Grading", icon: "diamond", desc: "4C reports & synthetic CVD detection", href: "/testing/diamond" },
  ];

  return (
    <>
      {/* Bottom Nav Bar Container */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[45] bg-background/95 backdrop-blur border-t border-outline-variant/15 shadow-[0_-8px_24px_rgba(27,28,26,0.04)] pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {tabs.map((tab, idx) => {
            const active = isTabActive(tab);
            const content = (
              <div className="flex flex-col items-center justify-center w-full h-full py-2">
                <div
                  className={`flex items-center justify-center px-5 py-1.5 rounded-full transition-all duration-300 ${
                    active
                      ? "bg-primary-container/15 text-primary scale-102"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl select-none font-light">
                    {tab.icon}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-label uppercase tracking-widest mt-1 font-bold ${
                    active ? "text-primary" : "text-secondary"
                  }`}
                >
                  {tab.name}
                </span>
              </div>
            );

            if (tab.isAction) {
              return (
                <button
                  key={idx}
                  onClick={() => setIsSheetOpen(!isSheetOpen)}
                  className="flex-1 h-full outline-none focus:outline-none cursor-pointer"
                  aria-label="Toggle services menu"
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={idx}
                href={tab.href}
                className="flex-1 h-full flex items-center justify-center"
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Services Slide-up Bottom Sheet */}
      {isSheetOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-black/45 backdrop-blur-xs transition-opacity animate-fade-in"
            onClick={() => setIsSheetOpen(false)}
          ></div>

          {/* Bottom Sheet Card */}
          <div className="relative w-full max-h-[85vh] bg-background border-t border-outline-variant/20 rounded-t-3xl shadow-[0_-15px_30px_rgba(27,28,26,0.1)] z-10 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] px-6 pt-4 animate-slide-up flex flex-col">
            {/* Sheet Handle Indicator */}
            <div className="w-12 h-1 bg-outline-variant/40 rounded-full mx-auto mb-6 shrink-0"></div>

            {/* Header */}
            <div className="mb-4 shrink-0 flex justify-between items-center">
              <div>
                <h3 className="font-headline text-lg font-bold text-on-surface">
                  Laboratory Assaying Services
                </h3>
                <p className="font-body text-xs text-secondary mt-0.5">
                  Select a category for detailed testing standards
                </p>
              </div>
              <button
                onClick={() => setIsSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-secondary hover:text-primary outline-none"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Services List */}
            <div className="space-y-3.5 overflow-y-auto no-scrollbar py-2">
              {services.map((item, idx) => {
                const isActivePath = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className={`flex items-center gap-4 p-3.5 rounded-2xl border transition-all duration-200 active:scale-99 ${
                      isActivePath
                        ? "bg-primary-container/10 border-primary-container/45 shadow-sm"
                        : "bg-surface-container-lowest border-outline-variant/10 hover:border-primary-container/20 shadow-[0_2px_8px_rgba(27,28,26,0.01)]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActivePath
                          ? "bg-primary text-white"
                          : "bg-surface-container text-primary"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4
                        className={`text-sm font-headline font-bold leading-none ${
                          isActivePath ? "text-primary" : "text-on-surface"
                        }`}
                      >
                        {item.name}
                      </h4>
                      <p className="text-secondary text-[11px] mt-1 font-body leading-tight truncate">
                        {item.desc}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant text-sm shrink-0">
                      chevron_right
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
