import { Container } from "react-bootstrap";
import styles from "./gallery-slider.module.css";
import GalleryCard from "../gallery/gallery-card";

const GallerySlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <GalleryCard />
      </Container>
    </div>
  );
};

export default GallerySlider;
