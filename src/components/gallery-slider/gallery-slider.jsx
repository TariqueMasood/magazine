import { Container } from "react-bootstrap";
import styles from "./gallery-slider.module.css";
import GalleryCard from "../gallery/gallery-card";
import MgSlider from "../slider/slider";

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.wrapper}>
      <Container>
        <MgSlider settings={settings}>
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </MgSlider>
      </Container>
    </div>
  );
};

export default GallerySlider;
