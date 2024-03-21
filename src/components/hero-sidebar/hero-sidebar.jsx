import Image from "next/image";
import styles from "./hero-sidebar.module.css";
import sidebarImage1 from "../../../public/images/sidebar-img1.png";
import sidebarImage2 from "../../../public/images/sidebar-img2.png";
import sidebarImage3 from "../../../public/images/sidebar-img3.png";
import SectionBorder from "../section-border/section-border";

const FeatureCard = (props) => {
  const { image, title, date, page } = props;
  return (
    <div className={styles.featuredCardContainer}>
      <div className={styles.sidebarCardWrapper}>
        <span className={styles.sidebarCardHeading}>{title}</span>
        <div className={styles.sidebarCard}>
          <span>{date}</span>
          <span>{page}</span>
        </div>
      </div>
      <Image src={image} alt="image" />
    </div>
  );
};

const HeroSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarHeading}>FEATURED</div>
        <SectionBorder />
      </div>
      <FeatureCard
        image={sidebarImage1}
        title="Laguardia International Airport"
        date="september"
        page="20"
      />
      <FeatureCard
        image={sidebarImage2}
        title="September Prime Focus"
        date="september"
        page="30"
      />
      <FeatureCard
        image={sidebarImage3}
        title="California Highspeed Railway"
        date="september"
        page="10"
      />
    </div>
  );
};

export default HeroSidebar;
