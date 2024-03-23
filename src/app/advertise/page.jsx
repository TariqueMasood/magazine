import styles from "./advertise.module.css";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import aboutImg from "../../../public/images/advertise-img2.jpg";
import aboutImg2 from "../../../public/images/advertise-img2.jpg";
import liveImg from "../../../public/images/advertise-img4.webp";
import liveImg2 from "../../../public/images/advertise-img3.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import logoImg from "../../../public/images/logo.svg";
import { BsCheck2Circle } from "react-icons/bs";
import Image from "next/image";

const stackData = [
  {
    id: 1,
    title: "85K+",
    desc: "Monthly Online Views",
  },
  {
    id: 2,
    title: "1.12M+",
    desc: "Executive Email Distrubution",
  },
  {
    id: 3,
    title: "64K+",
    desc: "Monthly Social Views",
  },
];

const AdvertiseHero = () => {
  return (
    <div className={styles.AdvertiseHeroWrapper}>
      <div className={styles.heroTitle}>
        <h1>Advertise with</h1>
        <div className={styles.heroTitleImg}>
          <Image src={logoImg} alt="pic" />
        </div>
        <Link href="#">Download Media Kit</Link>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <Row>
        <Col lg={6}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.arrowIcon}>
                <span className={styles.arrow}>
                  <MdKeyboardDoubleArrowRight />
                </span>
                <h1>About</h1>
              </div>
              <p>
                We had a fabulous experience working with BizClik. They were
                collaborative, worked hard to align with our marketing plan and
                shape the article accordingly, and were very accommodating to
                change requests. We were very happy with the outcome and plan to
                leverage this story in our global marketing & communications
                plan.Thank you so much!
              </p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.aboutImg}>
            <Image src={aboutImg} alt="pic" />
            <blockquote className={styles.quoteContainer}>
              <div className={styles.quoteWrapper}>
                <span className={styles.quoteIcon}>
                  <RiDoubleQuotesL />
                </span>
                <p>
                  The interview was well designed, and I was impressed with the
                  professionalism, ability to execute, as well as the quality of
                  the article. I very much recommend BizClik Media Group, and
                  would enjoy working with the team again.
                </p>
                <div className={styles.aboutImgContent}>
                  <Image src={aboutImg2} alt="pic" />
                  <div className={styles.authorDetail}>
                    <span>Kate Maxwell</span> <br />
                    <span>
                      Chief Technology Officer, Defence & Intelligence
                    </span>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const LiveSection = () => {
  return (
    <div className={styles.live}>
      <Row>
        <Col lg={6}>
          <div className={styles.liveImg}>
            <Image className={styles.liveImg1} src={liveImg} alt="pic" />
            <div className={styles.liveContainer}>
              <div className={styles.liveImgContent}>
                <Image src={liveImg2} alt="pic" />
              </div>
              <div className={styles.liveImgTitle}>
                <div>STREAMING SINCE 2021</div>
                <div>LONDON • NEW YORK • SINGAPORE</div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.liveContent}>
            <div className={styles.liveContentWrapper}>
              <div className={styles.arrowIcon}>
                <span className={styles.arrow}>
                  <MdKeyboardDoubleArrowRight />
                </span>
                <h1>live</h1>
              </div>
              <p>
                Launched in 2021, our series of successful LIVE events provide
                attendees with the tools, knowledge, and network they need to
                boost business. <br /> Become a part of
                <Link href="#"> Tech LIVE Virtual 2024 </Link>
                and place your brand and executives at the centre of the
                discussion and the forefront of the industry. <br /> With a
                comprehensive content programme featuring senior executives and
                expert analysts, keynote addresses and roundtable discussions,
                this is an essential deep dive into our industry and an
                opportunity to position and promote your company.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const FeatureSection = (props) => {
  const { title, desc } = props;
  return (
    <div className={styles.featureWrapper}>
      <div className={styles.featureTitle}>
        <div className={styles.featureHeading}>
          <span>
            <BsCheck2Circle />
          </span>
          <span>{title}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const StackSection = (props) => {
  const { title, desc } = props;
  return (
    <div>
      <div className={styles.stackTitle}>{title}</div>
      <div className={styles.stackDevider}></div>
      <div className={styles.stackDesc}>{desc}</div>
    </div>
  );
};

const Advertise = () => {
  return (
    <div className={styles.wrapper}>
      <AdvertiseHero />
      <AboutSection />
      <div className={styles.feature}>
        <Container>
          <Row>
            <Col lg={4}>
              <FeatureSection
                title="Magazine & Reader"
                desc="Our Digital Magazines are available to view on Desktop, Tablet or Mobile. Double Page, Single Page and Half Page Ads space available."
              />
            </Col>
            <Col lg={4}>
              <FeatureSection
                title="Digital Web Adverts"
                desc="Custom Digital Web Adverts with CTR. Interstitial, Banner, Box and Tower ads all within our Website."
              />
            </Col>
            <Col lg={4}>
              <FeatureSection
                title="Newsletter"
                desc="Custom Digital Banner Ads included within our Weekly Newsletters and delivered to our Subscribers."
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FeatureSection
                title="Social Media"
                desc="Get your message out via our Social Media Channels, delivering on LinkedIn, Twitter, Facebook, YouTube and Instagram."
              />
            </Col>
            <Col lg={4}>
              <FeatureSection
                title="In-Person Events"
                desc="In-Person Events Providing exclusive content, panel discussions, networking and presentations for the global professional."
              />
            </Col>
            <Col lg={4}>
              <FeatureSection
                title="Webinars"
                desc="On-Demand, Semi-Live or Live. Hosted or Pre-recorded. We can cater for any Webinar needs."
              />
            </Col>
          </Row>
        </Container>
      </div>
      <LiveSection />
      <div className={styles.stack}>
        <Container>
          <h1>How our numbers stack up</h1>
          <Row>
            {stackData.map((data) => {
              return (
                <Col key={data.id} lg={4} md={4} sm={12}>
                  <StackSection {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Advertise;
