import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IonicProvider from "./components/IonicProvider";
import BottomNavigation from "./components/BottomNavigation";
import AppGate from "./components/AppGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://authenticgemlab.com"),
  title: "AGL Authentic Gem Lab | Certified Gem, Diamond & Metal Testing",
  description: "Authentic Gem Lab (AGL) in Delhi provides certified, ISO-accredited testing for Gold, Silver, Gemstones, Rudraksha, and Diamonds using state-of-the-art XRF spectrometry, X-ray scanning, and 4C grading.",
  keywords: "Authentic Gem Lab, AGL, Gold testing Delhi, Silver testing, Gemstone testing, Rudraksha certification, Diamond grading, XRF analysis, Rohini Delhi",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body">
        <IonicProvider>
          <AppGate>
            <Header />
            <main className="flex-grow px-4 md:px-0 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] md:pt-20 pb-[calc(60px+env(safe-area-inset-bottom,0px))] md:pb-0">{children}</main>
            <Footer />
            <BottomNavigation />
          </AppGate>
        </IonicProvider>
      </body>
    </html>
  );
}

