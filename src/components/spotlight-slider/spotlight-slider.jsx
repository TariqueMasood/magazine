import { Col, Container, Row } from "react-bootstrap";
import SpotLightCard from "../spotlight-card/spotlight-card";
import styles from "./spotlight-slider.module.css";

const SpotLightSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SpotLightCard />
      </Container>
    </div>
  );
};

export default SpotLightSlider;
