import Image from "next/image";
import cardImg1 from "../../../public/images/technology-blog-img1.png";
import styles from "./blog-card.module.css";
import { Col } from "react-bootstrap";

const BlogCard = (props) => {
  const { title, subtitle, content, published_date } = props.data;
  return (
    <Col lg={4} md={6} sm={6}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <Image src={cardImg1} alt="card" />
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
