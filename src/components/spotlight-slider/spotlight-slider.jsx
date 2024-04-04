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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
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
        <div className={styles.contentWrapper}>
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
        </div>
      </Container>
    </div>
  );
};

export default SpotLightSlider;
