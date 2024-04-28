import ellipseImg from "../../../public/images/interview-circle-img.png";
import styles from "./interview.module.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import InterviewCard from "@/components/interview-card/interview-card";
import InterviewCard2 from "@/components/interview-card/interview-card-2";
import FeaturedInterview from "@/components/featured-interview/featured-interview";

const InterviewBanner = () => {
  return (
    <div className={styles.heroWrapper}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Leaders Unfiltered: Share Your Story, Shape the Future.</h1>
            <h1>Exclusive Interviews with Top Performers.</h1>
            <p>
              Get featured in exclusive interviews alongside industry
              heavyweights. Exploring leadership across industries. Showcase
              your expertise. Contact us today.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.ellipseImg}
                src={ellipseImg}
                alt="ellipse"
                width={400}
                height={400}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Interview = () => {
  return (
    <div className={styles.wrapper}>
      <InterviewBanner />
      <div className={styles.videoTextualWrapper}>
        <Container>
          <FeaturedInterview />
        </Container>
      </div>
      <div className={styles.textualInterview}>
        <Container>
          <InterviewCard />
          <InterviewCard2 />
        </Container>
      </div>
    </div>
  );
};

export default Interview;
