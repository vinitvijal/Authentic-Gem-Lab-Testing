"use client";

import React, { useState, useEffect } from "react";
import { Capacitor } from "@capacitor/core";

export default function AppGate({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isOnboarded, setIsOnboarded] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  // UI UX States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Monitor Network Connection Status
  useEffect(() => {
    setIsMounted(true);
    
    // Read onboarding status
    const onboarded = localStorage.getItem("agl_onboarded") === "true";
    setIsOnboarded(onboarded);

    if (typeof window === "undefined") return;

    // Check initial status
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Retrieve Device Specifications for Backend Analytics
  const getDeviceInfo = () => {
    if (typeof window === "undefined") return {};
    return {
      platform: Capacitor.getPlatform(), // 'ios', 'android', or 'web'
      isNative: Capacitor.isNativePlatform(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  };

  // Handle Onboarding Submission
  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const deviceInfo = getDeviceInfo();
      const res = await fetch("https://agl-admin.authenticgemlab.workers.dev/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          deviceInfo,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("agl_onboarded", "true");
        localStorage.setItem("agl_user_id", data.id || "");
        localStorage.setItem("agl_user_profile", JSON.stringify({ name, phone, email }));
        setIsOnboarded(true);
      } else {
        setErrorMsg(data.error || data.message || "Sign-in failed. Please check your details.");
      }
    } catch (err) {
      console.error("Sign-in Error:", err);
      setErrorMsg("Unable to connect to AGL servers. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Manual Connection Retry
  const handleRetryConnection = () => {
    setIsRetrying(true);
    setTimeout(() => {
      const online = navigator.onLine;
      setIsOnline(online);
      setIsRetrying(false);
    }, 800);
  };

  // Prevent flash during initial hydration/mounting
  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 1. OFFLINE OVERLAY
  if (!isOnline) {
    return (
      <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6 text-center animate-fade-in">
        {/* Subtle Decorative Pattern */}
        <div className="absolute inset-0 alchemical-mandala pointer-events-none" />

        <div className="max-w-md w-full bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 flex flex-col items-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-amber-600 text-3xl">wifi_off</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-headline text-2xl font-bold text-on-surface">
              Connection Lost
            </h1>
            <p className="font-body text-secondary text-sm leading-relaxed">
              Authentic Gem Lab requires an active internet connection to access our secure registry ledger and verify reports. Please connect to the internet and try again.
            </p>
          </div>

          <button
            onClick={handleRetryConnection}
            disabled={isRetrying}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-headline font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-75"
          >
            {isRetrying ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Testing Connection...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">refresh</span>
                <span>Retry Connection</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // 2. ONBOARDING OVERLAY
  if (!isOnboarded) {
    return (
      <div className="fixed inset-0 z-[9998] bg-background overflow-y-auto no-scrollbar flex items-center justify-center p-4 sm:p-6 animate-fade-in">
        {/* Decorative background vectors */}
        <div className="absolute inset-0 alchemical-mandala pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/5 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

        <div className="max-w-md w-full bg-surface-container-lowest border border-outline-variant/15 rounded-[32px] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(115,92,0,0.08)] relative z-10 space-y-8 my-auto">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
            </div>
            <div className="space-y-1">
              <h1 className="font-headline text-2xl font-bold text-on-surface tracking-tight">
                Authentic Gem Lab
              </h1>
              <p className="font-body text-secondary text-xs sm:text-sm">
                Create your verification profile to access the official Delhi assay registry.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleOnboardSubmit} className="space-y-5">
            {errorMsg && (
              <div className="bg-red-50 border border-red-200/50 rounded-xl p-3.5 flex gap-2.5 items-start text-red-800 text-xs animate-fade-in">
                <span className="material-symbols-outlined text-lg shrink-0 mt-0.5">error</span>
                <span className="font-body leading-normal">{errorMsg}</span>
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullname" className="block text-stone-700 font-semibold font-body text-xs ml-1">
                Full Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-lg">person</span>
                <input
                  type="text"
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-surface-container-low border border-transparent rounded-xl pl-11 pr-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all font-body text-sm text-on-surface"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-stone-700 font-semibold font-body text-xs ml-1">
                Phone Number
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-lg">phone</span>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full bg-surface-container-low border border-transparent rounded-xl pl-11 pr-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all font-body text-sm text-on-surface"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-stone-700 font-semibold font-body text-xs ml-1">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-lg">mail</span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul@example.com"
                  className="w-full bg-surface-container-low border border-transparent rounded-xl pl-11 pr-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all font-body text-sm text-on-surface"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3.5 rounded-xl font-headline font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-75 mt-6"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Registering Profile...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">key</span>
                  <span>Complete Registry Sign-In</span>
                </>
              )}
            </button>
          </form>

          {/* Verification standard footer text */}
          <div className="flex justify-center items-center gap-1.5 text-[10px] text-stone-400 font-body uppercase tracking-wider text-center">
            <span className="material-symbols-outlined text-xs">shield</span>
            <span>256-Bit Cryptographic Security Standards</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. MAIN APPLICATION
  return <>{children}</>;
}
