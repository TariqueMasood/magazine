import { Col, Container, Row } from "react-bootstrap";
import styles from "./about-us.module.css";
import Image from "next/image";
import heroImg from "../../../public/images/about-hero-img1.png";
import faqImg1 from "../../../public/images/faq-img1.png";
import faqImg2 from "../../../public/images/faq-img2.png";
import enevtImg1 from "../../../public/images/about-event-img1.png";
import enevtImg2 from "../../../public/images/about-event-img2.png";
import enevtImg3 from "../../../public/images/about-event-img3.png";
import enevtImg4 from "../../../public/images/about-event-img4.png";
import enevtImg5 from "../../../public/images/about-event-img5.png";
import enevtImg6 from "../../../public/images/about-event-img6.png";
import mottoIcon from "../../../public/images/motto-icon.png";
import missionIconImg1 from "../../../public/images/about-us-arrow-img.png";
import missionIconImg2 from "../../../public/images/mission-icon-img3.png";
import mapImg from "../../../public/images/map-img.png";
import sparkImage from "../../../public/images/spark-img.png";
import visionImage from "../../../public/images/vision-img.png";
import bluePrintImage from "../../../public/images/blueprint-img.png";
import qouteIcon from "../../../public/images/qoute-icon.png";
import SectionHeader from "@/components/section-header/section-header";
import TeamSlider from "@/components/team-slider/team-slider";

const TitleBorder = () => {
  return <div className={styles.titleBorder}></div>;
};

const TopicCard = (props) => {
  const { title, desc } = props;
  return (
    <div className={`my-3 ${styles.topicCard}`}>
      <h4>{title}</h4>
      <TitleBorder />
      <p>{desc}</p>
    </div>
  );
};
const Card = (props) => {
  const { title, desc, heading } = props;
  return (
    <div className={styles.card}>
      <h2>{heading}</h2>
      <h4>{title}</h4>
      <TitleBorder />
      <p>{desc}</p>
    </div>
  );
};

