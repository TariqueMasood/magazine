import { Container } from "react-bootstrap";
import styles from "./gallery-slider.module.css";
import GalleryCard from "../gallery/gallery-card";
import SectionHeader from "../section-header/section-header";

const GallerySlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionHeader
          subTitle="Huge premade layouts gallery"
          desc="Ready variety of layouts for blog posts and other pages."
        />
        <GalleryCard />
      </Container>
    </div>
  );
};

export default GallerySlider;
