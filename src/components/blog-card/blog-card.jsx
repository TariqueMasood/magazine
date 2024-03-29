import Image from "next/image";
import blogImage from "../../../public/images/spotlight-img-3.png";
import calendarIcon from "../../../public/images/calendar-icon.png";
import fileIcon from "../../../public/images/file-icon.png";
import styles from "./blog-card.module.css";
import Link from "next/link";

const BlogCard = (props) => {
  const { id, title, subtitle, image, content, published_date } = props.data;

  function createMarkup(markup) {
    return { __html: markup.slice(0, 100).concat("...") };
  }

  return (
    <Link href={`/blogs/${id}`} className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image
            src={image !== null ? image : blogImage}
            alt="card"
            className={styles.blogImage}
            width={300}
            height={250}
          />
          <div className={styles.badge}>AI & Machine Learning</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.info}>
            <div className={styles.date}>
              <Image src={calendarIcon} alt="calendar" />
              <span>{new Date(published_date).toLocaleDateString()}</span>
            </div>
            <div className={styles.file}>
              <Image src={fileIcon} alt="file" />
              <span>20</span>
            </div>
          </div>
          <h4>{title}...</h4>
          {/* <p className={styles.cardConten}>{subtitle}...</p> */}
          <div
            className={styles.cardContent}
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
