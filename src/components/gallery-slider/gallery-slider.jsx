import { Container } from "react-bootstrap";
import styles from "./gallery-slider.module.css";
import MgSlider from "../slider/slider";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import { fetchData } from "@/utils/api";
import dynamic from "next/dynamic";
const GalleryCard = dynamic(() => import("../gallery/gallery-card"), {
  ssr: false,
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
        arrows: false,
      },
    },
  ],
};

const GallerySlider = async () => {
  const magazines = await fetchData("pdfs");
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.borderContainer}>
          <SectionHeader
            style={{ color: "#fff" }}
            title="100% READY TO US"
            subTitle="Huge premade layouts gallery"
            desc="Ready variety of layouts for blog posts and other pages."
          />
          <SectionBorder />
        </div>
        <MgSlider settings={settings}>
          {magazines?.results?.map((magazine) => {
            return <GalleryCard key={magazine.id} data={magazine} />;
          })}
        </MgSlider>
      </Container>
    </div>
  );
};

export default GallerySlider;
