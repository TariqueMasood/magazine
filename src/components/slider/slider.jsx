"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MgSlider(props) {
  return <Slider {...props.settings}>{props.children}</Slider>;
}
