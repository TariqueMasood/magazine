import MagazineCard from "../magazine-card/magazine-card";
import styles from "./magazine-list.module.css";

export async function getMagazines() {
  const res = await fetch(
    "https://api.projectleadersmagazine.com:8000/api/pdfs"
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

  if (!singleMagazine.ok) {
    throw new Error("Failed to fetch data");
  }

  return singleMagazine;
};

const MagazineList = async () => {
  const magazines = await getMagazines();

  return (
    <div className={styles.container}>
      {magazines.results.map((magazine) => (
        <MagazineCard key={magazine.id} data={magazine} />
      ))}
    </div>
  );
};

export default MagazineList;
