import BlogHero from "@/components/blog-hero/blog-hero";
import styles from "./blog.module.css";
import { Container } from "react-bootstrap";
import RecentBlog from "@/components/recent-blog/recent-blog";
import TechnologyBlog from "@/components/technology-blog/technology-blog";

const BlogPage = () => {
  return (
    <div className={styles.wrapper}>
      <BlogHero />
      <RecentBlog />
      <TechnologyBlog />
    </div>
  );
};

export default BlogPage;
import styles from "./blog.module.css";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Header</h1>
      Blog page
    </div>
  );
};

export default Blogs;
