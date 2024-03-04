import Image from "next/image";
import styles from "./team-card.module.css";
import teamImg1 from "../../../public/images/team-img1.png";

const TeamCard = () => {
  return (
    <div className={styles.card}>
      <Image src={teamImg1} alt="team-img" className={styles.imgCss} />
      <h3>ant eksiler</h3>
      <h4>Assistant Fashion Editor</h4>
      <p>
        Ant is a reporter for the Project Leaders Magazine, specializing in
        celebrities, fashion, & entertainment.
      </p>
    </div>
  );
};

export default TeamCard;
