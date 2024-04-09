import Image from "next/image";
import blogImage from "../../../public/images/spotlight-img-3.png";
import calendarIcon from "../../../public/images/calendar-icon.png";
import styles from "./blog-card.module.css";
import Link from "next/link";

const BlogCard = (props) => {
  const { id, title, subtitle, image, published_date } = props?.data;

  return (
    <Link href={`/blogs/${id}`} className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src={image !== null ? image : blogImage}
            alt="card"
            className={styles.imgCss}
            width={300}
            height={250}
          />
          <div className={styles.badge}>AI & Machine Learning</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.info}>
            <div className={styles.date}>
              <Image src={calendarIcon} alt="calendar" />
              <span>{new Date(published_date).toGMTString()}</span>
            </div>
            {/* <div className={styles.file}>
              <Image src={fileIcon} alt="file" />
              <span>20</span>
            </div> */}
          </div>
          <h4>{title}...</h4>
          <p className={styles.cardContent}>{subtitle}...</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
