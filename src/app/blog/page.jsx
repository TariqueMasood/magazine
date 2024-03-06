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
