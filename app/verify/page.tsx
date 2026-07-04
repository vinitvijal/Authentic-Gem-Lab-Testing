import type { Metadata } from "next";
import VerifyClient from "./VerifyClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Verify Certification Reports Online | AGL",
  description: "Check the authenticity of AGL reports. Enter your Certificate or Report ID to instantly verify gold, silver, gemstone, and Rudraksha purity scans.",
  alternates: {
    canonical: "https://authenticgemlab.com/verify",
  },
  openGraph: {
    title: "Verify Certification Reports Online | AGL",
    description: "Check the authenticity of AGL reports. Enter your Certificate or Report ID to instantly verify gold, silver, gemstone, and Rudraksha purity scans.",
    url: "https://authenticgemlab.com/verify",
    siteName: "Authentic Gem Lab",
    type: "website",
    locale: "en_IN",
  },
};

export default function VerifyPage() {
  return <VerifyClient />;
}
