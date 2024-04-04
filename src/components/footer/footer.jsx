import Image from "next/image";
import styles from "./footer.module.css";
import footerLogo from "../../../public/images/bizlink-media-logo.png";
import Link from "next/link";
import { Container } from "react-bootstrap";
import SocialIcon from "../social-icon/social-icon";
import dynamic from "next/dynamic";

const ScrollButton = dynamic(() => import("../scroll-button/scroll-button"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.containerWrapper}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Image
                className={styles.footerImage}
                src={footerLogo}
                alt="logo"
              />
            </Link>
            <div className={styles.footerLogoDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae tempor ex, quis vestibulum nibh. Aenean ornare elit
              porttitor malesuada volutpat.
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.footerColumnCss}>
            <div className={styles.footerLinkTitle}>EXPLORE</div>
            <ul className={styles.navLists}>
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
          </div>
          <div className={styles.footerColumnCss}>
            <div className={styles.footerLinkTitle}>COMPANY</div>
            <ul className={styles.navLists}>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              {/* <li>
                    <Link href="term-condition">Terms & Conditions</Link>
                  </li> */}
              <li>
                <Link href="#">Feedback</Link>
              </li>
              <li>
                <Link href="#">Report a problem</Link>
              </li>
              <li>
                <Link href="#">Testimonials</Link>
              </li>
              {/* <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li> */}
            </ul>
          </div>
          <div className={styles.footerColumnCss}>
            <div className={styles.socialContainer}>
              <div className={styles.contact}>
                <div className={styles.footerLinkTitle}>CONTACT US</div>
                {/* <div className={styles.tollFree}>Toll Free - 0123456789</div> */}
                <div className={styles.tollFree}>
                  Email
                  <a
                    href="mailto:media.services@bizlinkmedia.com"
                    target="--blank"
                  >
                    : media.services@bizlinkmedia.com
                  </a>
                </div>
              </div>
              <div className={styles.social}>
                <div className={styles.footerLinkTitle}>CONNECT WITH US</div>
                <SocialIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          © 2023 Project Leaders Magazine - All Rights Reserved.
        </div>
      </Container>
      <ScrollButton />
    </footer>
  );
};

export default Footer;
