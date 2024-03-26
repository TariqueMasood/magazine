import Link from "next/link";
import styles from "./social-icon.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialIcon = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.socialIcon}>
        <Link
          style={props.style}
          target="--blank"
          href="https://www.facebook.com/projectleadersmagazine"
        >
          <FaFacebookF />
        </Link>
        <Link
          style={props.style}
          target="--blank"
          href="https://www.linkedin.com/company/projectleadersmagazine/"
        >
          <FaLinkedin />
        </Link>
        <Link
          style={props.style}
          target="--blank"
          href="http://www.youtube.com/@ProjectLeadersMagazine-jd8lh"
        >
          <FaYoutube />
        </Link>
        <Link
          style={props.style}
          target="--blank"
          href="https://www.instagram.com/projectleadersmagazine/"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;
