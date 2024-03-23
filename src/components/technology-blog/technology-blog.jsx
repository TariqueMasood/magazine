import { Container } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import BlogCard from "../blog-card/blog-card";
import { getData } from "@/app/page";

const TechnologyBlog = async () => {
  const data = await getData();
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="TECHNOLOGY BLOGS" />
        <p>
          Read the latest posts from experts at Knowmed Health Publishing
          covering a variety of health topics and perspectives on medical news.
        </p>
        <div class={styles.blogCardContainer}>
          {data.results.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TechnologyBlog;
