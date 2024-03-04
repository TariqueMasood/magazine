"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./slider.module.css";
import { Container } from "react-bootstrap";

export default function MgSlider(props) {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };
  return (
    <div className={styles.wrapper}>
      <Container>
        <Slider {...props.settings}>{props.children}</Slider>
      </Container>
    </div>
  );
}
