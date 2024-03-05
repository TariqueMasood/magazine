import Image from "next/image";
import styles from "./spotlight-card.module.css";
import MgButton from "../button/button";
import writerImg from "../../../public/images/writer-1.png";
import calendarIcon from "../../../public/images/calendar-icon.png";
import fileIcon from "../../../public/images/file-icon.png";

const SpotLightCard = (props) => {
  const { blogImg, title, desc, profileImg, name } = props;
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image src={blogImg} alt="card" width={328} />
        <div className={styles.btnContainer}>
          <MgButton>AI & Machine Learning</MgButton>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <div className={styles.name}>
            <Image src={profileImg} alt="name" />
            <span>{name}</span>
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
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SpotLightCard;
