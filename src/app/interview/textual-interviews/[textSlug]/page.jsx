import styles from "./textual-details.module.css";
import { getSingleTextualData } from "../page";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import HeroSidebar from "@/components/hero-sidebar/hero-sidebar";
import authorImg from "../../../../../public/images/textual-author-img1.png";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import BoxAds from "@/components/ads/box-ads";
import SectionAds from "@/components/ads/section-ads";
import TowerAds from "@/components/ads/tower-ads";

const AuthorCard = (props) => {
  const { heading, authorImg, title, desc, linkText, viewPost } = props;
  return (
    <div className={styles.authorCard}>
      <h4>{heading}</h4>
      <div className={styles.nameBorder}></div>
      <Row>
        <Col lg={3}>
          <div className={styles.cardImg}>
            <Image src={authorImg} alt="img" />
          </div>
        </Col>
        <Col lg={9}>
          <div className={styles.authorContent}>
            <div>
              <h6>{title}</h6>
              <p>
                {desc}
                <span>
                  <Link href="#">{linkText}</Link>
                </span>
              </p>
            </div>
            <div className={styles.authorAllPost}>
              {viewPost}
              <HiArrowNarrowRight />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const TextualInterviewsDetails = async ({ params }) => {
  const { textSlug } = params;

  const getSingleTextualInterview = await getSingleTextualData(textSlug);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.containerTitle}>
          <h4>
            With demand only set to grow, Serverfarm continues to pioneer
            sustainable, innovative and efficient data centre solutions as part
            of its long-term strategy
          </h4>
          <div className={styles.card}>
            <Row>
              <Col lg={9}>
                <Row>
                  <Col lg={4}>
                    <div className={styles.cardContainer}>
                      <Image
                        src={getSingleTextualInterview.cardImage}
                        alt="card"
                      />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className={styles.cardContent}>
                      <h2>{getSingleTextualInterview.title}</h2>
                      <h6>{getSingleTextualInterview.subTitle}</h6>
                      <p>
                        By <span>Marcus Law</span>, MD, Senior Faculty Editor,
                        Harvard Health Publishing
                      </p>
                      <div className={styles.cardDate}>March 08, 2024</div>
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
              <div>{getSingleTextualInterview.desc}</div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                voluptas facere animi expedita, tenetur dolor eum iusto laborum.
                Sint, reiciendis! Explicabo, itaque repellendus fuga nam
                dignissimos commodi autem consequatur blanditiis voluptate
                inventore. Dolore ipsa obcaecati eaque animi vitae recusandae
                aperiam illum ullam cum iste ipsum similique ipsam explicabo
                corporis amet rem adipisci, et nam possimus quam accusamus
                magnam? Corporis natus saepe voluptate excepturi nisi
                perspiciatis quibusdam aspernatur. Mollitia expedita ipsum
                aliquam at harum unde, ipsa animi excepturi fugiat numquam
                corporis ad voluptatum molestias laudantium cumque earum quo
                cupiditate enim illum. Eaque provident perferendis expedita
                nesciunt. Aliquid accusantium consectetur adipisci explicabo
                asperiores iusto facere, labore nemo commodi nulla? Cupiditate
                ipsum dolor sapiente voluptate ipsam fugiat aliquam praesentium
                quisquam omnis consequuntur voluptates sint, nemo, itaque aut.
                Commodi, quibusdam corporis beatae saepe labore quas. Nulla eos
                dolor alias eaque eius delectus, mollitia obcaecati quo nesciunt
                quidem? Illo, vero esse? Repellat, dolorem ex reiciendis ipsum
                soluta fuga laborum odit, ipsa, velit modi odio? Labore quas,
                molestiae eos similique quae consequuntur atque tempora optio
                corporis saepe, iste aspernatur exercitationem earum maxime
                nobis nisi, dolorem voluptatibus aut sit sequi temporibus a!
                Dignissimos voluptatem asperiores sapiente cumque saepe.
                Praesentium, necessitatibus? Voluptatum maiores similique earum
                officiis eum natus!
              </div>
            </Col>
            <Col lg={4}>
              <div>
                <HeroSidebar />
              </div>
              <TowerAds />
            </Col>
          </Row>
          <div className={`my-4 ${styles.border}`}></div>
        </div>
        <div className={styles.related}>
          <div>
            <div>Related Interviews</div>
            <Link href="#">
              View All <MdKeyboardArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TextualInterviewsDetails;
