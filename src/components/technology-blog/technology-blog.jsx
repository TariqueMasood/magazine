import { Container, Row } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import BlogCard from "../blog-card/blog-card";

const TechnologyBlog = (props) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="TECHNOLOGY BLOGS" />
        <p>
          Read the latest posts from experts at Knowmed Health Publishing
          covering a variety of health topics and perspectives on medical news.
        </p>
        <Row>
          {props.data.results.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TechnologyBlog;
