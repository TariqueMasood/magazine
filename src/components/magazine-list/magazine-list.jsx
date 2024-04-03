import dynamic from "next/dynamic";
import styles from "./magazine-list.module.css";
import { fetchData } from "@/utils/api";

const MagazineCard = dynamic(() => import("../magazine-card/magazine-card"), {
  ssr: false,
});

export const getSingleMagazine = async (id) => {
  const magazines = await fetchData("pdfs");
  const singleMagazine = magazines.results.find(
    (magazine) => magazine.id === parseInt(id)
  );

  return singleMagazine;
};

const MagazineList = async () => {
  const magazines = await fetchData("pdfs");

  return (
    <div className={styles.container}>
      {magazines?.results?.map((magazine) => (
        <MagazineCard key={magazine.id} data={magazine} />
      ))}
    </div>
  );
};

export default MagazineList;
