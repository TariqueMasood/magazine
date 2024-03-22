import Image from "next/image";
import blogImage from "../../../public/images/spotlight-img-3.png";
import styles from "./blog-card.module.css";
import { Col } from "react-bootstrap";

const BlogCard = (props) => {
  const { title, subtitle, content, published_date } = props.data;
  return (
    <Col lg={4} md={6} sm={6}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <Image src={blogImage} alt="card" />
        </div>
        <div className={styles.writerName}>
          <span>Child & Teen Health</span>
        </div>
        <h4 className={styles.cardTitle}>{title}...</h4>
        <p className={styles.cardConten}>{subtitle}...</p>
        <p className={styles.cardConten}>{content.slice(0, 150)}...</p>
        <div className={styles.date}>
          {new Date(published_date).toGMTString()}
        </div>
      </div>
      <div className={styles.cardBorder}></div>
    </Col>
  );
};

export default BlogCard;
