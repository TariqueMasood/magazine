import Link from "next/link";
import styles from "./social-icon.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.socialIcon}>
        <Link href="#">
          <FaFacebookF />
        </Link>
        <Link href="#">
          <FaTwitter />
        </Link>
        <Link href="#">
          <FaYoutube />
        </Link>
        <Link href="#">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;
