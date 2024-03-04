import Image from "next/image";
import styles from "./gallery-card.module.css";
import galleryImg1 from "../../../public/images/gallery-img1.png";
import galleryImg2 from "../../../public/images/gallery-img2.png";

const GalleryCard = () => {
  return (
    <div className={styles.card}>
      <Image src={galleryImg1} alt="card" />
      <Image src={galleryImg2} alt="card" />
    </div>
  );
};

export default GalleryCard;
