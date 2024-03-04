import Image from "next/image";
import styles from "./hero-magazine.module.css";
import MgButton from "../button/button";
import magazine2Img from "../../../public/images/magazine-Image.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroMagazine = () => {
  return (
    <div className={styles.heroMagazine}>
      <div className={styles.heroMagazineImage}>
        <Image src={magazine2Img} alt="card" />
      </div>
      <div className={styles.magazine}>
        <div>
          <div className={styles.magazineHeading}>
            <div>September 2022</div>
            <MgButton>LATEST EDITION</MgButton>
          </div>
          <div className={styles.magazineContent}>
            We are thrilled to release the latest issue of Project Leaders
            magazine. Projects like never before are driving change across
            organizations. More and more business leaders are seeking to deliver
            value to their organizations through initiatives that make an
            impact. This becomes one of the core reasons to keep you aware of
            the latest news from projects around the globe.
          </div>
        </div>
        <MgButton>
          Read Now <MdKeyboardArrowRight />
        </MgButton>
      </div>
    </div>
  );
};

export default HeroMagazine;