const EventContent = (props) => {
  const { eventImg, title, desc } = props;
  return (
    <div className={styles.eventContent}>
      <div>
        <Image src={eventImg} alt="pic" />
      </div>
      <div>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.heroWrapper}>
        <Container>
          <div className={styles.hero}>
            <h6>Born from the</h6>
            <h1>fertile ground of project leadership.</h1>
            <p>
              Our founders, veterans with a war chest of industry experience,
              dreamt of a platform where the sagas of project leaders could be
              chronicled, their triumphs heralded, and their wisdom
              disseminated. This audacious vision birthed this very magazine.
            </p>
            <div className={styles.heroImage}>
              <Image src={heroImg} alt="pic" />
            </div>
          </div>
          <div className={styles.mission}>
            <div className={styles.missionFirstContainer}>
              <div className={styles.arrowImg}>
                <div>
                  <h6>Our</h6>
                  <h1>Mission</h1>
                </div>
                <div className={styles.missionIcon1}>
                  <Image src={missionIconImg1} alt="ArrowImage" />
                </div>
              </div>
              <p>
                To empower a global community of project leaders by sharing
                inspiring stories, fostering knowledge exchange, and celebrating
                the architects of success
              </p>
            </div>
            <div className={styles.missionSecondContainer}>
              <div className={styles.arrowImg}>
                <div>
                  <h6>Our</h6>
                  <h1>Vision</h1>
                </div>
                <div className={styles.missionIcon2}>
                  <Image src={missionIconImg2} alt="ArrowImage" />
                </div>
              </div>
              <p>
                We envision a world where project leadership is a beacon of
                innovation, collaboration, and impact.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.motto}>
        <Container>
          <div className={styles.mottoWrapper}>
            <div className={styles.mottoTitle}>
              <div className={styles.mottoImage}>
                <h6>Our Motto</h6>
                <Image src={mottoIcon} alt="mottoIcon" />
              </div>
              <p>
                Beyond the Blueprint: <br /> Inspiring Leaders Who Shape Our
                World.
              </p>
            </div>
            <div className={styles.mottoContent}>
              <p>
                The remarkable narratives of project leaders, the architects of
                progress, were often relegated to the shadows. Their unwavering
                dedication, their innovative spirit, their ability to ignite
                teams - these tales deserved to be illuminated.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.spark}>
            <div className={styles.sparkContent}>
              <h1>The Spark of Inspiration</h1>
              <p>
                Decades ago, our founders embarked on a journey across diverse
                industries – construction, technology, banking, healthcare. Each
                project, from the colossal to the nimble, was a crucible of
                learning. We tasted the thrill of victories and the sting of
                setbacks, each experience forging invaluable lessons in
                leadership, teamwork, and resilience. But amidst the triumphs
                and challenges, a profound realization emerged.
              </p>
            </div>
            <div className={styles.sparkImage}>
              <Image src={sparkImage} alt="pic" />
            </div>
          </div>
          <div className={styles.vision}>
            <div className={styles.visionContent}>
              <h1>
                From Vision to <br /> Platform
              </h1>
              <h6>
                This conviction ignited the spark for our magazine. We
                envisioned a platform that would become a vibrant tapestry woven
                with the stories of project leaders.
              </h6>
              <p>
                A space where their achievements would be celebrated, their
                wisdom disseminated, and their journeys serve as a source of
                inspiration for aspiring leaders.
              </p>
            </div>
            <div className={styles.visionImg}>
              <Image src={visionImage} alt="pic" />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.bluePrint}>
        <Container>
          <div className={styles.bluePrintWrapper}>
            <div className={styles.bluePrintImg}>
              <Image src={bluePrintImage} alt="pic" />
            </div>
            <div className={styles.bluePrintContent}>
              <h1>
                Beyond the <br /> Blueprint
              </h1>
              <Image className={styles.qouteImage} src={qouteIcon} alt="pic" />
              <h6>
                Inspiring Leaders <br /> Who Shape Our World <br /> is more than
                just a motto;
              </h6>
              <p>
                it's the cornerstone of our philosophy. We go beyond the
                blueprints, delving into the human narratives that drive
                successful projects. By amplifying the voices of those who shape
                our world, we hope to equip our readers with the knowledge,
                strategies, and motivation to rise to the challenge and become
                leaders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.faq}>
        <Container>
          <div className={styles.faqWrapper}>
            <div className={styles.faqImage}>
              <h6>FAQS</h6>
              <div>
                <TitleBorder />
              </div>
              <h2>Who is your target audience?</h2>
              <div className="my-4 text-center">
                <Image src={faqImg1} alt="img" />
              </div>
              <div>
                <Image src={faqImg2} alt="img" />
              </div>
              <p>
                Our target audience is a diverse group of individuals and
                organizations who are interested in project leadership and
                industry trends. <br />
              </p>
            </div>
            <div className={styles.faqContent}>
              <div className={styles.faqContentTitle}>
                <span>01.</span>
                <div>
                  <h6>Project Leaders</h6>
                  <p>
                    Individuals who are leading projects in various industries
                    and are looking for insights, inspiration, and recognition.
                  </p>
                </div>
              </div>
              <div className={styles.faqContentTitle}>
                <span>02.</span>
                <div>
                  <h6>Aspiring Leaders</h6>
                  <p>
                    Those who aspire to become project leaders and are eager to
                    learn from the experiences of established leaders.
                  </p>
                </div>
              </div>
              <div className={styles.faqContentTitle}>
                <span>03.</span>
                <div>
                  <h6>Organizations</h6>
                  <p>
                    Companies and organizations that value project leadership
                    and are keen to understand industry trends and best
                    practices.
                  </p>
                </div>
              </div>
              <div className={styles.faqContentTitle}>
                <span>04.</span>
                <div>
                  <h6>Industry Professionals</h6>
                  <p>
                    People working in various industries who are interested in
                    understanding the dynamics of project leadership.
                  </p>
                </div>
              </div>
              <div className={styles.faqContentTitle}>
                <span>05.</span>
                <div>
                  <h6>Lifelong Learners</h6>
                  <p>
                    Individuals who are always looking to learn something new
                    and gain inspiration from the stories of others.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.faqDesc}>
            We believe that everyone has the potential to lead and inspire, and
            we aim to reach out to anyone who shares this belief. Whether you’re
            an experienced leader, a budding professional, or simply someone
            with a keen interest in project leadership, our magazine is for you.
            Ready to position for success? Let’s do it!
          </p>
        </Container>
      </section>

      <section className={styles.topic}>
        <Container>
          <div className={styles.topicWrapper}>
            <Row>
              <Col lg={6} md={6} sm={4} className="my-3">
                <div className={styles.topicContent}>
                  <h2>What are some of the topics you cover?</h2>
                  <div>
                    <TitleBorder />
                  </div>
                  <p>
                    Our magazine covers a wide range of topics related to
                    project leadership and industry trends. Here are some of the
                    key areas we focus on:
                  </p>
                </div>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <div>
                  <TopicCard
                    title="Leadership Insights"
                    desc="We share insights and advice from successful project leaders across various industries."
                  />
                </div>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <TopicCard
                  title="Project Management"
                  desc="We explore the best practices in project magt., from planning and execution to monitoring and closure."
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} mmd={3} sm={4}>
                <div>
                  <TopicCard
                    title="Industry Trends"
                    desc="We keep our readers updated on the latest trends and developments in their respective industries."
                  />
                </div>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <div>
                  <TopicCard
                    title="Case Studies"
                    desc="We present case studies of successful projects, highlighting the strategies used and the lessons learned."
                  />
                </div>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <div>
                  <TopicCard
                    title="Interviews"
                    desc="We conduct interviews with project leaders, providing our readers with firsthand insights into their journey and experiences"
                  />
                </div>
              </Col>
              <Col lg={3} md={3} sm={4}>
                <div>
                  <TopicCard
                    title="Innovation"
                    desc="We discuss how innovation is shaping project management and the industries at large."
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className={styles.event}>
        <Container>
          <div className={styles.eventWrapper}>
            <div className={styles.eventContentWrapper}>
              <h2>Do you have any upcoming events or webinars?</h2>
              <div className={styles.eventContent}>
                <EventContent
                  eventImg={enevtImg1}
                  title="Leadership Webinars"
                  desc="These webinars feature experienced project leaders who share their insights and experiences. They’re a great opportunity to learn from the best in the field."
                />
              </div>
              <div className={styles.eventContent}>
                <EventContent
                  eventImg={enevtImg2}
                  title="Industry Trends Discussions"
                  desc="In these sessions, we discuss the latest trends in various industries, providing our readers with up-to-date information."
                />
              </div>
              <div className={styles.eventContent}>
                <EventContent
                  eventImg={enevtImg3}
                  title="Case Study Reviews"
                  desc="These events involve a detailed review and discussion of various project case studies, offering practical lessons and insights."
                />
              </div>
              <div className={styles.eventContent}>
                <EventContent
                  eventImg={enevtImg4}
                  title="Interactive Q&A Sessions"
                  desc="These are interactive sessions where our readers can ask questions and engage in discussions with project leaders and industry experts."
                />
              </div>
              <div className={styles.eventContent}>
                <EventContent
                  eventImg={enevtImg5}
                  title="Networking Events"
                  desc="These events provide an opportunity for our readers to network with project leaders, industry professionals, and fellow readers."
                />
              </div>
            </div>
            <div className={styles.eventImage}>
              <p>
                Yes, we do have a variety of upcoming events and webinars. While
                the specific details are regularly updated, here are some
                general categories of events we host
              </p>
              <div>
                <Image src={enevtImg6} alt="pic" />
              </div>
            </div>
          </div>
          <div className={styles.eventDesc}>
            Please note that the dates, times, and specifics of these events are
            subject to change. We recommend checking our website regularly or
            subscribing to our newsletter for the latest updates. We look
            forward to your participation! Ready to position for success?
            Let&quot;s do it!
          </div>
        </Container>
      </section>
      <section className={styles.ourTeam}>
        <Container>
          <TeamSlider />
        </Container>
      </section>
      <section className={styles.map}>
        <Container>
          <div>
            <div className={styles.mapTitle}>
              <SectionHeader
                style={{ color: "#fff" }}
                title="Global Footprint"
                subTitle="We're a diverse community"
              />
            </div>
            <div className={styles.mapImage}>
              <Image src={mapImg} alt="map" />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.aboutCard}>
        <Container>
          <div>
            <Row>
              <Col lg={3}>
                <Card
                  heading="400+"
                  subTitle="Project stories"
                  desc="We've helped build over 400 amazing projects."
                />
              </Col>
              <Col lg={3}>
                <Card
                  heading="600%"
                  subTitle="Return on investment"
                  desc="We've helped build over 400 amazing projects."
                />
              </Col>
              <Col lg={3}>
                <Card
                  heading="10k"
                  subTitle="Global download"
                  desc="Our free UI kit has been downloaded over 100k times."
                />
              </Col>
              <Col lg={3}>
                <Card
                  heading="200+"
                  subTitle="5-star reviews"
                  desc="We're proud of our 5-star rating with over 200 reviews."
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
