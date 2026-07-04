import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://authenticgemlab.com"),
  title: "AGL Authentic Gem Lab | Certified Gem, Diamond & Metal Testing",
  description: "Authentic Gem Lab (AGL) in Delhi provides certified, ISO-accredited testing for Gold, Silver, Gemstones, Rudraksha, and Diamonds using state-of-the-art XRF spectrometry, X-ray scanning, and 4C grading.",
  keywords: "Authentic Gem Lab, AGL, Gold testing Delhi, Silver testing, Gemstone testing, Rudraksha certification, Diamond grading, XRF analysis, Rohini Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300..400,0..1,0&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body">
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
