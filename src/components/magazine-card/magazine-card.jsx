import Image from "next/image";
import Link from "next/link";
import magazineImg from "../../../public/images/magazine-2.webp";
import styles from "./magazine-card.module.css";

const MagazineCard = (props) => {
  const { id, name, thumbImage, pdf, published_date } = props.data;

  return (
    <Link href={`magazines/${id}/`} className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={thumbImage !== null ? thumbImage : magazineImg}
          alt="magazine"
          className={styles.imgCss}
          width={300}
          height={390}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.dateCss}>
          <span>March</span>
          <span className={styles.yearCss}>2023</span>
        </div>
      </div>
    </Link>
  );
};

export default MagazineCard;
