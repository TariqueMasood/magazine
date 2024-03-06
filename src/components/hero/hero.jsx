import styles from "./hero.module.css";
import { Container } from "react-bootstrap";
import TrendingSlider from "../trending-slider/trending-slider";
import HeroMagazine from "../hero-magazine/hero-magazine";
import HeroSidebar from "../hero-sidebar/hero-sidebar";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.heroContentWrapper}>
          <TrendingSlider />
          <HeroMagazine />
          <HeroSidebar />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
