import Image from "next/image";
import styles from "./team-card.module.css";

const TeamCard = (props) => {
  const { profile_pic, name, designation } = props.team;

  return (
    <div className={styles.card}>
      <Image
        src={profile_pic}
        alt={name}
        className={styles.imgCss}
        width={164}
        height={164}
      />
      <h3>{name}</h3>
      <h4>{designation}</h4>
    </div>
  );
};

export default TeamCard;
