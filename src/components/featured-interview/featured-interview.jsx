import { Col, Row } from "react-bootstrap";
import SectionTitle from "../section-title/section-title";
import Image from "next/image";
import MgButton from "../button/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fetchData } from "@/utils/api";
import styles from "./featured-interview.module.css";
import Link from "next/link";

const FeaturedInterview = async () => {
  const interviews = await fetchData("interviews/?limit=2");
  return (
    <>
      {interviews?.results.is_feature && (
        <div>
          <SectionTitle title="Featured Interviews" />
          <Row className="mt-3">
            {interviews?.results &&
              interviews?.results.map((interview) => (
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
                          <Link
                            href={`/interview/textual-interviews/${interview.id}`}
                          >
                            Read More <MdKeyboardArrowRight />
                          </Link>
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

export default FeaturedInterview;
