import { Container } from "react-bootstrap";
import TeamCard from "../team-card/team-card";
import styles from "./team-slider.module.css";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import MgSlider from "../slider/slider";
import teamImg1 from "../../../public/images/team-img1.png";
import teamImg2 from "../../../public/images/team-img2.png";
import teamImg3 from "../../../public/images/team-img3.png";
import { fetchData } from "@/utils/api";

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

const TeamSlider = async () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teams = await fetchData("teams");
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.borderCotainer}>
          <SectionHeader
            subTitle="Our Team"
            desc="Meet the passionate minds behind Project Leaders Magazine dedicated to your success."
          />
          <SectionBorder />
        </div>
        <MgSlider settings={settings}>
          {teams?.results &&
            teams?.results?.map((team) => {
              return <TeamCard key={team.id} team={team} />;
            })}
        </MgSlider>
      </Container>
    </div>
  );
};
export default TeamSlider;
