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
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import SectionTitle from "@/components/section-title/section-title";
import SectionBorder from "@/components/section-border/section-border";

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
      <div className="ms-5 me-5 ps-4 pe-4">
        <h1 className={styles.singleBlogTitle}>{blog?.title}</h1>
        <p className={styles.singleBlogSubTitle}>{blog?.subtitle}</p>
      </div>

      <div className="row mt-2 ms-5 me-5 ps-4 pe-4">
        <div className="col-12 col-md-8">
          <Container className="">
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
          </Container>
        </div>
        <div className={`col-12 col-md-4`}>
          <Container className={styles.containerRight}>
            <Container>
              <div className="d-flex-column gap-5">
                <label className={styles.shareLabel}>SHARE</label>
                <div className="mt-2">
                  <div className={` ${styles.wrapper}`}>
                    <div
                      className={`d-flex flex-row gap-3  ${styles.socialIcon}`}
                    >
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
                <div className={`mt-2 ${styles.autherLabel}`}>Marcus Law</div>
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
                    <SectionBorder />
                  </label>

                  <div
                    className="d-flex flex-row justify-content-between pb-3"
                    style={{ borderBottom: "1px solid #8585854D" }}
                  >
                    <div
                      className="d-flex flex-column gap-4"
                      style={{ width: "180px" }}
                    >
                      <label className={styles.newLabelHeading}>
                        Laguardia International Airport
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

                  <div
                    className="d-flex flex-row justify-content-between  pb-3"
                    style={{ borderBottom: "1px solid #8585854D" }}
                  >
                    <div
                      className="d-flex flex-column gap-4"
                      style={{ width: "180px" }}
                    >
                      <label className={styles.newLabelHeading}>
                        Laguardia International Airport
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

                  <div
                    className="d-flex flex-row justify-content-between  pb-3"
                    style={{ borderBottom: "1px solid #8585854D" }}
                  >
                    <div
                      className="d-flex flex-column gap-4"
                      style={{ width: "180px" }}
                    >
                      <label className={styles.newLabelHeading}>
                        Laguardia International Airport
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

        <div className="d-flex flex-column gap-3 mt-4">
          <label className={styles.shareLabel}>
            AUTHOR
            <SectionBorder />
          </label>
          <div>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    // className="img-fluid rounded-start"
                    alt="card"
                    // style={{ width: "auto", height: "200pautox" }}
                    src={blog?.image !== null ? blog?.image : blogImage}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className={styles.authorTop}>
                      {" "}
                      <b>Claire McCarthy, MD</b>, Senior Faculty Editor, Harvard
                      Health Publishing
                    </p>
                    <p className={styles.authorMiddle}>
                      Claire McCarthy, MD, is a primary care pediatrician at
                      Boston Children’s Hospital, and an assistant professor of
                      pediatrics at Harvard Medical School. In addition to being
                      a senior faculty editor for Harvard Health Publishing, Dr.
                      McCarthy…
                      <label className={styles.shareLabel}>See Full Bio</label>
                    </p>
                    <p className="card-text">
                      <small className={styles.authorBottom}>
                        View all posts by Claire McCarthy, MD
                        <label className="ps-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className={`bi bi-arrow-right ${styles.arrowAuthor}`}
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              strokeWidth="5"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                          </svg>
                        </label>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapper}>
        <SpotLightSlider />
      </div>
    </div>
  );
};

export default SingleBlog;
