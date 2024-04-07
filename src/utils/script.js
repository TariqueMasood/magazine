import $ from "jquery";

$(function () {
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
});
