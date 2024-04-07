"use client";
import { useEffect } from "react";

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
      });
    }

    window.createFlipBook = createFlipBook;

    window.createFlipBook("pdf-container", "./pdf-1.pdf");
  });

  return (
    <>
      <div id="pdf-container"></div>
      {/* <iframe
        src="http://api.projectleadersmagazine.com:8000/pdfs/view/7/"
        width="100%"
        height="500px"
        title="google"
      ></iframe> */}
    </>
  );
};

export default Pdf;
