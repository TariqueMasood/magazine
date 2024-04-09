import Hero from "@/components/hero/hero";
import AboutMagazine from "@/components/about-magazine/about-magazine";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import TestimonialSlider from "@/components/testimonial-slider/testimonial-slider";
import NewsLetter from "@/components/news-letter/news-letter";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import TextualInterview from "@/components/textual-interview/textual-interview";
const GallerySlider = dynamic(() => import("@/components/gallery-slider/gallery-slider"), {
  ssr: false,
});

const MgLoader = dynamic(() => import("@/components/loader/loader"), {
  ssr: false,
});

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<MgLoader />}>
        <SpotLightSlider />
      </Suspense>
      <TextualInterview />
      <AboutMagazine />
      <TestimonialSlider />
      <GallerySlider />
      <NewsLetter />
    </main>
  );
};

export default Home;
