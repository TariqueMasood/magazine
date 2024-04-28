import styles from "./textual-details.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import HeroSidebar from "@/components/hero-sidebar/hero-sidebar";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import BoxAds from "@/components/ads/box-ads";
import TowerAds from "@/components/ads/tower-ads";
import { fetchData } from "@/utils/api";
import { notFound } from "next/navigation";
import Featured from "@/components/featured/featured";
import FeaturedInterview from "@/components/featured-interview/featured-interview";
import { formatDate2 } from "@/utils/format-date";
import RecentInterviews from "@/components/recent-interviews/recent-interviews";

export const getSingleData = async (id) => {
  const data = await fetchData("interviews");
  const singleInterview = data.results.find((data) => data.id === parseInt(id));

  return singleInterview;
};

export async function generateMetadata({ params }) {
  const { textSlug } = params;
  const interview = await getSingleData(textSlug);

  if (!interview) {
    notFound();
  }

  return {
    title: interview?.title,
    desc: interview?.description,
  };
}

const TextualInterviewsDetails = async (props) => {
  const { textSlug } = props.params;
  const interview = await getSingleData(textSlug);

  function createMarkup(markup) {
    const baseURL = "http://api.projectleadersmagazine.com:8000";
    const modifiedHTML = markup.replace(/src="([^"]+)"/g, `src="${baseURL}$1"`);
    return modifiedHTML;
  }

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.containerTitle}>
          <h4>{textSlug.title}</h4>
          <div className={styles.card}>
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={4}>
                    <div className={styles.cardContainer}>
                      <Image
                        src={interview.profile_pic}
                        alt="profile-pic"
                        width={200}
                        height={300}
                      />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className={styles.cardContent}>
                      <h2>{interview.title}</h2>
                      <h6>{interview.subTitle}</h6>
                      <p>
                        By <span>{interview.title}</span>, {interview.position}
                      </p>
                      <div className={styles.cardDate}>
                        {formatDate2(interview.interview_date)}
                      </div>
                      <div className="mt-4">
                        <Image
                          src={interview.company_logo}
                          alt="company-logo"
                          width={100}
                          height={80}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                <BoxAds />
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={8}>
              <div
                dangerouslySetInnerHTML={{
                  __html: createMarkup(interview?.description),
                }}
              />
            </Col>
            <Col lg={4}>
              <div className="my-2">
                <RecentInterviews />
              </div>
              <TowerAds />
            </Col>
          </Row>
          <div className={`my-4 ${styles.border}`}></div>
        </div>
      </Container>
    </div>
  );
};

export default TextualInterviewsDetails;
