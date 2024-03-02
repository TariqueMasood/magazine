"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./slider.module.css";
import { Container } from "react-bootstrap";

export default function MySlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div className={styles.slide}>
          <h3>1</h3>
        </div>
        <div className={styles.slide}>
          <h3>2</h3>
        </div>
        <div className={styles.slide}>
          <h3>3</h3>
        </div>
      </Slider>
    </Container>
  );
}
