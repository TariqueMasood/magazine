"use client";

import MgButton from "@/components/button/button";
import ellipseImg from "../../../public/images/interview-circle-img.png";
import styles from "./interview.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import SectionTitle from "@/components/section-title/section-title";
import { MdKeyboardArrowRight } from "react-icons/md";
import YouTube from "react-youtube";
import Link from "next/link";
import { fetchData } from "@/utils/api";
import BoxAds from "@/components/ads/box-ads";

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

const VideoTextualInterview = async () => {
  const interviews = await fetchData("interviews/?limit=2");
  return (
    <>
      {interviews?.results.is_feature && (
        <div>
          <SectionTitle title="Featured Interviews" />
          <Row className="mt-3">
            {interviews?.results.map((interview) => (
              <Col lg={6} key={interview.id}>
                <div className={styles.videoTextualCard}>
                  <Row>
                    <Col lg={6} md={6}>
                      <div className={styles.videoTextualImg}>
                        <Image
                          src={interview.profile_pic}
                          alt="profile-pic"
                          width={130}
                          height={100}
                        />
                      </div>
                    </Col>
                    <Col lg={6} md={6}>
                      <div className={styles.videoTextualContent}>
                        <h1>{interview.title}</h1>
                        <h4>{interview.position}</h4>
                        <p>{interview.subtitle}</p>
                        <MgButton>
                          Read Full Interview <MdKeyboardArrowRight />
                        </MgButton>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
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

export const FirstRowCard = async () => {
  const interviews = await fetchData("interviews");

  return (
    <div>
      <div className={styles.textualViewAll}>
        <SectionTitle title="Textual interviews" />
        <Link href="/interview/textual-interviews">
          View All <MdKeyboardArrowRight />
        </Link>
      </div>
      <p>
        Exclusive interviews with leaders across industries driving
        transformational initiatives, showcasing expertise and stories that
        inspire.
      </p>
      <Row>
        <Col lg={9}>
          <Row>
            <div className={styles.textualCard}>
              <div className={styles.textualImg}>
                {interviews && (
                  <Image
                    src={interviews.results[0].profile_pic}
                    alt="card"
                    width={130}
                    height={100}
                  />
                )}
              </div>
              <div className={styles.textualContent}>
                <h4>{interviews && interviews.results[0].title}</h4>
                <h1>{interviews && interviews.results[0].position}</h1>
                <h2>{interviews && interviews.results[0].subtitle}</h2>
                <MgButton>
                  Read More <MdKeyboardArrowRight />
                </MgButton>
              </div>
            </div>
          </Row>
        </Col>
        <Col lg={3}>
          <BoxAds />
        </Col>
      </Row>
    </div>
  );
};

export const SecondRowCard = async () => {
  const interviews = await fetchData("interviews/?limit=2");
  return (
    <div className={styles.textualCardSecond}>
      <Row>
        {interviews?.results &&
          interviews?.results.map((interview) => (
            <Col lg={6} key={interview.id}>
              <div className={styles.textualCard2}>
                <Row>
                  <Col lg={5} md={6}>
                    <div className={styles.textualImg2}>
                      <Image
                        src={interview.profile_pic}
                        alt="profile-pic"
                        width={130}
                        height={100}
                      />
                    </div>
                  </Col>
                  <Col lg={7} md={6}>
                    <div className={styles.textualContent2}>
                      <h1>{interview.title}</h1>
                      <h4>{interview.position}</h4>
                      <h2>{interview.subtitle}</h2>
                      <MgButton>
                        Read More <MdKeyboardArrowRight />
                      </MgButton>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

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
          <VideoTextualInterview />
        </Container>
      </div>
      {/* <div className={styles.interview}>
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
      </div> */}
      <div className={styles.textualInterview}>
        <Container>
          <FirstRowCard />
          <SecondRowCard />
        </Container>
      </div>
    </div>
  );
};
export default Interview;
