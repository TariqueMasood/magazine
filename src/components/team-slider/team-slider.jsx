import { Container } from "react-bootstrap";
import TeamCard from "../team-card/team-card";
import styles from "./team-slider.module.css";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import MgSlider from "../slider/slider";
import teamImg1 from "../../../public/images/team-img1.png";
import teamImg2 from "../../../public/images/team-img2.png";
import teamImg3 from "../../../public/images/team-img3.png";

const data = [
  {
    id: 1,
    teamImg: teamImg1,
    title: "ant eksiler",
    subTitle: "Assistant Fashion Editor",
    desc: "Ant is a reporter for the Project Leaders Magazine, specializing in celebrities, fashion, & entertainment.",
  },
  {
    id: 2,
    teamImg: teamImg2,
    title: "Darlene Robertson",
    subTitle: "Assistant Tech Editor",
    desc: "Ant is a reporter for the Project Leaders Magazine, specializing in celebrities, fashion, & entertainment.",
  },
  {
    id: 3,
    teamImg: teamImg3,
    title: "Jenny Wilson",
    subTitle: "Assistant Kitchen Editor",
    desc: "Ant is a reporter for the Project Leaders Magazine, specializing in celebrities, fashion, & entertainment.",
  },
];

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
        <SectionHeader
          subTitle="Our Team"
          desc="Ready variety of layouts for blog posts and other pages."
        />
        <SectionBorder />
        <MgSlider settings={settings}>
          {data.map((data, index) => {
            return (
              <TeamCard
                key={index}
                teamImg={data.teamImg}
                title={data.title}
                subTitle={data.subTitle}
                desc={data.desc}
              />
            );
          })}
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </MgSlider>
      </Container>
    </div>
  );
};
export default TeamSlider;
