import { Container } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import BlogTabs from "../blog-tabs/blog-tabs";

const TechnologyBlog = async () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="News & Articles" />
        <p>
          Your one-stop shop for the latest project leadership news, insightful
          articles & practical strategies.
        </p>
        <BlogTabs />
      </Container>
    </div>
  );
};

export default TechnologyBlog;
