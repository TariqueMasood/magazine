import { Container } from "react-bootstrap";
import SpotLightCard from "../spotlight-card/spotlight-card";
import styles from "./spotlight-slider.module.css";
import MgSlider from "../slider/slider";
import { blogData } from "@/data/blog-data";

const SpotLightSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.sliderWrapper}>
          <MgSlider settings={settings}>
            {blogData.map((data, index) => {
              return (
                <SpotLightCard
                  key={index}
                  blogImg={data.blogImg}
                  title={data.title}
                  desc={data.desc}
                />
              );
            })}
          </MgSlider>
        </div>
      </Container>
    </div>
  );
};

export default SpotLightSlider;
