import SectionHeader from "@/components/section-header/section-header";
import styles from "./textual-interviews.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import cardImg1 from "../../../../public/images/textual-inter-img1.png";
import cardImg2 from "../../../../public/images/textual-inter-img2.png";
import cardImg3 from "../../../../public/images/textual-inter-img3.png";
import cardImg4 from "../../../../public/images/textual-inter-img4.png";
import Subscribe from "@/components/subscribe/subscribe";

const data = [
  {
    id: "t1",
    cardImage: cardImg1,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: "t2",
    cardImage: cardImg2,
    title: "Chris McDonald",
    subTitle: "Global Head of Technical Operations",
    desc: "Chris McDonald, Global Head of Technical Operations, on his Journey to Lead a Sustainable",
  },
  {
    id: "t3",
    cardImage: cardImg3,
    title: "Khang Pham Ngoc",
    subTitle: "Chief Financial Officer at Home Credit Vietnam",
    desc: "Home Credit Vietnam CFO Khang Pham Ngoc Tells us how he Came into his Role,and how…",
  },
  {
    id: "t4",
    cardImage: cardImg4,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: "t5",
    cardImage: cardImg1,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: "t6",
    cardImage: cardImg2,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: "t7",
    cardImage: cardImg4,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
];

export const getTextualData = async () => {
  return data;
};

export const getSingleTextualData = async (id) => {
  const singleData = data.find((data) => data.id === id);
  return singleData;
};

const TextualInterviewCard = (props) => {
  const { id, cardImage, title, subTitle, desc } = props.data;
  return (
    <div className={styles.cardWrapper}>
      <div>
        <Image src={cardImage} alt="card" />
      </div>
      <div className={styles.cardContent}>
        <div>
          <h4>{title}</h4>
          <h6>{subTitle}</h6>
          <p>{desc}</p>
        </div>
        <Link href={`/webinar/textual-interviews/${id}`}>
          Read More <MdKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

const TextualInterviewsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.title}>
          <h1>
            Embracing Curiosity: Unveiling Insight, Ideas, and Inspiration
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            bibendum pellentesque rutrum.
          </p>
          <Subscribe />
        </div>
      </Container>
      <div className={styles.card}>
        <Container>
          <Row>
            {data.map((data) => {
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
