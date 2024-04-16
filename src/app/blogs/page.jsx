import NewsLetter from "@/components/news-letter/news-letter";
import styles from "./blogs.module.css";
import RecentBlog from "@/components/recent-blog/recent-blog";
import TechnologyBlog from "@/components/technology-blog/technology-blog";
import SectionHeader from "@/components/section-header/section-header";
import Subscribe from "@/components/subscribe/subscribe";

const BlogPage = async () => {
  return (
    <div className={styles.wrapper}>
      <div className="text-center pt-5">
        <SectionHeader
          title="News Letter"
          subTitle="Subscribe to monthly creative magazine"
          desc="Get notified to our exclusive releases & events."
        />
        <Subscribe />
      </div>
      <RecentBlog />
      <TechnologyBlog />
    </div>
  );
};

export default BlogPage;
