import { Container } from "react-bootstrap";
import styles from "../blogs.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogImage from "../../../../public/images/spotlight-img-3.png";
import SpotLightSlider from "@/components/spotlight-slider/spotlight-slider";
import { fetchData } from "@/utils/api";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import Link from "next/link";
import SocialIcon from "@/components/social-icon/social-icon";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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
    const baseURL = 'http://api.projectleadersmagazine.com:8000';
    const modifiedHTML = markup.replace(/src="([^"]+)"/g, `src="${baseURL}$1"`);
    return modifiedHTML
  }
  // const prependBaseURL = (htmlString) => {
  //   console.log("errror0", htmlString)
  //   const baseURL = 'http://api.projectleadersmagazine.com:8000';
  //   const modifiedHTML = htmlString.replace(/src="([^"]+)"/g, `src="${baseURL}$1"`);
  //   return modifiedHTML;
  // };


  return (
    <div className={styles.SigleBlogWrapper}>
      <div className="ms-5 me-5">

        <h1 className={styles.singleBlogTitle}>{blog?.title}</h1>
        <p className={styles.singleBlogSubTitle}>{blog?.subtitle}</p>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-md-8">

          <Container className="ms-5" >

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
        <div className={`col-12 col-md-4`} >
          <Container className={styles.containerRight}>
            <Container >
              <div className="d-flex-column gap-5" >
                <label className={styles.shareLabel}>SHARE</label>
                <div className="mt-2">
                  <div className={` ${styles.wrapper}`}>
                    <div className={`d-flex flex-row gap-3  ${styles.socialIcon}`}>
                      <Link
                        target="--blank"
                        href="https://www.facebook.com/projectleadersmagazine"
                      >
                        <FaFacebookF className="bi-3x" />
                      </Link>
                      <Link
                        target="--blank"
                        href="https://www.linkedin.com/company/projectleadersmagazine/"
                      >
                        <FaLinkedin className="bi-3x" />
                      </Link>
                      <Link
                        target="--blank"
                        href="http://www.youtube.com/@ProjectLeadersMagazine-jd8lh"
                      >
                        <FaYoutube className="bi-3x" />
                      </Link>
                      <Link
                        target="--blank"
                        href="https://www.instagram.com/projectleadersmagazine/"
                      >
                        <FaInstagram className="bi-3x" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex-column gap-5" style={{ height: "" }}>
                <label className={styles.shareLabel}>AUTHOR</label>
                <div className={`mt-2 ${styles.autherLabel}`}>
                  Marcus Law
                </div>
              </div>
            </Container>
            <Container className="mt-5 ">
              <Image
                src={blog?.image !== null ? blog?.image : blogImage}
                alt="card"
                width={370}
                height={250}
              />
            </Container>
            <Container className="mt-5 pt-3">
              <div className="d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-3">
                  <label className={styles.recentContentLabel}>
                    Related Content
                  </label>

                  <div className="d-flex flex-row justify-content-between pb-3" style={{ borderBottom: "1px solid #8585854D" }}>
                    <div className="d-flex flex-column gap-4" style={{ width: "180px", }}>
                      <label className={styles.newLabelHeading}>
                        Laguardia International
                        Airport
                      </label>

                      <div className="d-flex flex-row justify-content-between">
                        <label className={styles.newsDate}>September</label>
                        <label className={styles.newsDate}>Page 30</label>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={blog?.image !== null ? blog?.image : blogImage}
                        alt="card"
                        width={100}
                        height={66}

                      />
                    </div>
                  </div>


                  <div className="d-flex flex-row justify-content-between  pb-3" style={{ borderBottom: "1px solid #8585854D" }}>
                    <div className="d-flex flex-column gap-4" style={{ width: "180px" }}>
                      <label className={styles.newLabelHeading}>
                        Laguardia International
                        Airport
                      </label>

                      <div className="d-flex flex-row justify-content-between">
                        <label className={styles.newsDate}>September</label>
                        <label className={styles.newsDate}>Page 30</label>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={blog?.image !== null ? blog?.image : blogImage}
                        alt="card"
                        width={100}
                        height={66}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-between  pb-3" style={{ borderBottom: "1px solid #8585854D" }}>
                    <div className="d-flex flex-column gap-4" style={{ width: "180px" }}>
                      <label className={styles.newLabelHeading}>
                        Laguardia International
                        Airport
                      </label>

                      <div className="d-flex flex-row justify-content-between">
                        <label className={styles.newsDate}>September</label>
                        <label className={styles.newsDate}>Page 30</label>
                      </div>
                    </div>

                    <div>
                      <Image
                        src={blog?.image !== null ? blog?.image : blogImage}
                        alt="card"
                        width={100}
                        height={66}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </Container>

            <Container className="mt-5 pt-3">
              <Image
                src={blog?.image !== null ? blog?.image : blogImage}
                alt="card"
                width={370}
                height={600}
              />
            </Container>
          </Container>

        </div>
      </div>

    </div>
  );
};

export default SingleBlog;
