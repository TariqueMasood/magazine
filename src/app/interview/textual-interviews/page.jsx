import styles from "./textual-interviews.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/utils/api";

const TextualInterviewCard = (props) => {
  const { id, profile_pic, title, subtitle } = props.data;
  return (
    <div className={styles.cardWrapper}>
      <div>
        <Image src={profile_pic} alt="profile-pic" width={200} height={250} />
      </div>
      <div className={styles.cardContent}>
        <div>
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
        </div>
        <Link href={`/interview/textual-interviews/${id}`}>
          Read More <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

const TextualInterviewsPage = async () => {
  const interviews = await fetchData("interviews");
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Container>
          <Row>
            {interviews.results &&
              interviews.results.map((data) => {
                return (
                  <Col
                    key={data.id}
                    lg={3}
                    md={4}
                    sm={6}
                    xm={12}
                    className="mt-4"
                  >
                    <TextualInterviewCard data={data} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TextualInterviewsPage;
