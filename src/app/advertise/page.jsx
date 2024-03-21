import styles from "./advertise.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";

const AdvertiseHero = () => {
  return (
    <div className={styles.AdvertiseHeroWrapper}>
      <div className={styles.heroTitle}>
        <h1>Advertise with</h1>
        <h1>Poject Leader</h1>
        <Link href="#">Download Media Kit</Link>
      </div>
    </div>
  );
};

const Advertise = () => {
  return (
    <div className={styles.wrapper}>
      <AdvertiseHero />
      <Container></Container>
    </div>
  );
};

export default Advertise;
