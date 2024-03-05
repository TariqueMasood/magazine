import Image from "next/image";
import styles from "./testimonial.module.css";

const TestimonialCard = (props) => {
  const { title, userImg, userName, userPost } = props;
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <div className={styles.imgContainer}>
        <Image src={userImg} alt="user" />
        <div className={styles.user}>
          <h4>{userName}</h4>
          <p>{userPost}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
