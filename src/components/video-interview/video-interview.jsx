import Link from "next/link";
import SectionTitle from "../section-title/section-title";
import { MdKeyboardArrowRight } from "react-icons/md";
import YouTube from "react-youtube";
import { Col, Container, Row } from "react-bootstrap";

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

const VideoInterview = () => {
  return (
    <>
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
    </>
  );
};
export default VideoInterview;
