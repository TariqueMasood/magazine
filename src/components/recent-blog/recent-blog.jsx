import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../section-title/section-title";
import styles from "./recent-blog.module.css";
import Image from "next/image";
import cardImg1 from "../../../public/images/recent-blog-img1.png";
import cardImg2 from "../../../public/images/recent-blog-img2.png";
import cardImg3 from "../../../public/images/recent-blog-img3.png";

const RecentCard = () => {
  return (
    <div>
      <div className={styles.cardImg}>
        <Image src={cardImg1} alt="card" />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardName}>
          <span>Dr. Arun Puri</span>
          <span>Anaesthesia</span>
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
        <p className={styles.cardDate}>19-Sep-2021</p>
      </div>
    </div>
  );
};

const RecentCard2 = () => {
  return (
    <div className={styles.cardWrapper}>
      <Row>
        <Col lg={4}>
          <div className={styles.cardImage}>
            <Image src={cardImg2} alt="card" />
          </div>
        </Col>
        <Col lg={8}>
          <div className={styles.recentBlogContent}>
            <div className={styles.cardName}>
              <span>Dr. Manish Rai</span>
              <span>Anesthesia</span>
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
            <p className={styles.cardDate}>24-Mar-2022</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const RecentBlogCard = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="RECENT BLOGS" />
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
