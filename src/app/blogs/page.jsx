import BlogHero from "@/components/blog-hero/blog-hero";
import styles from "./blogs.module.css";
import RecentBlog from "@/components/recent-blog/recent-blog";
import TechnologyBlog from "@/components/technology-blog/technology-blog";

async function getData() {
  const res = await fetch("https://projectleadersmagazine.com/api/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPage = async () => {
  const data = await getData();
  return (
    <div className={styles.wrapper}>
      <TechnologyBlog data={data} />
      <RecentBlog />
      <BlogHero />
    </div>
  );
};

export default BlogPage;
