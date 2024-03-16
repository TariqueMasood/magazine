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
    id: 1,
    cardImage: cardImg1,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: 2,
    cardImage: cardImg2,
    title: "Chris McDonald",
    subTitle: "Global Head of Technical Operations",
    desc: "Chris McDonald, Global Head of Technical Operations, on his Journey to Lead a Sustainable",
  },
  {
    id: 1,
    cardImage: cardImg3,
    title: "Khang Pham Ngoc",
    subTitle: "Chief Financial Officer at Home Credit Vietnam",
    desc: "Home Credit Vietnam CFO Khang Pham Ngoc Tells us how he Came into his Role,and how…",
  },
  {
    id: 1,
    cardImage: cardImg4,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: 1,
    cardImage: cardImg1,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: 1,
    cardImage: cardImg2,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
  {
    id: 1,
    cardImage: cardImg4,
    title: "Avner Papouchado",
    subTitle: "CEO at Serverfarm",
    desc: "With demand only set to grow, Serverfarm continues to pioneer sustainable, innovative and efficient data centre solutions as part ofits long...",
  },
];

const TextualInterviewCard = (props) => {
  const { cardImage, title, subTitle, desc } = props;
  return (
    <div className={styles.cardWrapper}>
      <div>
        <Image src={cardImage} alt="card" />
      </div>
      <div className={styles.cardContent}>
        <h4>{title}</h4>
        <h6>{subTitle}</h6>
        <p>{desc}</p>
        <Link href="#">
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
        </div>
        <Subscribe />
      </Container>
      <div className={styles.card}>
        <Container>
          <Row>
            {data.map((data, index) => {
              return (
                <Col lg={3} md={4} sm={6} xm={12} className="mt-4">
                  <TextualInterviewCard
                    key={index}
                    cardImage={data.cardImage}
                    title={data.title}
                    subTitl={data.subTitle}
                    desc={data.desc}
                  />
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
