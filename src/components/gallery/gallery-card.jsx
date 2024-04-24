"use client";

import Image from "next/image";
import styles from "./gallery-card.module.css";
import { useEffect } from "react";
import formatDate from "@/utils/format-date";

const GalleryCard = (props) => {
  const { id, thumbImage, pdf, frontBack, published_date } = props.data;

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
            style={{ width: "100%", height: "100%" }}
            fill
          />
        </div>
        <div className={styles.bookInside}></div>
        <div className={styles.effect}></div>
        <div className={styles.light}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.dateCss}>
          <span className={styles.monthCss}>
            {formatDate(published_date.split("T")[0])[0]}{" "}
          </span>
          <span className={styles.yearCss}>
            {" "}
            {formatDate(published_date.split("T")[0])[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
