"use client";

import Image from "next/image";
import styles from "./hero-magazine-card.module.css";
import MgButton from "../button/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";

const HeroMagazineCard = (props) => {
  const { id, thumbImage, name, published_date, shortcontent, pdf } =
    props.data;

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
    <div className={styles.heroMagazine} id={id}>
      <div className={styles.heroMagazineImage}>
        <Image src={thumbImage} alt={name} width={340} height={500} />
      </div>
      <div className={styles.magazine}>
        <div>
          <div className={styles.magazineHeading}>
            <div className={styles.date}>
              {new Date(published_date).toDateString()}
            </div>
            <div className={styles.edition}>LATEST EDITION</div>
          </div>
          <p className={styles.magazineContent}>{shortcontent}</p>
        </div>
        <MgButton>
          Read Now <MdKeyboardArrowRight />
        </MgButton>
      </div>
    </div>
  );
};

export default HeroMagazineCard;
