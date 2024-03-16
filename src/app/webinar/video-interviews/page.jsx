"use client";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./video-interviews.module.css";
import Subscribe from "@/components/subscribe/subscribe";
import YouTube from "react-youtube";

const data = [
  {
    id: 1,
    cardVideo: "dHNELFsiUDM",
    title: "Digital Transformation",
    heading: "Exclusive Video: Red Hat at MWC 2024",
  },
  {
    id: 2,
    cardVideo: "Z8QxZURcEBo",
    title: "Digital Transformation",
    heading: "If I Were Your Digital Transformation Leader, What Would I Do",
  },
  {
    id: 3,
    cardVideo: "yDcTVCZYDm4",
    title: "Head of IT & Compliance at GFS",
    heading: "Learn About Performance Foodservice Warehouse Jobs",
  },
  {
    id: 4,
    cardVideo: "OXOBEsyCnnI",
    title: "Digital Transformation",
    heading: "How we can solve our family problems | Paigham e Quran",
  },
  {
    id: 5,
    cardVideo: "3IJUEQDq1Bg",
    title: "Cloud & Cyber Security",
    heading:
      "Aviation Industry and Cybersecurity: Tips on Resilience and Incident Response",
  },
];

const VideoInterviewCard = (props) => {
  const { videoId, width, height, title, heading } = props;
  const opts = {
    width: width || "100%",
    height: height || "220px",
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.videoContainer}>
        <YouTube videoId={props.cardVideo} opts={opts} />
      </div>
      <div className={styles.videoCardContent}>
        <h6>{props.title}</h6>
        <h4>{props.heading}</h4>
      </div>
    </div>
  );
};

const VideoInterviewsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.title}>
          <h1>
            Embracing Curiosity: Unveiling Insight, Ideas, and Inspiration
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            bibendum pellentesque rutrum.
          </p>
        </div>
        <Subscribe />
      </Container>
      <div className={styles.videoCard}>
        <Container>
          <Row>
            {data.map((data, index) => {
              return (
                <Col lg={4} md={6} className="mt-4">
                  <VideoInterviewCard
                    key={index}
                    cardVideo={data.cardVideo}
                    title={data.title}
                    heading={data.heading}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VideoInterviewsPage;
