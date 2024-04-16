import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../section-title/section-title";
import styles from "./recent-blog.module.css";
import Image from "next/image";
import cardImg1 from "../../../public/images/recent-blog-img1.png";
import cardImg2 from "../../../public/images/recent-blog-img2.png";
import shareIcon from "../../../public/images/share-icon.png";

const RecentCard = () => {
  return (
    <div>
      <div className={styles.cardImg}>
        <Image
          src={cardImg1}
          alt="card"
          width={350}
          height={100}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardName}>
          <div className={styles.category}>Diseases & Conditions</div>
          <div className={styles.shareIcon}>
            <Image src={shareIcon} alt="icon" />
          </div>
        </div>
        <h4 className={styles.cardTitle}>
          Know your Anesthesiologist, The Doctor Behind Your...
        </h4>
        <p className={styles.cardDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          bibendum pellentesque rutrum. Vestibulum at tellus ultrices,
          sollicitudin arcu tempus, condimentum libero. Vestibulum non purus
          quam. Nam ut lacus magna.
        </p>
        {/* <p className={styles.cardDate}>19-Sep-2021</p> */}
      </div>
    </div>
  );
};

const RecentCard2 = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card2Image}>
        <Image
          src={cardImg1}
          alt="card"
          width={350}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={styles.recentBlogContent}>
        <div className={styles.cardName}>
          <div className={styles.category}>Diseases & Conditions</div>
          <div className={styles.shareIcon}>
            <Image src={shareIcon} alt="icon" />
          </div>
        </div>
        <h4 className={styles.cardTitle}>
          Consider day care surgery as default for all elective...
        </h4>
        <p className={styles.cardDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          bibendum pellentesque rutrum. Vestibulum at tellus ultrices,
          sollicitudin arcu tempus, condimentum libero. Vestibulum non purus
          quam. Nam ut lacus magna.
        </p>
        {/* <p className={styles.cardDate}>24-Mar-2022</p> */}
      </div>
    </div>
  );
};

const RecentBlogCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className="pb-3">
        <SectionTitle title="RECENT BLOGS" />
      </div>
      <Row>
        <Col sm={12} md={12} lg={6}>
          <RecentCard />
        </Col>
        <Col sm={12} md={12} lg={6}>
          <div>
            <RecentCard2 />
          </div>
          <div className={styles.recentBlogDivider}></div>
          <div>
            <RecentCard2 />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const RecentBlog = () => {
  return (
    <div>
      <Container>
        <RecentBlogCard />
      </Container>
    </div>
  );
};

export default RecentBlog;
