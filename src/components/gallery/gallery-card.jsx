import Image from "next/image";
import styles from "./gallery-card.module.css";
import galleryImg3 from "../../../public/images/gallery-img-3.png";

const GalleryCard = () => {
  return (
    <div className={styles.card}>
      <Image src={galleryImg3} alt="card" className={styles.galleryImg} />
    </div>
  );
};

export default GalleryCard;
