import { Container } from "react-bootstrap";
import styles from "./testimonial.module.css";
import TestimonialCard from "../testimonial-card/testimonial-card";
import SectionTitle from "../section-title/section-title";

const TestimonialSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle />
        <TestimonialCard />
      </Container>
    </div>
  );
};

export default TestimonialSlider;
