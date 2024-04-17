"use client";

import MgButton from "@/components/button/button";
import heroImg1 from "../../../public/images/wb-img1.png";
import heroImg2 from "../../../public/images/wb-img2.png";
import heroImg3 from "../../../public/images/wb-img3.png";
import ellipseImg from "../../../public/images/interview-circle-img.png";
import styles from "./interview.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import SectionTitle from "@/components/section-title/section-title";
import { MdKeyboardArrowRight } from "react-icons/md";
import cardImg1 from "../../../public/images/textual-interview-img1.png";
import cardImg2 from "../../../public/images/textual-interview-img2.png";
import cardImg3 from "../../../public/images/textual-interview-img3.png";
import cardImg4 from "../../../public/images/textual-interview-img4.png";
import cardImg5 from "../../../public/images/textual-interview-img5.png";
import cardImg6 from "../../../public/images/textual-interview-img6.png";
import YouTube from "react-youtube";
import Link from "next/link";

const YouTubePlayer = ({ videoId, width, height }) => {
  const opts = {
    width: width || "100%",
    height: height || "400px",
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

const VideoTextualInterview = () => {
  return (
    <div>
      <SectionTitle title="Featured Interviews" />
      <Row className="mt-3">
        <Col lg={6}>
          <div className={styles.videoTextual}>
            <div>
              <div className={styles.videoTextualContainer}>
                <div className={styles.YouTubeVideo}>
                  <YouTubePlayer
                    videoId="meT67QQqrIw"
                    width="100%"
                    height="250px"
                  />
                </div>
              </div>
              <div className={styles.videoTextualContainer}>
                <h3>Exclusive Video: Red Hat at MWC 2024</h3>
                <h6>Digital Transformation</h6>
                <p>
                  We speak with Ben Panic, Vice President of Red Hat’s Global
                  Telco Centre of Excellence, about the company’s MWC 2024
                  announcements and future telco trends
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.videoTextualCard}>
            <Row>
              <Col lg={6} md={6}>
                <div className={styles.videoTextualImg}>
                  <Image src={cardImg2} alt="card" />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className={styles.videoTextualContent}>
                  <h1>Garrett Olson</h1>
                  <h4>Head of IT & Compliance at GFS</h4>
                  <p>
                    Remi Lavergne, Head of IT Compliance at Global Freight
                    Services Reflects on a 25 Year Career in Logistics With
                    demand only set to grow, Serverfarm continues to pioneer
                    sustainable, innovative and efficient data centre solutions
                    as part of its long...
                  </p>
                  <MgButton>
                    Read Full Interview <MdKeyboardArrowRight />
                  </MgButton>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const FirstRowInterview = () => {
  return (
    <div className={styles.rowInterview}>
      <div className={styles.videoViewAll}>
        <SectionTitle title="video interviews" />
        <Link href="/interview/video-interviews">
          View All <MdKeyboardArrowRight />
        </Link>
      </div>
      <p>New and archived interviews conducted by our editorial.</p>
      <Row>
        <Col lg={8}>
          <div className={styles.FirstVideo}>
            <div>
              <div className={styles.videoContainer}>
                <YouTubePlayer
                  videoId="meT67QQqrIw"
                  width="100%"
                  height="420px"
                />
              </div>
              <div className={styles.videoContainer}>
                <h3>Exclusive Video: Red Hat at MWC 2024</h3>
                <h6>Digital Transformation</h6>
                <p>
                  We speak with Ben Panic, Vice President of Red Hat’s Global
                  Telco Centre of Excellence, about the company’s MWC 2024
                  announcements and future telco trends
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.SecondVideo}>
            <div className={styles.videoContainer}>
              <YouTubePlayer
                videoId="WbwEtxEqUEU"
                width="100%"
                height="420px"
              />
            </div>
            <div className={styles.SecondVideoContent}>
              <h6>Cloud & Cyber Security</h6>
              <p>
                Concurrency&apos;s company cloud strategies to help reduce waste
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const SecondRowInterview = () => {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <div className={styles.secondRowCard}>
            <div className={styles.videoContainer}>
              <YouTubePlayer
                videoId="NZEN-ItKL2k&t=229s"
                width="100%"
                height="250px"
              />
            </div>
            <h6>Digital Transformation</h6>
            <p>Mobile World Congress 2024: Day Two Highlights</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.secondRowCard}>
            <div className={styles.videoContainer}>
              <YouTubePlayer
                videoId="AXKjjfxNhJk&t475s"
                width="100%"
                height="250px"
              />
            </div>
            <h6>Head of IT & Compliance at GFS</h6>
            <p>Marching to the beat of digital transformation</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.secondRowCard}>
            <div className={styles.videoContainer}>
              <YouTubePlayer
                videoId="kkxQYilNuqg"
                width="100%"
                height="250px"
              />
            </div>
            <h6>Cloud & Cyber Security</h6>
            <p>Top 10: The technology world’s most influential CTOs</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const MostViewed = () => {
  return (
    <div>
      <SectionTitle title="most viewed" />
      <Row>
        <Col lg={6}>
          <div className={styles.mostViewedCard}>
            <Row>
              <Col lg={5} md={6}>
                <div className={styles.videoContainer}>
                  <YouTubePlayer
                    videoId="Gcf5My4ALxo"
                    width="250px"
                    height="150px"
                  />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div>
                  <h6>Malaria & Neglected Diseases </h6>
                  <p>
                    Africa’s ‘Noma Belt:’ Health Workers Tackle the Deadly NTD
                    in Nigeria’s Remote North
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.mostViewedBorder}></div>
          <div className={styles.mostViewedCard}>
            <Row>
              <Col lg={5} md={6}>
                <div className={styles.videoContainer}>
                  <YouTubePlayer
                    videoId="MOv6sAmKOSM"
                    width="250px"
                    height="150px"
                  />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div>
                  <h6>Non-Communicable Diseases</h6>
                  <p>
                    A&quot;Tsunami&quot;of Chronic Disease Challenges Confronts
                    Health Sector Response to Humanitarian Crises
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.mostViewedCard}>
            <Row>
              <Col lg={5} md={6}>
                <div className={styles.videoContainer}>
                  <YouTubePlayer
                    videoId="o8-2_Z8CMbg"
                    width="250px"
                    height="150px"
                  />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div>
                  <h6>Malaria & Neglected Diseases</h6>
                  <p>
                    Africa’s ‘Noma Belt:’ Health Workers Tackle the Deadly NTD
                    in Nigeria’s Remote North
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.mostViewedBorder}></div>
          <div className={styles.mostViewedCard}>
            <Row>
              <Col lg={5} md={6}>
                <div className={styles.videoContainer}>
                  <YouTubePlayer
                    videoId="YAKZ2jhG7T8"
                    width="250px"
                    height="150px"
                  />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div>
                  <h6>Non-Communicable Diseases</h6>
                  <p>
                    A &quot;Tsunami&quot; of Chronic Disease Challenges
                    Confronts Health Sector Response to Humanitarian Crises
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export const FirstRowCard = () => {
  return (
    <div>
      <div className={styles.textualViewAll}>
        <SectionTitle title="Textual interviews" />
        <Link href="/interview/textual-interviews">
          View All <MdKeyboardArrowRight />
        </Link>
      </div>
      <p>
        Read the latest posts from experts at Knowmed Health Publishing covering
        a variety of health topics and perspectives on medical news.
      </p>
      <Row>
        <Col lg={9}>
          <div className={styles.textualCard}>
            <div className={styles.textualImg}>
              <Image src={cardImg1} alt="card" />
            </div>
            <div className={styles.textualContent}>
              <h1>Greg Wilson</h1>
              <h4>CEO at Serverfarm</h4>
              <p>
                With demand only set to grow, Serverfarm continues to pioneer
                sustainable, innovative and efficient data centre solutions as
                part of its long-term strategy
              </p>
              <MgButton>
                Read More <MdKeyboardArrowRight />
              </MgButton>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className={styles.textualAd}>Ad</div>
        </Col>
      </Row>
    </div>
  );
};

export const SecondRowCard = () => {
  return (
    <div className={styles.textualCardSecond}>
      <Row>
        <Col lg={6}>
          <div className={styles.textualCard2}>
            <Row>
              <Col lg={5} md={6}>
                <div className={styles.textualImg2}>
                  <Image src={cardImg2} alt="card" />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div className={styles.textualContent2}>
                  <h1>Garrett Olson</h1>
                  <h4>CTO at Michigan Medicine</h4>
                  <h2>
                    Michigan Medicine CTO Dr Tim Calahan on how the Organisation
                    is Implementing a Cloud Transformation, Moving its Epic
                    Systems off-prem for key Benefits
                  </h2>
                  <MgButton>
                    Read More <MdKeyboardArrowRight />
                  </MgButton>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.textualCard2}>
            <Row>
              <Col lg={5} md={6}>
                <div className={styles.textualImg}>
                  <Image src={cardImg3} alt="card" />
                </div>
              </Col>
              <Col lg={7} md={6}>
                <div className={styles.textualContent2}>
                  <h1>Remi Lavergne</h1>
                  <h4>Head of IT & Compliance at GFS</h4>
                  <h2>
                    Remi Lavergne, Head of IT Compliance at Global Freight
                    Services Reflects on a 25 Year Career in Logistics
                  </h2>

                  <MgButton>
                    Read More <MdKeyboardArrowRight />
                  </MgButton>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ThirdRowCard = () => {
  return (
    <div className={styles.textualCardThird}>
      <Row>
        <Col lg={4}>
          <div className={styles.textualCard3}>
            <Row>
              <Col lg={5}>
                <div className={styles.textualImg3}>
                  <Image src={cardImg4} alt="card" />
                </div>
              </Col>
              <Col lg={7}>
                <div className={styles.textualContent3}>
                  <h3>Cindy Perettie</h3>
                  <p>Executive Vice President and Global Head of Kite</p>
                  <h5>
                    Bringing Business and Global Health, Cindy Perettie,
                    Executive VP of Kite, Shares a Journey of...
                  </h5>
                  <MgButton>
                    Read More <MdKeyboardArrowRight />
                  </MgButton>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.textualCard3}>
            <Row>
              <Col lg={5}>
                <div className={styles.textualImg3}>
                  <Image src={cardImg5} alt="card" />
                </div>
              </Col>
              <Col lg={7}>
                <div className={styles.textualContent3}>
                  <h3>Chris McDonald</h3>
                  <p>Global Head of Technical Operations</p>
                  <h5>
                    Chris McDonald, Global Head of Technical Operations, on his
                    Journey to Lead a Sustainable ...
                  </h5>
                  <MgButton>
                    Read More <MdKeyboardArrowRight />
                  </MgButton>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div className={styles.textualCard3}>
            <Row>
              <Col lg={5}>
                <div className={styles.textualImg3}>
                  <Image src={cardImg6} alt="card" />
                </div>
              </Col>
              <Col lg={7}>
                <div className={styles.textualContent3}>
                  <h3>Khang Pham Ngoc</h3>
                  <p>Chief Financial Officer at Home Credit Vietnam</p>
                  <h5>
                    Home Credit Vietnam CFO Khang Pham Ngoc Tells us how he Came
                    into his Role, and how…
                  </h5>
                  <MgButton>
                    Read More <MdKeyboardArrowRight />
                  </MgButton>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Interview = () => {
  return (
    <div className={styles.wrapper}>
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
      <div className={styles.videoTextualWrapper}>
        <Container>
          <VideoTextualInterview />
        </Container>
      </div>
      <div className={styles.interview}>
        <Container>
          <FirstRowInterview />
          <SecondRowInterview />
        </Container>
      </div>
      <div className={styles.mostViewed}>
        <Container>
          <div>
            <MostViewed />
          </div>
        </Container>
      </div>
      <div className={styles.textualInterview}>
        <Container>
          <div>
            <FirstRowCard />
            <SecondRowCard />
            <ThirdRowCard />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Interview;
