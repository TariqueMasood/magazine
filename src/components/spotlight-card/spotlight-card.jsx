import Image from "next/image";
import styles from "./spotlight-card.module.css";
import calendarIcon from "../../../public/images/calendar-icon.png";
import fileIcon from "../../../public/images/file-icon.png";
import Link from "next/link";

const SpotLightCard = (props) => {
  const { id, blogImg, title, desc, profileImg, name } = props.data;

  return (
    <Link href={`/blogs/${id}`} className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <Image src={blogImg} alt="card" className={styles.blogImage} />
          <div className={styles.badge}>AI & Machine Learning</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.info}>
            <div className={styles.name}>
              {/* <Image src={profileImg} alt="name" /> */}
              <span>Name</span>
            </div>
            <div className={styles.date}>
              {/* <Image src={calendarIcon} alt="calendar" /> */}
              <span>Calender</span>
              <span>{new Date(published_date).toGMTString()}</span>
            </div>
            <div className={styles.file}>
              {/* <Image src={fileIcon} alt="file" /> */}
              file icon
              <span>20</span>
            </div>
          </div>
          <h4>{title}...</h4>
          {/* <p className={styles.cardConten}>{subtitle}...</p> */}
          <div
            className={styles.cardContent}
            dangerouslySetInnerHTML={createMarkup(content)}
          />
        </div>
      </div>
    </Link>
  );
};

export default SpotLightCard;
