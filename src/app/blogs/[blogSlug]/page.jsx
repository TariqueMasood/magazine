import { Container } from "react-bootstrap";
import styles from "../blogs.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogImage from "../../../../public/images/spotlight-img-3.png";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import { fetchData } from "@/utils/api";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurifyServer = DOMPurify(window);

export const getSingleData = async (id) => {
  const data = await fetchData("blogs");
  const singleBlog = data.results.find((data) => data.id === parseInt(id));

  return singleBlog;
};

export async function generateMetadata({ params }) {
  const { blogSlug } = params;
  const blog = await getSingleData(blogSlug);

  if (!blog) {
    notFound();
  }

  return {
    title: blog?.title,
    desc: blog?.desc,
  };
}

const SingleBlog = async (props) => {
  const { blogSlug } = props.params;
  const blog = await getSingleData(blogSlug);

  // function createMarkup(markup) {
  //   return { __html: DOMPurifyServer.sanitize(markup) };
  // }

  function createMarkup(markup) {
    const baseURL = "http://api.projectleadersmagazine.com:8000";
    const modifiedHTML = markup.replace(/src="([^"]+)"/g, `src="${baseURL}$1"`);
    return modifiedHTML;
  }

  return (
    <div className={styles.SigleBlogWrapper}>
      <Container>
        <h1 className={styles.singleBlogTitle}>{blog?.title}</h1>
        <p className={styles.singleBlogSubTitle}>{blog?.subtitle}</p>
        <div className={styles.singlgeBlogImg}>
          <Image
            src={blog?.image !== null ? blog?.image : blogImage}
            alt="card"
            width={500}
            height={400}
          />
        </div>
        <div className={styles.blogDate}>
          {new Date(blog?.published_date).toGMTString()}
        </div>
        <div
          className={styles.cardContent}
          dangerouslySetInnerHTML={{ __html: createMarkup(blog?.content) }}
        />
        <div className={styles.blogBorder}></div>
        <div className={styles.sliderWrapper}>
          <SpotLightSlider />
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;
