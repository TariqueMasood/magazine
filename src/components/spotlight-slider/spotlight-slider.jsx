import { Container } from "react-bootstrap";
import SpotLightCard from "../spotlight-card/spotlight-card";
import styles from "./spotlight-slider.module.css";
import MgSlider from "../slider/slider";

const SpotLightSlider = () => {
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
        <div className={styles.sliderWrapper}>
          <MgSlider settings={settings}>
            <SpotLightCard />
            <SpotLightCard />
            <SpotLightCard />
            <SpotLightCard />
          </MgSlider>
        </div>
      </Container>
    </div>
  );
};

export default SpotLightSlider;
