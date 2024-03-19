import { Col, Container, Row } from "react-bootstrap";
import styles from "./about-us.module.css";
import Image from "next/image";
import heroImg from "../../../public/images/about-hero-img.png";
import storyImg1 from "../../../public/images/about-story-img1.png";
import storyImg2 from "../../../public/images/about-story-img2.png";
import mottoImg1 from "../../../public/images/about-motto-img1.png";
import missionImg1 from "../../../public/images/about-mission-img1.png";
import faqImg1 from "../../../public/images/faq-img1.png";
import faqImg2 from "../../../public/images/faq-img2.png";
import enevtImg1 from "../../../public/images/about-event-img1.png";
import enevtImg2 from "../../../public/images/about-event-img2.png";
import enevtImg3 from "../../../public/images/about-event-img3.png";
import enevtImg4 from "../../../public/images/about-event-img4.png";
import enevtImg5 from "../../../public/images/about-event-img5.png";
import enevtImg6 from "../../../public/images/about-event-img6.png";

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
      <div className={styles.hero}>
        <Image src={heroImg} alt="img" />
      </div>
      <div className={styles.content}>
        <h2>We are Project Leader.</h2>
        <h2>This is our story.</h2>
        <p>
          In the 1990s, in a small apartment located in the suburbs of Chennai
          in southern India, a simple, yet revolutionary idea was born: "Build
          smart technology to help businesses work better." This idea evolved to
          become the world-class technology company we're known as today.
        </p>
      </div>
      <div className={styles.ourStory}>
        <Container>
          <h2>Our Story</h2>
          <div className={styles.storyWrapper}>
            <div className={styles.storyImg}>
              <Image src={storyImg1} alt="img" />
            </div>
            <div className={styles.storyContent}>
              <p>
                Our roots are firmly planted in project leadership. Our
                founders, with their extensive industry experience, envisioned a
                platform where the stories of project leaders could be told,
                their successes celebrated, and their wisdom shared. This vision
                led to the creation of our magazine.
              </p>
              <p>
                We believe that everyone has the potential to lead, to innovate,
                and to inspire. Whether you’re an individual leading a small
                team or an organization driving industry-wide change, your story
                matters. And we’re here to tell it.
              </p>
              <p>
                Our journey into project leadership and industry excellence
                began many years ago.
              </p>
              <p>
                We started my career as a project leader in MNCs with
                challenging roles, which were incredibly rewarding. We were
                responsible for leading a team of talented individuals, managing
                resources, and ensuring that our projects were completed on time
                and within budget.
              </p>
            </div>
          </div>
          <div className={styles.storyWrapper}>
            <div className={styles.storyContent}>
              <p>
                Over the years, we have worked in various industries, from
                construction to technology to banking to healthcare, and we’ve
                led projects of all sizes delivering success. Each project was a
                learning experience, and each success (and failure) taught us
                valuable lessons about leadership, teamwork, and perseverance.
              </p>
              <p>
                But throughout our career, we noticed something. There were
                countless stories of project leaders who were doing amazing
                things, but these stories were often overlooked. These leaders
                were innovating, inspiring their teams, and making a real impact
                in their industries. But their stories were not being told.
              </p>
              <p>
                That’s when we had the idea for this magazine. We wanted to
                create a platform where these stories could be shared. A place
                where project leaders could be recognized for their hard work
                and dedication. A place where others could learn from their
                experiences and be inspired to become leaders themselves.
              </p>
            </div>
            <div className={styles.storyImg}>
              <Image src={storyImg2} alt="img" />
            </div>
          </div>
        </Container>
      </div>
      <section className={styles.motto}>
        <Container>
          <p>
            Our motto, “Shining a Light on Project Leaders”, reflects this
            vision. We believe that everyone has the potential to lead, to
            innovate, and to inspire. And we’re here to shine a light on those
            who are doing just that.
          </p>
          <p>
            So, whether you’re a project leader with a story to tell, an
            aspiring leader looking for inspiration, or simply someone
            interested in learning about project leadership and industry trends,
            we welcome you. Let’s learn, grow, and lead together. This is our
            story. What’s yours?
          </p>
        </Container>
      </section>
      <div className={styles.ourMotto}>
        <Container>
          <div className={styles.ourMottoWrapper}>
            <div className={styles.mottoContent}>
              <h2>Our Motto</h2>
              <div>
                <TitleBorder />
              </div>
              <p>
                Our motto, “Shining a Light on Project Leaders”, reflects our
                commitment to recognizing and promoting leadership in all its
                forms. We believe that by highlighting the achievements of
                project leaders, we can inspire our readers to reach new
                heights, to strive for excellence, and to become leaders in
                their own right.
              </p>
            </div>
            <div className={styles.mottoImage}>
              <Image src={mottoImg1} alt="img" />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.ourMission}>
        <Container>
          <div className={styles.ourMissionWrapper}>
            <div className={styles.missionImage}>
              <Image src={missionImg1} alt="img" />
            </div>
            <div className={styles.mottoContent}>
              <h2>Our Mission</h2>
              <div>
                <TitleBorder />
              </div>
              <p>
                Our motto, “Shining a Light on Project Leaders”, reflects our
                commitment to recognizing and promoting leadership in all its
                forms. We believe that by highlighting the achievements of
                project leaders, we can inspire our readers to reach new
                heights, to strive for excellence, and to become leaders in
                their own right.
              </p>
            </div>
          </div>
        </Container>
      </div>
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
                This includes:
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
              <Col lg={6} className="my-3">
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
              <Col lg={3}>
                <div>
                  <TopicCard
                    title="Leadership Insights"
                    desc="We share insights and advice from successful project leaders across various industries."
                  />
                </div>
              </Col>
              <Col lg={3}>
                <TopicCard
                  title="Project Management"
                  desc="We explore the best practices in project magt., from planning and execution to monitoring and closure."
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <div>
                  <TopicCard
                    title="Industry Trends"
                    desc="We keep our readers updated on the latest trends and developments in their respective industries."
                  />
                </div>
              </Col>
              <Col lg={3}>
                <div>
                  <TopicCard
                    title="Case Studies"
                    desc="We present case studies of successful projects, highlighting the strategies used and the lessons learned."
                  />
                </div>
              </Col>
              <Col lg={3}>
                <div>
                  <TopicCard
                    title="Interviews"
                    desc="We conduct interviews with project leaders, providing our readers with firsthand insights into their journey and experiences"
                  />
                </div>
              </Col>
              <Col lg={3}>
                <div>
                  <TopicCard
                    title="Innovation"
                    desc="We discuss how innovation is shaping project management and the industries at large."
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.topicDesc}>
            <p>
              Our aim is to provide a comprehensive view of project leadership,
              offering our readers valuable information that they can apply in
              their own projects and careers. Ready to position for success?
              Let’s do it!
            </p>
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
            forward to your participation! Ready to position for success? Let’s
            do it!
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
