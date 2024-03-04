import { Container } from "react-bootstrap";
import styles from "./testimonial.module.css";
import TestimonialCard from "../testimonial-card/testimonial-card";

const TestimonialSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <TestimonialCard />
      </Container>
    </div>
  );
};

export default TestimonialSlider;
