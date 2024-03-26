import styles from "../magazines.module.css";
import { notFound } from "next/navigation";
import { getSingleMagazine } from "@/components/magazine-list/magazine-list";

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
    <div className={styles.iFrameContainer}>
      <iframe src={magazine.pdf} title={magazine.name}></iframe>
    </div>
  );
};

export default SingleMagazine;
