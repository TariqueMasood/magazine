import Hero from "@/components/hero/hero";
import styles from "./page.module.css";
import AboutMagazine from "@/components/about-magazine/about-magazine";

export default function Home() {
   return (
    <main className={styles.main}>
      <Hero />
      <AboutMagazine />
    </main>
  );
}
