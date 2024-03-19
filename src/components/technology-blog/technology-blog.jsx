"use client";
import { CardTitle, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import Image from "next/image";
import cardImg1 from "../../../public/images/technology-blog-img1.png";
import MgPagination from "../pagination/pagination";

const articles = [
  {
    source: {
      id: "espn-cric-info",
      name: "ESPN Cric Info",
    },
    author: null,
    title:
      "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    description:
      "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    urlToImage:
      "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    publishedAt: "2020-04-27T11:41:47Z",
    content:
      "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  },
  {
    source: {
      id: "espn-cric-info",
      name: "ESPN Cric Info",
    },
    author: null,
    title:
      "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    description:
      "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    urlToImage:
      "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    publishedAt: "2020-03-30T15:26:05Z",
    content:
      "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  },
];

const BlogCard = (props) => {
  const { title, content, publishDate } = props;
  return (
    <Col lg={4} md={6} sm={6}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardImg}>
          <Image src={cardImg1} alt="card" />
        </div>
        <div className={styles.writerName}>
          <span>Child & Teen Health</span>
          <span>Dr. Arun Puri</span>
        </div>
        <h4 className={styles.cardTitle}>{title}...</h4>
        <p className={styles.cardConten}>{content}...</p>
        <div className={styles.date}>{publishDate}</div>
      </div>
      <div className={styles.cardBorder}></div>
    </Col>
  );
};

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
            <Tab eventKey="All" title="All">
              <Row>
                {articles.map((article) => (
                  <BlogCard
                    key={article.title}
                    title={article.title.slice(0, 45)}
                    content={article.content.slice(0, 150)}
                    imageUrl={article.urlToImage}
                    publishDate={article.publishedAt}
                  />
                ))}
              </Row>
            </Tab>
            <Tab eventKey="Latest" title="Latest">
              <Row>
                <BlogCard />
              </Row>
            </Tab>
            <Tab eventKey="Child & Teen Health" title="Child & Teen Health">
              <Row>
                <BlogCard />
              </Row>
            </Tab>
            <Tab eventKey="Pain" title="Pain">
              <Row>
                <BlogCard />
              </Row>
            </Tab>
            <Tab eventKey="Diseases & Conditions" title="Diseases & Conditions">
              <Row>
                <BlogCard />
              </Row>
            </Tab>
            <Tab eventKey="Exercise & Fitness" title="Exercise & Fitness">
              <Row>
                <BlogCard />
              </Row>
            </Tab>
            <Tab eventKey="Mind & Mood" title="Mind & Mood">
              <Row>
                <BlogCard />
              </Row>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <Row>
                <BlogCard />
              </Row>
            </Tab>
          </Tabs>
        </div>
        <div>
          <MgPagination />
        </div>
      </Container>
    </div>
  );
};

export default TechnologyBlog;
