import { Container } from "react-bootstrap";
import styles from "./spotlight-slider.module.css";
import MgSlider from "../slider/slider";
import SectionTitle from "../section-title/section-title";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { fetchData } from "@/utils/api";

const BlogCard = dynamic(() => import("../blog-card/blog-card"), {
  ssr: false,
});

const MgLoader = dynamic(() => import("@/components/loader/loader"), {
  ssr: false,
});

export async function getData() {
  const res = await fetch(
    "http://api.projectleadersmagazine.com:8000/api/blogs/"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return res.json();
}

export const getSingleData = async (id) => {
  const data = await fetchData("blogs");
  const singleBlog = data.results.find((data) => data.id === parseInt(id));

  return singleBlog;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  centerPadding: "40px",
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

const SpotLightSlider = async () => {
  const data = await fetchData("blogs");

  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="SPOTLIGHT" />
        <Suspense fallback={<MgLoader />}>
          <div className={styles.sliderWrapper}>
            <MgSlider settings={settings}>
              {data?.results?.map((data) => {
                return <BlogCard key={data?.id} data={data} />;
              })}
            </MgSlider>
          </div>
        </Suspense>
      </Container>
    </div>
  );
};

export default SpotLightSlider;
