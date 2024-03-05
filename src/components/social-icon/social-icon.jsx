import Link from "next/link";
import styles from "./social-icon.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialIcon = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.socialIcon}>
        <Link style={props.style} href="#">
          <FaFacebookF />
        </Link>
        <Link style={props.style} href="#">
          <FaTwitter />
        </Link>
        <Link style={props.style} href="#">
          <FaYoutube />
        </Link>
        <Link style={props.style} href="#">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;
