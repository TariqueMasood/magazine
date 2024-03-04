import { Container } from "react-bootstrap";
import TeamCard from "../team-card/team-card";
import styles from "./team-slider.module.css";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";

const TeamSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionHeader
          subTitle="Our Team"
          desc="Ready variety of layouts for blog posts and other pages."
        />
        <SectionBorder />
        <TeamCard />
      </Container>
    </div>
  );
};
export default TeamSlider;
