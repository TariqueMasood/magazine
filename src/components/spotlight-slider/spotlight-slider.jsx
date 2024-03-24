import { Container } from "react-bootstrap";
import styles from "./spotlight-slider.module.css";
import MgSlider from "../slider/slider";
import SectionTitle from "../section-title/section-title";
import BlogCard from "../blog-card/blog-card";
import { getData } from "@/app/page";

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
  const data = await getData();
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="SPOTLIGHT" />
        <div className={styles.sliderWrapper}>
          <MgSlider settings={settings}>
            {data.results.map((data) => {
              return <BlogCard key={data.id} data={data} />;
            })}
          </MgSlider>
        </div>
      </Container>
    </div>
  );
};

export default SpotLightSlider;
