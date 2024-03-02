import Image from "next/image";
import styles from "./hero.module.css";
import asideImg from "../../../public/images/card1-img1.svg";
import magazine2Img from "../../../public/images/magazine-Image.png";
import sidebarImage1 from "../../../public/images/sidebar-img1.png";
import { Button } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className={`container ${styles.card}`}>
        <div className={styles.aside}>
          <div className={styles.asideHeading}>FEATURED</div>
          <Image src={asideImg} alt="card" />
          <div className={styles.asideTitles}>
            EY CEO Outlook: AI Being Adopted as a Driver of Efficiency
          </div>
          <div className={styles.asideContent}>
            EY’s CEO Outlook Pulse Study Shows Business Leaders are Adopting AI
            Technologies to Drive Efficiencies and Improve Their Organisation’s
            Performance
          </div>
        </div>
        <div className={styles.heroMagazine}>
          <div className="heroMagazineImage">
            <Image src={magazine2Img} alt="card" />
          </div>
          <div className={styles.magazine}>
            <div className={styles.magazineHeading}>
              <div>September 2022</div>
              <Button>LATEST EDITION</Button>
            </div>
            <div className={styles.magazineContent}>
              We are thrilled to release the latest issue of Project Leaders
              magazine. Projects like never before are driving change across
              organizations. More and more business leaders are seeking to
              deliver value to their organizations through initiatives that make
              an impact. This becomes one of the core reasons to keep you aware
              of the latest news from projects around the globe.
            </div>
            <Button className={styles.magazineReadBtn}>
              Read Now <MdKeyboardArrowRight />
            </Button>
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeading}>FEATURED</div>
          <div className={styles.sidebarContent}>
            <div>
              <span>Laguardia International Airport</span>
              <div>
                <span>SEPTEMBER</span>
                <span>Page 30</span>
              </div>
            </div>
            <div>
              <Image src={sidebarImage1} alt="image"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
