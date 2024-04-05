import { Container } from "react-bootstrap";
import styles from "./webinar-all.module.css";
import SectionTitle from "@/components/section-title/section-title";
import Link from "next/link";
import Image from "next/image";
import webinarImg1 from "../../../../public/images/center-card-img1.png";
import MgButton from "@/components/button/button";

const webinarData = [
  {
    id: 1,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
  {
    id: 2,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
  {
    id: 3,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
  {
    id: 4,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
  {
    id: 5,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
  {
    id: 6,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
  {
    id: 7,
    cardImage: webinarImg1,
    title: "australian CIO summit 2024",
    date: "mon 22 july, 2024 . 12:30 GMT. queensland, australia",
    desc: "The Australian CIO Summit aims to foster innovative thinking,share inspiring ideas, and promote community connection.",
  },
];

const WebinarCard = (props) => {
  const { cardImage, title, date, desc } = props;
  return (
    <Link className={styles.webinarCardWrapper} href="#">
      <div className={styles.webinardCard}>
        <div className={styles.webinarCardImg}>
          <Image src={cardImage} alt="pic" />
        </div>
        <div className={styles.webinarCardContent}>
          <div>
            <h5>{title}</h5>
            <h6>{date}</h6>
            <p>{desc}</p>
          </div>
          <div>
            <MgButton>Register Now</MgButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

const WebinarAll = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="All Webinars" />
        <div className={styles.webinarCardContainer}>
          {webinarData.map((data) => {
            return (
              <div className={styles.webinarCardContainerWrap} key={data.id}>
                <WebinarCard {...data} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default WebinarAll;
