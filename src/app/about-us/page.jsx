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
              <div className={styles.mottoBorder}></div>
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
              <div className={styles.mottoBorder}></div>
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
              <div className={styles.faqBorder}></div>
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
    </div>
  );
};

export default AboutPage;
