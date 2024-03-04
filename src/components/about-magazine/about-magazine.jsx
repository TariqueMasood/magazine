import { Col, Container, Row } from "react-bootstrap";
import styles from "./about-magazine.module.css";
import Image from "next/image";
import aboutImg from "../../../public/images/about-img.svg";
import icon1 from "../../../public/images/book-open-icon.png";
import icon2 from "../../../public/images/book-close-icon.png";
import icon3 from "../../../public/images/man-sitting-icon.png";
import icon4 from "../../../public/images/hand-open-icon.png";
import icon5 from "../../../public/images/text-icon.png";
import icon6 from "../../../public/images/sound-icon.png";

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
      {props.connector ? <div className={styles.dottedConnector} /> : null}
    </div>
  );
}

const AboutMagazine = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <h1 className={styles.aboutHeader}>
                Innovative projects, impactful leaders, captivating
                storytelling.
              </h1>
              <div className={styles.serviceStepWrapper}>
                <ServiceStep
                  icon={icon1}
                  title="Project stories"
                  desc="Transformative projects, diverse stories."
                  connector={true}
                />
                <ServiceStep
                  icon={icon2}
                  title="Case studies"
                  desc="Industries' project success strategies for you."
                  connector={true}
                />
                <ServiceStep
                  icon={icon3}
                  title="Interview"
                  desc="Global projects, leaders, challenges, learning."
                  connector={true}
                />
                <ServiceStep
                  icon={icon4}
                  title="Success stories"
                  desc="Secrets of victorious project leaders revealed."
                  connector={true}
                />
                <ServiceStep
                  icon={icon5}
                  title="Expert opinions"
                  desc="Experts sharing project success strategies."
                />
                <ServiceStep
                  icon={icon6}
                  title="industry news"
                  desc="Dynamic news on projects, strategies, industries."
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <p className={styles.aboutText}>
                Our digital magazine is more than just a collection of articles,
                that stands out from the rest by providing our readers with
                unparalleled insights on projects and project leadership. We
                deliver value that makes you stand out from the crowd.
              </p>
              <div className={styles.imgContainer}>
                <Image
                  src={aboutImg}
                  alt="about-magazine"
                  className={styles.imgCss}
                />
                <div className={styles.services}>
                  <div className={styles.serviceContainer}>
                    <span className={styles.count}>100+</span>
                    <span className={styles.serviceText}>project stories</span>
                  </div>
                  <div className={styles.divider}></div>
                  <div className={styles.serviceContainer}>
                    <span className={styles.count}>15+</span>
                    <span className={styles.serviceText}>
                      Leaders interviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMagazine;
