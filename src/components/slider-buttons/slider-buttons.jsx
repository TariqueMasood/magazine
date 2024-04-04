"use client";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import styles from "./slider-buttons.module.css";
import { useRef } from "react";

const SliderButtons = () => {
  const arrowRef = useRef(null);

  return (
    <div className={styles.sliderButtons}>
      <button
        onClick={() => arrowRef.current.slickPrev()}
        ref={arrowRef}
        className={styles.chevronCss}
      >
        <GoChevronLeft />
      </button>
      <button
        onClick={() => arrowRef.current.slickNext()}
        ref={arrowRef}
        className={styles.chevronCss}
      >
        <GoChevronRight />
      </button>
    </div>
  );
};

export default SliderButtons;
