"use client";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import Image from "next/image";
import cardImg1 from "../../../public/images/technology-blog-img1.png";

const TechnologyBlog = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="TECHNOLOGY BLOGS" />
        <p>
          Read the latest posts from experts at Knowmed Health Publishing
          covering a variety of health topics and perspectives on medical news.
        </p>
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Latest" title="Latest">
              <Row>
                <Col lg={4}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4>What is a tongue-tie? What parents need to know</h4>
                    <p>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4>What is a tongue-tie? What parents need to know</h4>
                    <p>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4>What is a tongue-tie? What parents need to know</h4>
                    <p>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="All" title="All">
              Tab content for All
            </Tab>
            <Tab eventKey="Child & Teen Health" title="Child & Teen Health">
              Tab content for Child & Teen Health
            </Tab>
            <Tab eventKey="Pain" title="Pain">
              Tab content for Pain
            </Tab>
            <Tab eventKey="Diseases & Conditions" title="Diseases & Conditions">
              Tab content for Diseases & Conditions
            </Tab>
            <Tab eventKey="Exercise & Fitness" title="Exercise & Fitness">
              Tab content for Exercise & Fitness
            </Tab>
            <Tab eventKey="Mind & Mood" title="Mind & Mood">
              Tab content for Mind & Mood
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyBlog;
