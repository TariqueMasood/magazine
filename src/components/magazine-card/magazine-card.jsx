"use client";

import Image from "next/image";
import magazineImg from "../../../public/images/center-card-img1.png";
import styles from "./magazine-card.module.css";
import { useEffect } from "react";
import "../../../public/build/js/flipbook.min.js";

const MagazineCard = (props) => {
  const { id, name, thumbImage, pdf, published_date } = props.data;

  useEffect(() => {
    function createFlipBook(containerId, pdfPath) {
      const container = document.getElementById(containerId);
      if (!container) {
        console.error(`Container element with ID '${containerId}' not found.`);
        return;
      }

      $(container).flipBook({
        pdfUrl: pdfPath,
        lightBox: true,
        lightboxBackground: "#3e3e3e",
      });
    }

    window.createFlipBook = createFlipBook;

    window.createFlipBook(id, pdf);
  });

  return (
    <div className={styles.cardContainer} id={id}>
      <div className={styles.imgContainer}>
        {/* Wrapping the Image component with the bookCover div */}
        <div className={styles.bookCover}>
          <Image
            src={thumbImage !== null ? thumbImage : magazineImg}
            alt="magazine"
            className={styles.imgCss}
            width={300}
            height={390}
          />
        </div>
        <div className={styles.bookInside}></div>
        {/* Rest of your content */}
        <div className={styles.effect}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.dateCss}>
          <span>April </span>
          <span className={styles.yearCss}> 2024</span>
        </div>
      </div>
    </div>
  );
};

export default MagazineCard;
