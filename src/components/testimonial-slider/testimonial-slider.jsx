import { Container } from "react-bootstrap";
import styles from "./testimonial.module.css";
import TestimonialCard from "../testimonial-card/testimonial-card";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";

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
        <SectionHeader
          title="TESTIMONIAL"
          subTitle="What our readers say."
          desc="Hear from Those Who Read It."
        />
        <SectionBorder />
        <TestimonialCard />
      </Container>
    </div>
  );
};

export default TestimonialSlider;
