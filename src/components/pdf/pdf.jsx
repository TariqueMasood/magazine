"use client";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import styles from "./pdf.module.css";
import "../../../public/build/js/flipbook.min.js";

const Pdf = (props) => {
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
      });
    }

    window.createFlipBook = createFlipBook;

    window.createFlipBook("pdf-container", "./pdf-1.pdf");
  });

  return (
    <div className={styles.wrapper}>
      <Container>
        <a id="pdf-container" className={styles.pdf}>
          {props.name}
        </a>
      </Container>
      {/* <div id="pdf-container" className={styles.pdf}></div> */}
    </div>
  );
};

export default Pdf;
