"use client";

import Image from "next/image";
import styles from "./gallery-card.module.css";
import { useEffect } from "react";
import magazineImg from "../../../public/images/center-card-img1.png";

const GalleryCard = (props) => {
  const { id, name, thumbImage, pdf, published_date, frontBack } = props.data;

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
        // viewMode: "3d",
        // skin: "dark",
        // backgroundColor: "#3ab5fd",
        lightboxBackground: "#3e3e3e",
      });
    }

    window.createFlipBook = createFlipBook;

    window.createFlipBook(id, pdf);
  });
  return (
    <div className={styles.card} id={id}>
      <Image
        // src={thumbImage !== null ? thumbImage : magazineImg}
        src={frontBack !== null ? frontBack : thumbImage}
        width={300}
        height={390}
        alt="card"
        className={styles.galleryImg}
      />
    </div>
  );
};

export default GalleryCard;
