import Image from "next/image";
import styles from "./testimonial.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = (props) => {
  const { title, userImg, userName, userPost, company } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.title}>{title}</p>
        <div className={styles.imgContainer}>
          <Image src={userImg} alt="user" width={60} height={60} />
          <div className={styles.user}>
            <h4 className={styles.name}>{userName}</h4>
            <p className={styles.nameAndCompany}>
              <span>{userPost}, </span>
              <span>{company}</span>
            </p>
          </div>
        </div>
        <div className={styles.quoteCss}>
          <FaQuoteLeft />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
