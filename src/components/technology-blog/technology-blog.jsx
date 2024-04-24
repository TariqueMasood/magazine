import { Container } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import BlogTabs from "../blog-tabs/blog-tabs";

const TechnologyBlog = async () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="TECHNOLOGY" />
        <p>
          Read the latest posts from experts at Knowmed Health Publishing
          covering a variety of health topics and perspectives on medical news.
        </p>
        <BlogTabs />
      </Container>
    </div>
  );
};

export default TechnologyBlog;
