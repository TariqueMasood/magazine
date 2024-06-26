import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import MgNavbar from "@/components/navbar/navbar";
import { montserrat } from "./fonts";
import Script from "next/script";
import NewsLetter from "@/components/news-letter/news-letter";
import dynamic from "next/dynamic";
import TopAds from "@/components/ads/top-ads";
import SectionAds from "@/components/ads/section-ads";

const GallerySlider = dynamic(
  () => import("@/components/gallery-slider/gallery-slider"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Project Leaders - Project Leaders Magazine",
  description: "Project Leaders Magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="../../build/js/flipbook.min.js"
          strategy="beforeInteractive"
        />
        <TopAds />
        <MgNavbar />
        <Header />
        {children}
        <SectionAds />
        <GallerySlider />
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
