import Image from "next/image";
import styles from "./hero.module.css";
import card1Img from "../../../public/images/card1-img1.svg";
import magazine2Img from "../../../public/images/card2-Img1.svg";

const Hero = () => {
  return (
    <div>
      <div className={`container ${styles.card}`}>
        <div className={styles.card1}>
          <div className={styles.card1Heading}>FEATURED</div>
          <Image src={card1Img} />
          <div className={styles.card1Titles}>
            EY CEO Outlook: AI Being Adopted as a Driver of Efficiency
          </div>
          <div className={styles.card1Content}>
            EY’s CEO Outlook Pulse Study Shows Business Leaders are Adopting AI
            Technologies to Drive Efficiencies and Improve Their Organisation’s
            Performance
          </div>
        </div>
        <div className={styles.heroMagazine}>
          <Image src={magazine2Img} />
          <div className={styles.magazine}>
            <div className={styles.magazineHeading}>
              <div>September 2022</div>
              <div>LATEST EDITION</div>
            </div>
            <div>
              We are thrilled to release the latest issue of Project Leaders
              magazine. Projects like never before are driving change across
              organizations. More and more business leaders are seeking to
              deliver value to their organizations through initiatives that make
              an impact. This becomes one of the core reasons to keep you aware
              of the latest news from projects around the globe
            </div>
            <button>Read Now</button>
          </div>
        </div>
        <div className={styles.card3}>3</div>
      </div>
    </div>
  );
};

export default Hero;
