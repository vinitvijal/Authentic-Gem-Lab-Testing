"use client";

import { useState } from "react";

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
      const res = await fetch("/api/contact", {
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
    <form className="space-y-6 font-body text-sm" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-stone-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rohit Aggarwal"
            className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-stone-700 font-semibold mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. name@example.com"
            className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-stone-700 font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 9871069003"
            className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-stone-700 font-semibold mb-2">Specimen Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
          >
            <option>Gold (Bullion/Jewelry)</option>
            <option>Silver (Plate/Coinage)</option>
            <option>Colored Gemstone (Sapphire/Ruby/Emerald)</option>
            <option>Rudraksh Seed (Sacred Bead)</option>
            <option>Diamond (Natural/CVD)</option>
          </select>
        </div>
        <div>
          <label className="block text-stone-700 font-semibold mb-2">Testing Facility</label>
          <select
            value={facility}
            onChange={(e) => setFacility(e.target.value)}
            className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
          >
            <option>Rohini Main Lab (Delhi)</option>
            <option>Pitampura Branch (Assaying)</option>
            <option>Karol Bagh Center (Diamond Grading)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-stone-700 font-semibold mb-2">Additional Description / Comments</label>
        <textarea
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Detail caratage, seed origin, or required test types..."
          className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 focus:bg-surface-container-lowest focus:border-primary outline-none transition-all"
        ></textarea>
      </div>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white px-12 py-4 rounded-xl font-headline font-semibold text-lg hover:shadow-lg active:scale-95 transition-all cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Submitting Ledger Request..." : "Submit Secure Intake Form"}
        </button>
      </div>
    </form>
  );
}
