import { Col, Container, Row } from "react-bootstrap";
import styles from "./about-magazine.module.css";
import Image from "next/image";
import aboutImg from "../../../public/images/about-img2.png";
import icon1 from "../../../public/images/book-open-icon.png";
import icon3 from "../../../public/images/man-sitting-icon.png";
import icon4 from "../../../public/images/hand-open-icon.png";
import icon5 from "../../../public/images/text-icon.png";
import SectionBorder from "../section-border/section-border";

function ServiceStep(props) {
  return (
    <div className={styles.serviceStepContainer}>
      <div className={styles.serviceIcon}>
        <Image src={props.icon} alt="icon" />
      </div>
      <div>
        <h5 className={styles.stepHeader}>{props.title}</h5>
        <p className={styles.stepText}>{props.desc}</p>
      </div>
      {/* {props.connector ? <div className={styles.dottedConnector} /> : null} */}
    </div>
  );
}

const AboutMagazine = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h1 className={styles.aboutHeader}>
            Innovative projects, <br /> impactful leaders, captivating
            storytelling.
          </h1>
          <p className={styles.aboutText}>
            Our digital magazine is more than just a collection of articles,
            that stands out from the rest by providing our readers with
            unparalleled insights on projects and project leadership. We deliver
            value that makes you stand out from the crowd.
          </p>
          <div className={styles.magazineBorderWrapper}>
            <SectionBorder />
          </div>
          <div className={styles.serviceStepWrapper}>
            <Row>
              <Col lg={6} md={6}>
                <div className={styles.serviceStepIcon}>
                  <ServiceStep
                    icon={icon1}
                    title="Project stories"
                    desc="Join the journey of the projects that are transforming the world, with diverse and fascinating stories from across a range of domains."
                    connector={true}
                  />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className={styles.serviceStepIcon}>
                  <ServiceStep
                    icon={icon3}
                    title="Interview"
                    desc="Explore challenging and rewarding projects worldwide, learning from experienced leaders who made them happen."
                    connector={true}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6}>
                <div className={styles.serviceStepIcon}>
                  <ServiceStep
                    icon={icon4}
                    title="Success stories"
                    desc="Optimized for mobile devices, ensuring seamless access on the go for readers everywhere."
                    connector={true}
                  />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className={styles.serviceStepIcon}>
                  <ServiceStep
                    icon={icon5}
                    title="Expert opinions"
                    desc="Insights of how experts tackle the different facets and hurdles of delivering successful projects in the real world."
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={aboutImg}
            alt="about-magazine"
            className={styles.imgCss}
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutMagazine;
