import { Container } from "react-bootstrap";
import styles from "./webinar.module.css";
import SectionTitle from "@/components/section-title/section-title";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import webinarImg1 from "../../../public/images/center-card-img1.png";
import MgButton from "@/components/button/button";

const FeaturedCard = () => {
  return (
    <Link className={styles.FeaturedCardWrapper} href="#">
      <div className={styles.featuredCard}>
        <div className={styles.featuredCardImg}>
          <Image
            className={styles.featuredCardImg}
            src={webinarImg1}
            alt="webinarImage"
          />
        </div>
        <div className={styles.featuredCardContentWrapper}>
          <div className={styles.featuredCardContent}>
            <span className={styles.featuredCardTitle}>featured</span>
            <h3 className={styles.featuredCardContentHeading}>
              tech & AI live london 2024
            </h3>
            <div className={styles.featuredCardDate}>
              Tue 21 May, 2024. 14:00 GMT. Online (virtual)
            </div>
            <div className={styles.featuredCardDetail}>
              connecting tech & AI leaders across europe
            </div>
          </div>
          <MgButton>
            Register Now <MdKeyboardArrowRight />
          </MgButton>
        </div>
      </div>
    </Link>
  );
};

const WebinarCard = () => {
  return (
    <Link className={styles.webinarCardWrapper} href="#">
      <div className={styles.webinardCard}>
        <div className={styles.webinarCardImg}>
          <Image src={webinarImg1} alt="pic" />
        </div>
        <div className={styles.webinarCardContent}>
          <div>
            <h5>australian CIO summit 2024</h5>
            <h6>mon 22 july, 2024 . 12:30 GMT. queensland, australia</h6>
            <p>
              The Australian CIO Summit aims to foster innovative thinking,
              share inspiring ideas, and promote community connection.
            </p>
          </div>
          <div>
            <MgButton>Register Now</MgButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Webinar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.viewAll}>
          <SectionTitle title="Webinars" />
          <Link href="/webinar/webinar-all">
            View All <MdKeyboardArrowRight />
          </Link>
        </div>
        <div className={styles.cardWrapper}>
          <div>
            <div className={styles.featuredCardSection}>
              <FeaturedCard />
            </div>
            <div className={styles.webinarCardCotainer}>
              <div>
                <WebinarCard />
              </div>
              <div>
                <WebinarCard />
              </div>
              <div>
                <WebinarCard />
              </div>
            </div>
          </div>
          <div className={styles.webinarAds}>Ads</div>
        </div>
      </Container>
    </div>
  );
};

export default Webinar;
