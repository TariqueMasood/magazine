import { Container } from "react-bootstrap";
import SpotLightCard from "../spotlight-card/spotlight-card";
import styles from "./spotlight-slider.module.css";
import MgSlider from "../slider/slider";
import SectionBorder from "../section-border/section-border";
import { getBlogs } from "@/data/blog";

const SpotLightSlider = async () => {
  const blogData = await getBlogs();

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
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.sliderTitle}>
          <h2 className={styles.sliderHeading}>spotlight</h2>
          <SectionBorder />
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

export default SpotLightSlider;
