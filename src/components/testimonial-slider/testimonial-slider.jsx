import { Container } from "react-bootstrap";
import styles from "./testimonial.module.css";
import TestimonialCard from "../testimonial-card/testimonial-card";

const TestimonialSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.sliderWrapper}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSlider;
