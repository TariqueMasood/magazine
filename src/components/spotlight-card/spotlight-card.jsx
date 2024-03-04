import Image from "next/image";
import styles from "./spotlight-card.module.css";
import image from "../../../public/images/spotlight-img-1.png";
import MgButton from "../button/button";
import writerImg from "../../../public/images/writer-1.png";
import calendarIcon from "../../../public/images/calendar-icon.png";
import fileIcon from "../../../public/images/file-icon.png";

const SpotLightCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image src={image} alt="card" />
        <div className={styles.btnContainer}>
          <MgButton>AI & Machine Learning</MgButton>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <div className={styles.name}>
            <Image src={writerImg} alt="name" />
            <span>Marcus Law</span>
          </div>
          <div className={styles.date}>
            <Image src={calendarIcon} alt="calendar" />
            <span>Jun 16, 2023</span>
          </div>
          <div className={styles.file}>
            <Image src={fileIcon} alt="file" />
            <span>20</span>
          </div>
        </div>
        <h4>Alibaba Cloud Helping Enterprises Harness Gen AI</h4>
        <p>
          One of the World’s Largest Cloud Companies, Alibaba Cloud is Helping
          Enterprise Customers Harness the Power of Generative AI
        </p>
      </div>
    </div>
  );
};

export default SpotLightCard;
