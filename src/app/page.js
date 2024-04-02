import Hero from "@/components/hero/hero";
import styles from "./page.module.css";
import AboutMagazine from "@/components/about-magazine/about-magazine";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import TestimonialSlider from "@/components/testimonial-slider/testimonial-slider";
import TeamSlider from "@/components/team-slider/team-slider";
import GallerySlider from "@/components/gallery-slider/gallery-slider";
import NewsLetter from "@/components/news-letter/news-letter";

export async function getData() {
  const res = await fetch("https://api.projectleadersmagazine.com:8000/api/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getSingleData = async (id) => {
  const data = await getData();
  const singleBlog = data.results.find((data) => data.id === parseInt(id));
  return singleBlog;
};

const Home = async () => {
  return (
    <main className={styles.main}>
      <Hero />
      <SpotLightSlider />
      <AboutMagazine />
      <TestimonialSlider />
      <TeamSlider />
      <GallerySlider />
      <NewsLetter />
    </main>
  );
};

export default Home;
