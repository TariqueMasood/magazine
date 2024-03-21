import SectionBorder from "../section-border/section-border";
import styles from "./section.title.module.css";

const SectionTitle = (props) => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionHeading}>{props.title}</h2>
      <SectionBorder />
    </div>
  );
};

export default SectionTitle;
