const PdfPage = () => {
  return (
    <div>
      <iframe
        //   src="https://www.google.com/"
        src="http://api.projectleadersmagazine.com:8000/pdfs/view/7/"
        width="100%"
        height="500px"
        title="google"
      ></iframe>
    </div>
  );
};

export default PdfPage;
