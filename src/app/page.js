import Hero from "@/components/hero/hero";
import AboutMagazine from "@/components/about-magazine/about-magazine";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import TestimonialSlider from "@/components/testimonial-slider/testimonial-slider";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import TextualInterview from "@/components/textual-interview/textual-interview";

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
    </main>
  );
};

export default Home;
