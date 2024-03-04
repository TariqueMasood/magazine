import { Container } from "react-bootstrap";
import TeamCard from "../team-card/team-card";
import styles from "./team-slider.module.css";

const TeamSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <TeamCard />
      </Container>
    </div>
  );
};
export default TeamSlider;
