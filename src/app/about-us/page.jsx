import styles from "./about-us.module.css";
import image1 from "../../../public/images/logo.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.header}>Heading</h2>
      <Image src={image1} alt="image" />
      Blog page
    </div>
  );
};

export default AboutPage;
