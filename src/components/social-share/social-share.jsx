import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import styles from "./social-share.module.css";

const SocialShare = () => {
  return (
    <div className="d-flex-column gap-5">
      <label className={styles.shareLabel}>SHARE</label>
      <div className="mt-2">
        <div className={`${styles.wrapper}`}>
          <div className={`d-flex flex-row gap-3  ${styles.socialIcon}`}>
            <Link
              target="--blank"
              href="https://www.facebook.com/projectleadersmagazine"
            >
              <FaFacebookF className="bi-3x" />
            </Link>
            <Link
              target="--blank"
              href="https://www.linkedin.com/company/projectleadersmagazine/"
            >
              <FaLinkedin className="bi-3x" />
            </Link>
            <Link
              target="--blank"
              href="http://www.youtube.com/@ProjectLeadersMagazine-jd8lh"
            >
              <FaYoutube className="bi-3x" />
            </Link>
            <Link
              target="--blank"
              href="https://www.instagram.com/projectleadersmagazine/"
            >
              <FaInstagram className="bi-3x" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
