import Image from "next/image";
import styles from "./testimonial.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = (props) => {
  const { title, userImg, userName, userPost, company } = props;
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <div className={styles.imgContainer}>
        <Image src={userImg} alt="user" width={60} height={60} />
        <div className={styles.user}>
          <h4>{userName}</h4>
          <p>
            <span>{userPost}, </span>
            <span>{company}</span>
          </p>
        </div>
      </div>
      <div className={styles.quoteCss}>
        <FaQuoteLeft />
      </div>
    </div>
  );
};

export default TestimonialCard;
