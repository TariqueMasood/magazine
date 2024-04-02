import { Container } from "react-bootstrap";
import styles from "../blogs.module.css";
import MgButton from "@/components/button/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import cardImg2 from "../../../../public/images/center-card-img1.png";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import blogImage from "../../../../public/images/spotlight-img-3.png";
import SpotLightSlider, {
  getSingleData,
} from "@/components/spotlight-slider/spotlight-slider";

const LightBlueCard = () => {
  return (
    <div className={styles.centerCard}>
      <div className={styles.centerCardWrapper}>
        <div>
          <div className={styles.centerCardWriter}>
            {/* <span>{blog.name}</span> */}
            <span>Anesthesia</span>
          </div>
          <h3 className={styles.centerCardTitle}>
            Protect yourself from the damage of chronic inflammation.
          </h3>
          <p>
            Science has proven that chronic, low-grade inflammation can turn
            into a silent killer that contributes to cardiovas­cular disease,
            cancer, type 2 diabetes and other conditions. Get simple tips to
            fight inflammation and stay healthy -- from Harvard Medical School
            experts.
          </p>
        </div>
        <MgButton>
          learn more <HiArrowNarrowRight />
        </MgButton>
      </div>
      <div className={styles.centerCardImg} alt="card">
        <Image src={cardImg2} alt="card" />
      </div>
    </div>
  );
};

const Author = () => {
  return (
    <div className={styles.author}>
      <h2 className={styles.authorTitle}>About The Author</h2>
      <div className={styles.authorBorder}></div>
      <div className={styles.authorCard}>
        <div className={styles.authorCardImg}>
          <Image src={blogImage} alt="card" />
        </div>
        <div>
          <div>
            <div className={styles.authorName}>
              <span>Claire McCarthy,</span>
              <span>MD, Senior Faculty Editor, Harvard Health Publishing</span>
            </div>
            <p className={styles.authorDetail}>
              Claire McCarthy, MD, is a primary care pediatrician at Boston
              Children’s Hospital, and an assistant professor of pediatrics at
              Harvard Medical School. In addition to being a senior faculty
              editor for Harvard Health Publishing, Dr. McCarthy
              <Link href="#"> See Full Bio...</Link>
            </p>
          </div>
          <div className={styles.authorAllPost}>
            <span>
              View all posts by Claire McCarthy, MD <HiArrowNarrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata({ params }) {
  const { blogSlug } = params;
  const blog = await getSingleData(blogSlug);

  if (!blog) {
    notFound();
  }

  return {
    title: blog.title,
    desc: blog.desc,
  };
}

const SingleBlog = async (props) => {
  const { blogSlug } = props.params;
  const blog = await getSingleData(blogSlug);

  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <div className={styles.SigleBlogWrapper}>
      <Container>
        <h4 className={styles.singleBlogHeading}>child & teen health</h4>
        <h1 className={styles.singleBlogTitle}>{blog.title}</h1>
        <p className={styles.singleBlogSubTitle}>
          A shorter-than-usual band of tissue may restrict tongue movements yet
          cause no serious problems.
        </p>
        <div className={styles.singlgeBlogImg}>
          <Image
            src={blog.image !== null ? blog.image : blogImage}
            alt="card"
            width={300}
            height={250}
          />
        </div>
        <div className={styles.blogWriter}>
          By <span>Claire McCarthy</span>, MD, Senior Faculty Editor, Harvard
          Health Publishing
        </div>
        <div className={styles.blogDate}>
          {new Date(blog.published_date).toLocaleDateString()}
        </div>
        <div
          className={styles.cardContent}
          dangerouslySetInnerHTML={createMarkup(blog.content)}
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
