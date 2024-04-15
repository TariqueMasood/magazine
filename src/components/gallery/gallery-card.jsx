"use client";

import Image from "next/image";
import styles from "./gallery-card.module.css";
import { useEffect } from "react";

const GalleryCard = (props) => {
  const { id, thumbImage, pdf, frontBack } = props.data;

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
        <div className={styles.bookCover}>
          <Image
            src={frontBack !== null ? frontBack : thumbImage}
            alt="gallery"
            className={styles.galleryImg}
            width={300}
            height={390}
          />
        </div>
        <div className={styles.bookInside}></div>

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

export default GalleryCard;
