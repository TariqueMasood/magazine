import Image from "next/image";
import styles from "./testimonial.module.css";
import useImg1 from "../../../public/images/testimonial-img1.png";

const TestimonialCard = () => {
  return (
    <div className={styles.card}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        non lectus rutrum, congue nisl id, iaculis lorem.
      </p>
      <div className={styles.imgContainer}>
        <Image src={useImg1} alt="user" />
        <div className={styles.user}>
          <h4>rob zuber</h4>
          <p>ceo</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
