import { Container } from "react-bootstrap";
import TeamCard from "../team-card/team-card";
import styles from "./team-slider.module.css";
import MgSlider from "../slider/slider";

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.sliderWrapper}>
          <MgSlider settings={settings}>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </MgSlider>
        </div>
      </Container>
    </div>
  );
};
export default TeamSlider;
