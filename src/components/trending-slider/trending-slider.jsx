import Image from "next/image";
import styles from "./trending-slider.module.css";
import asideImg from "../../../public/images/card1-img1.svg";

const TrendingSlider = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideHeading}>TRENDING</div>
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
  );
};

export default TrendingSlider;
