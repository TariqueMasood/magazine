import styles from "./section-header.module.css";

const SectionHeader = (props) => {
  const { style, title, subTitle, desc } = props;
  return (
    <div className={styles.wrapper}>
      <h4 style={style}>{title}</h4>
      <h1 style={style}>{subTitle}</h1>
      <p style={style}>{desc}</p>
    </div>
  );
};

export default SectionHeader;
