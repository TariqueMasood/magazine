import styles from "./section-header.module.css";

const SectionHeader = (props) => {
  return (
    <div className={styles.wrapper}>
      <h4>{props.title}</h4>
      <h1>{props.subTitle}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default SectionHeader;
