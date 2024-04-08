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

  function createMarkup(markup) {
    return { __html: DOMPurifyServer.sanitize(markup) };
  }

  return (
    <div className={styles.SigleBlogWrapper}>
      <Container>
        <h1 className={styles.singleBlogTitle}>{blog?.title}</h1>
        <p className={styles.singleBlogSubTitle}>
          A shorter-than-usual band of tissue may restrict tongue movements yet
          cause no serious problems.
        </p>
        <div className={styles.singlgeBlogImg}>
          <Image
            src={blog?.image !== null ? blog?.image : blogImage}
            alt="card"
            width={500}
            height={400}
          />
        </div>
        <div className={styles.blogWriter}>
          By <span>Claire McCarthy</span>, MD, Senior Faculty Editor, Harvard
          Health Publishing
        </div>
        <div className={styles.blogDate}>
          {new Date(blog?.published_date).toLocaleDateString()}
        </div>
        <div
          className={styles.cardContent}
          dangerouslySetInnerHTML={createMarkup(blog?.content)}
        />
        <h3 className={styles.blogSubTitle}>How common are tongue-ties?</h3>
        <p className={styles.blogSubContent}>
          Tongue-ties are common. It&apos;s hard to say exactly how common, as
          people define this condition differently. About 8% of babies under age
          one may have at least a mild tongue-tie.
        </p>
        <div className={styles.blogBorder}></div>

        <div className={styles.sliderWrapper}>
          <SpotLightSlider />
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;
