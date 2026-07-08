"use client";

import { useState } from "react";
import { Capacitor } from "@capacitor/core";

export default function IntakeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Gold (Bullion/Jewelry)");
  const [facility, setFacility] = useState("Rohini Main Lab (Delhi)");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageContent = `Category: ${category}\nFacility: ${facility}\n\nDetails:\n${details || "No additional comments"}`;

    try {
      const apiUrl = Capacitor.isNativePlatform()
        ? "https://authenticgemlab.com/api/contact"
        : "/api/contact";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: messageContent,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        // Reset Form
        setName("");
        setEmail("");
        setPhone("");
        setDetails("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5 font-body text-sm" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rohit Aggarwal"
            className="w-full h-12 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2 text-base md:text-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. name@example.com"
            className="w-full h-12 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2 text-base md:text-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 9871069003"
            className="w-full h-12 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2 text-base md:text-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">Specimen Category</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-12 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2 text-base md:text-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-all appearance-none cursor-pointer"
            >
              <option>Gold (Bullion/Jewelry)</option>
              <option>Silver (Plate/Coinage)</option>
              <option>Gemstone (Sapphire/Ruby/Emerald)</option>
              <option>Rudraksha Seed (Sacred Bead)</option>
              <option>Diamond (Natural/CVD)</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-xl">
              unfold_more
            </span>
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">Testing Facility</label>
          <div className="relative">
            <select
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              className="w-full h-12 bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-2 text-base md:text-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-all appearance-none cursor-pointer"
            >
              <option>Rohini Main Lab (Delhi)</option>
              <option>Pitampura Branch (Assaying)</option>
              <option>Karol Bagh Center (Diamond Grading)</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-xl">
              unfold_more
            </span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-label font-bold uppercase tracking-wider text-outline mb-1.5 pl-1">Additional Description / Comments</label>
        <textarea
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Detail caratage, seed origin, or required test types..."
          className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-base md:text-sm text-on-surface focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
        ></textarea>
      </div>

      <div className="text-center pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto min-h-12 px-10 py-3.5 bg-primary text-white rounded-xl font-headline font-bold text-base hover:shadow-lg active:scale-98 active:opacity-95 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center mx-auto gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Submitting Ledger Request...</span>
            </>
          ) : (
            <span>Submit Secure Intake Form</span>
          )}
        </button>
      </div>
    </form>
  );
}
