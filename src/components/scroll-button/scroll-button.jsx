"use client";

import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "./scroll-button.module.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or auto (default)
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={styles.button}
      style={{ display: visible ? "block" : "none" }}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollButton;
