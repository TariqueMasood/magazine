import styles from "../magazines.module.css";
import { notFound } from "next/navigation";
import { getSingleMagazine } from "@/components/magazine-list/magazine-list";
import Pdf from "@/components/pdf/pdf";

export async function generateMetadata({ params }) {
  const { magazineId } = params;
  const magazine = await getSingleMagazine(magazineId);

  if (!magazine) {
    notFound();
  }

  return {
    title: magazine.name,
    desc: magazine.name,
  };
}

const SingleMagazine = async (props) => {
  const { magazineId } = props.params;
  const magazine = await getSingleMagazine(magazineId);

  return (
    <div className={styles.container}>
      <div className={styles.iFrameContainer}>
        <Pdf pdf={magazine.pdf} name={magazine.name} />
      </div>
      <div>
        <h2>Related content</h2>
      </div>
    </div>
  );
};

export default SingleMagazine;
