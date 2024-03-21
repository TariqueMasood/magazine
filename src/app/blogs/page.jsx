import BlogHero from "@/components/blog-hero/blog-hero";
import styles from "./blogs.module.css";
import RecentBlog from "@/components/recent-blog/recent-blog";
import TechnologyBlog from "@/components/technology-blog/technology-blog";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPage = async () => {
  const data = await getData();
  return (
    <div className={styles.wrapper}>
      <BlogHero />
      <RecentBlog />
      <TechnologyBlog
        data={data}
        pageSize={30}
        country="in"
        category="sports"
      />
    </div>
  );
};

export default BlogPage;
