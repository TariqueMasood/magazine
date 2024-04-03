import BlogHero from "@/components/blog-hero/blog-hero";
import styles from "./blogs.module.css";
import RecentBlog from "@/components/recent-blog/recent-blog";
import TechnologyBlog from "@/components/technology-blog/technology-blog";

const BlogPage = async () => {
  return (
    <div className={styles.wrapper}>
      <RecentBlog />
      <TechnologyBlog />
      <BlogHero />
    </div>
  );
};

export default BlogPage;
