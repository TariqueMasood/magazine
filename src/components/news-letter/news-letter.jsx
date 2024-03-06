import styles from "./news-letter.module.css";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import Subscribe from "../subscribe/subscribe";
import { Container } from "react-bootstrap";
import SocialIcon from "../social-icon/social-icon";

const NewsLetter = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionHeader
          title="News Letter"
          subTitle="Subscribe to monthly creative magazine"
          desc="Get notified to our exclusive releases & events."
        />
        <SectionBorder />
        <Subscribe />
        <SocialIcon style={{ color: "#000" }} />
      </Container>
    </div>
  );
};

export default NewsLetter;
