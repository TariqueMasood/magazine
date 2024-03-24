import { Container } from "react-bootstrap";
import styles from "./magazine.module.css";
import MagazineList from "@/components/magazine-list/magazine-list";
import SectionTitle from "@/components/section-title/section-title";

const Magazine = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <SectionTitle title="Magazines" />
        </div>
        <MagazineList />
      </Container>
    </div>
  );
};

export default Magazine;
