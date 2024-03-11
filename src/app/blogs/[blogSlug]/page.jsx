import { getBlogs, getSingleBlog } from "@/data/blog";
import { Container } from "react-bootstrap";
import blogsImg1 from "../../../../public/images/single-blogs-img1.png";
import styles from "../blogs.module.css";
import MgButton from "@/components/button/button";
import { HiArrowNarrowRight } from "react-icons/hi";
import cardImg2 from "../../../../public/images/center-card-img1.png";
import authorImg from "../../../../public/images/author-img1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/section-title/section-title";
import SpotLightCard from "@/components/spotlight-card/spotlight-card";
import MgSlider from "@/components/slider/slider";
import { notFound } from "next/navigation";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: "100px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const blogData = await getBlogs();

export async function generateMetadata({ params }) {
  const { blogSlug } = params;
  const blog = await getSingleBlog(blogSlug);

  if (!blog) {
    notFound();
  }

  return {
    title: blog.title,
    desc: blog.desc,
  };
}

const SingleBlog = async ({ params }) => {
  const { blogSlug } = params;
  const blog = await getSingleBlog(blogSlug);
  return (
    <div className={styles.SigleBlogWrapper}>
      <Container>
        <h4 className={styles.singleBlogHeading}>child & teen health</h4>
        <h1 className={styles.singleBlogTitle}>
          What is a tongue-tie? What parents need to know
        </h1>
        <p className={styles.singleBlogSubTitle}>
          A shorter-than-usual band of tissue may restrict tongue movements yet
          cause no serious problems.
        </p>
        <div className={styles.singlgeBlogImg}>
          <Image src={blogsImg1} alt="card" />
        </div>
        <div className={styles.blogWriter}>
          By <span>Claire McCarthy</span>, MD, Senior Faculty Editor, Harvard
          Health Publishing
        </div>
        <div className={styles.blogDate}>February 7, 2024</div>
        <p className={styles.blogContent}>
          The tongue is secured to the front of the mouth partly by a band of
          tissue called the lingual frenulum. If the frenulum is short, it can
          restrict the movement of the tongue. This is commonly called a
          tongue-tie. Children with a tongue-tie can&apos;t stick their tongue
          out past their lower lip, or touch their tongue to the top of their
          upper teeth when their mouth is open. When they stick out their
          tongue, it looks notched or heart-shaped. Since babies don&apos;t
          routinely stick out their tongues, a baby&apos;s tongue may be tied if
          you can&apos;t get a finger underneath the tongue.
        </p>
        <h3 className={styles.blogSubTitle}>How common are tongue-ties?</h3>
        <p className={styles.blogSubContent}>
          Tongue-ties are common. It&apos;s hard to say exactly how common, as
          people define this condition differently. About 8% of babies under age
          one may have at least a mild tongue-tie.
        </p>
        <div className={styles.blogBorder}></div>
        <div className={styles.centerCard}>
          <div className={styles.centerCardWrapper}>
            <div>
              <div className={styles.centerCardWriter}>
                <span>Dr. Arun Puri</span>
                <span>Anesthesia</span>
              </div>
              <h3 className={styles.centerCardTitle}>
                Protect yourself from the damage of chronic inflammation.
              </h3>
              <p>
                Science has proven that chronic, low-grade inflammation can turn
                into a silent killer that contributes to cardiovas­cular
                disease, cancer, type 2 diabetes and other conditions. Get
                simple tips to fight inflammation and stay healthy -- from
                Harvard Medical School experts.
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
        <div className={styles.blogBorder}></div>
        <div className={styles.author}>
          <h2 className={styles.authorTitle}>About The Author</h2>
          <div className={styles.authorBorder}></div>
          <div className={styles.authorCard}>
            <div className={styles.authorCardImg}>
              <Image src={authorImg} alt="card" />
            </div>
            <div>
              <div>
                <div className={styles.authorName}>
                  <span>Claire McCarthy,</span>
                  <span>
                    MD, Senior Faculty Editor, Harvard Health Publishing
                  </span>
                </div>
                <p className={styles.authorDetail}>
                  Claire McCarthy, MD, is a primary care pediatrician at Boston
                  Children’s Hospital, and an assistant professor of pediatrics
                  at Harvard Medical School. In addition to being a senior
                  faculty editor for Harvard Health Publishing, Dr. McCarthy
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
        <div className={styles.reletedBlog}>
          <div className={styles.reletedBlogHeading}>
            <div className={styles.reletedBlogTitle}>
              <div>
                <SectionTitle title="RELETED BLOGS" />
                <div className={styles.reletedBlogBorder}></div>
              </div>
              <div className={styles.readMore}>
                <Link href="#">
                  Read More <MdKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <MgSlider settings={settings}>
            {blogData.map((data) => {
              return <SpotLightCard key={data.id} data={data} />;
            })}
          </MgSlider>
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;
