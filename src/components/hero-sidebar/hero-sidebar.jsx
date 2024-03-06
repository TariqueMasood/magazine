import Image from "next/image";
import styles from "./hero-sidebar.module.css";
import sidebarImage1 from "../../../public/images/sidebar-img1.png";
import sidebarImage2 from "../../../public/images/sidebar-img2.png";
import sidebarImage3 from "../../../public/images/sidebar-img3.png";

const HeroSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeading}>FEATURED</div>
      <div className={styles.sidebarCardWrapper}>
        <span className={styles.sidebarCardHeading}>
          Laguardia International Airport
        </span>
        <div className={styles.sidebarCard}>
          <span>SEPTEMBER</span>
          <span>Page 30</span>
        </div>
      </div>
      <Image src={sidebarImage1} alt="image" />
      <hr />
      <span className={styles.sidebarCardHeading}>September Prime Focus</span>
      <div className={styles.sidebarCard}>
        <span>SEPTEMBER</span>
        <span>Page 30</span>
      </div>
      <Image src={sidebarImage2} alt="image" />
      <hr />
      <span className={styles.sidebarCardHeading}>
        California Highspeed Railway
      </span>
      <div className={styles.sidebarCard}>
        <span>SEPTEMBER</span>
        <span>Page 30</span>
      </div>
      <Image src={sidebarImage3} alt="image" />
    </div>
  );
};

export default HeroSidebar;
