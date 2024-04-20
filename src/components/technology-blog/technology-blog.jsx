import { Container } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import { fetchData } from "@/utils/api";
import BlogTabs from "../blog-tabs/blog-tabs";
import dynamic from "next/dynamic";

const MgPagination = dynamic(() => import("../pagination/pagination"), {
  ssr: false,
});

const TechnologyBlog = async () => {
  let offset = 0;
  let data = await fetchData(`blogs/?limit=3&offset=${offset}`);

  function fetchCategory(category) {
    return data.results?.filter((data) => data.category.slug === category);
  }

  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="TECHNOLOGY" />
        <p>
          Read the latest posts from experts at Knowmed Health Publishing
          covering a variety of health topics and perspectives on medical news.
        </p>
        <BlogTabs data={data} />
        {/* <MgPagination /> */}
      </Container>
    </div>
  );
};

export default TechnologyBlog;
