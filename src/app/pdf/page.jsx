import dynamic from "next/dynamic";
const Pdf = dynamic(() => import("@/components/pdf/pdf"), {
  ssr: false,
});

const PdfPage = () => {
  return (
    <div>
      <h1>PDF will render here...</h1>
      <Pdf />
    </div>
  );
};

export default PdfPage;
