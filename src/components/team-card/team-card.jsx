import Image from "next/image";
import styles from "./team-card.module.css";

const TeamCard = (props) => {
  const { teamImg, title, subTitle, desc } = props;

  return (
    <div className={styles.card}>
      <Image src={teamImg} alt="team-img" className={styles.imgCss} />
      <h3>{title}</h3>
      <h4>{subTitle}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default TeamCard;
