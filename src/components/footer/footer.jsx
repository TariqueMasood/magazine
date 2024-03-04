import Image from "next/image";
import styles from "./footer.module.css";
import footerLogo from "../../../public/images/footer-logo.svg";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.containerWrapper}>
            <div className={styles.footerLogo}>
              <Link href="/">
                <Image src={footerLogo} width={190} height={120} alt="logo" />
              </Link>
              <div className={styles.footerLogoDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae tempor ex, quis vestibulum nibh. Aenean ornare elit
                porttitor malesuada volutpat.
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <div className={styles.footerLinkTitle}>EXPLORE</div>
                <nav>
                  <ul>
                    <li>
                      <Link href="/news-article">News & Articles</Link>
                    </li>
                    <li>
                      <Link href="/magazine">Magazine</Link>
                    </li>
                    <li>
                      <Link href="/webinar">Webinars</Link>
                    </li>
                    <li>
                      <Link href="#">Sectors</Link>
                    </li>
                    <li>
                      <Link href="#">Events</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <div className={styles.footerLinkTitle}>COMPPANY</div>
                <nav>
                  <ul>
                    <li>
                      <Link href="/about-us">About us</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Feedback</Link>
                    </li>
                    <li>
                      <Link href="#">Report a problem</Link>
                    </li>
                    <li>
                      <Link href="#">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={styles.socialContainer}>
                <div className={styles.contact}>
                  <div className={styles.footerLinkTitle}>FOLLOW US</div>
                  <div className={styles.tollFree}>Toll Free - 0123456789</div>
                  <div className={styles.tollFree}>
                    Email : feedback@nestnotify.com
                  </div>
                </div>
                <div className={styles.social}>
                  <div className={styles.footerLinkTitle}>CONNECT WITH US</div>
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
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div className={styles.footerCopyright}>
        <Container>
          © 2023 Project Leaders Magazine - All Rights Reserved.
        </Container>
      </div>
    </>
  );
};

export default Footer;
