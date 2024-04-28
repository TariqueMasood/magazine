import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import MgButton from "../button/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fetchData } from "@/utils/api";
import styles from "./interview-card.module.css";
import Link from "next/link";

const InterviewCard2 = async () => {
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
  );
};

export default InterviewCard2;
