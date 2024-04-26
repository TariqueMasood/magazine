import Image from "next/image";
import blogImage from "../../../public/images/spotlight-img-3.png";
import styles from "./blog-card.module.css";
import Link from "next/link";

const BlogCard = (props) => {
  const { id, title, subtitle, image, category, is_trending } = props?.data;

  const limitTitle = title.slice(0, 60);
  const limitSubTitle = subtitle.slice(0, 130);

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
          {is_trending && <div className={styles.badge}>Featured</div>}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.info}>
            <div className={styles.category}>{category.name}</div>
            <h4>{limitTitle.length >= 60 ? `${limitTitle}...` : limitTitle}</h4>
          </div>
          <p className={styles.cardContent}>
            {limitSubTitle.length >= 130
              ? `${limitSubTitle}...`
              : limitSubTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
