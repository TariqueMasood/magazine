"use client";
import { CardTitle, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
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
            defaultActiveKey="All"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="All" title="All">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Latest" title="Latest">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Child & Teen Health" title="Child & Teen Health">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Pain" title="Pain">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Diseases & Conditions" title="Diseases & Conditions">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Exercise & Fitness" title="Exercise & Fitness">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Mind & Mood" title="Mind & Mood">
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <Row>
                <Col lg={4} md={6} sm={6}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardImg}>
                      <Image src={cardImg1} alt="card" />
                    </div>
                    <div className={styles.writerName}>
                      <span>Child & Teen Health</span>
                      <span>Dr. Arun Puri</span>
                    </div>
                    <h4 className={styles.cardTitle}>
                      What is a tongue-tie? What parents need to know
                    </h4>
                    <p className={styles.cardConten}>
                      A band of tissue helps secure the tongue to the front of
                      the mouth. If it is short, it can restrict movement of the
                      tongue. This is called a tongue-tie. Having a tongue-tie
                      is not necessarily a problem — but there are exceptions
                      that parents should be aware of.
                    </p>
                    <div className={styles.date}>07-Feb-2024</div>
                  </div>
                  <div className={styles.cardBorder}></div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TechnologyBlog;
