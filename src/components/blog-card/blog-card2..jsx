const { default: Image } = require("next/image");
const { Col, Badge } = require("react-bootstrap");
import cardImg1 from "../../../public/images/technology-blog-img1.png";
import styles from "./blog-card.module.css";

const BlogCard = (props) => {
  const { title, content, publishDate, author, source } = props;
  return (
    <Col lg={4} md={6} sm={6}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <Image src={cardImg1} alt="card" />
        </div>
        <div className={styles.writerName}>
          <span>Child & Teen Health</span>
          <span>{!author ? "Unknow" : author}</span>
        </div>
        <h4 className={styles.cardTitle}>{title}...</h4>
        <p className={styles.cardConten}>{content}...</p>
        <div className={styles.date}>{publishDate}</div>
        <div className={styles.badge}>
          <Badge bg="info">{source}</Badge>
        </div>
      </div>
      <div className={styles.cardBorder}></div>
    </Col>
  );
};

export default BlogCard;
