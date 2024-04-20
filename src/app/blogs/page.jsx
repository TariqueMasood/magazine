import NewsLetter from "@/components/news-letter/news-letter";
import styles from "./blogs.module.css";
import RecentBlog from "@/components/recent-blog/recent-blog";
import TechnologyBlog from "@/components/technology-blog/technology-blog";
import SectionHeader from "@/components/section-header/section-header";
import Subscribe from "@/components/subscribe/subscribe";

const BlogPage = async () => {
  return (
    <div className={styles.wrapper}>
      <RecentBlog />
      <TechnologyBlog />
    </div>
  );
};

export default BlogPage;
