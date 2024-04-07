"use client";

import Image from "next/image";
import Link from "next/link";
import magazineImg from "../../../public/images/center-card-img1.png";
import styles from "./magazine-card.module.css";
import { useEffect } from "react";

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
    <Link
      //  href={`magazines/${id}/`}
      href="#"
      className={styles.cardContainer}
      id={id}
    >
      <div className={styles.imgContainer}>
        <Image
          src={thumbImage !== null ? thumbImage : magazineImg}
          alt="magazine"
          className={styles.imgCss}
          width={300}
          height={390}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.dateCss}>
          <span>April </span>
          <span className={styles.yearCss}> 2024</span>
        </div>
      </div>
    </Link>
  );
};

export default MagazineCard;
