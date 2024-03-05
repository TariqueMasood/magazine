import Image from "next/image";
import styles from "./gallery-card.module.css";

const GalleryCard = (props) => {
  return (
    <div className={styles.card}>
      <Image src={props.galleryImg} alt="card" className={styles.galleryImg} />
    </div>
  );
};

export default GalleryCard;
