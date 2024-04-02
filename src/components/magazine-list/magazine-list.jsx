import dynamic from "next/dynamic";
import styles from "./magazine-list.module.css";

const MagazineCard = dynamic(() => import("../magazine-card/magazine-card"), {
  ssr: false,
});

export async function getMagazines() {
  const res = await fetch(
    "http://api.projectleadersmagazine.com:8000/api/pdfs/"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getSingleMagazine = async (id) => {
  const magazines = await getMagazines();
  const singleMagazine = magazines.results.find(
    (magazine) => magazine.id === parseInt(id)
  );

  return singleMagazine;
};

const MagazineList = async () => {
  const magazines = await getMagazines();

  return (
    <div className={styles.container}>
      {magazines?.results?.map((magazine) => (
        <MagazineCard key={magazine.id} data={magazine} />
      ))}
    </div>
  );
};

export default MagazineList;
