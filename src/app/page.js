import Hero from "@/components/hero/hero";
import AboutMagazine from "@/components/about-magazine/about-magazine";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import TestimonialSlider from "@/components/testimonial-slider/testimonial-slider";
import GallerySlider from "@/components/gallery-slider/gallery-slider";
import NewsLetter from "@/components/news-letter/news-letter";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { open_Sans, montserrat } from "./fonts";

const MgLoader = dynamic(() => import("@/components/loader/loader"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className={montserrat.className}>
      <Hero />
      <Suspense fallback={<MgLoader />}>
        <SpotLightSlider />
      </Suspense>
      <AboutMagazine />
      <TestimonialSlider />
      <GallerySlider />
      <NewsLetter />
    </main>
  );
};

export default Home;
