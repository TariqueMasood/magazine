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
        <Row>
          <Col sm={12} md={6} lg={3}>
            <TrendingSlider />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <HeroMagazine />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <HeroSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
