import Image from "next/image";
import styles from "./hero.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import MgButton from "../button/button";
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
