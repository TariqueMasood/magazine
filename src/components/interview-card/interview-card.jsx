import { MdKeyboardArrowRight } from "react-icons/md";
import SectionTitle from "../section-title/section-title";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import MgButton from "../button/button";
import BoxAds from "../ads/box-ads";
import { fetchData } from "@/utils/api";
import styles from "./interview-card.module.css";

const InterviewCard = async () => {
  const interviews = await fetchData("interviews?limit=1");

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
                {interviews.results && (
                  <Image
                    src={interviews.results[0].profile_pic}
                    alt="card"
                    width={130}
                    height={100}
                  />
                )}
              </div>
              <div className={styles.textualContent}>
                <h4>{interviews.results && interviews.results[0].title}</h4>
                <h1>{interviews.results && interviews.results[0].position}</h1>
                <h2>{interviews.results && interviews.results[0].subtitle}</h2>
                <Link
                  href={`/interview/textual-interviews/${interviews.results[0].id}`}
                >
                  Read More <MdKeyboardArrowRight />
                </Link>
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

export default InterviewCard;
