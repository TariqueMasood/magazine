import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("@/components/pdf/pdf"), {
  ssr: false,
});

const PdfPage = () => {
  return (
    <>
      <div>
        {/* <iframe
        //   src="https://www.google.com/"
        src="http://api.projectleadersmagazine.com:8000/pdfs/view/7/"
        width="100%"
        height="500px"
        title="google"
      ></iframe> */}

        <h1>PDF will render here...</h1>
        <Pdf />
      </div>
    </>
  );
};

export default PdfPage;
