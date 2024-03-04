import Hero from "@/components/hero/hero";
import styles from "./page.module.css";
import AboutMagazine from "@/components/about-magazine/about-magazine";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import TestimonialSlider from "@/components/testimonial-slider/testimonial-slider";
import TeamSlider from "@/components/team-slider/team-slider";

export default function Home() {
   return (
    <main className={styles.main}>
      <Hero />
      <AboutMagazine />
      <SpotLightSlider />
      <TestimonialSlider />
      <TeamSlider />
    </main>
  );
}
