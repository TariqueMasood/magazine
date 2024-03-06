import SectionHeader from "../section-header/section-header";
import Subscribe from "../subscribe/subscribe";
import styles from "./blog-hero.module.css";

const BlogHero = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader
        subTitle="Embracing Curiosity: Unveiling Insight, Ideas, and Inspiration"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum pellentesque rutrum."
      />
      <Subscribe />
    </div>
  );
};

export default BlogHero;
