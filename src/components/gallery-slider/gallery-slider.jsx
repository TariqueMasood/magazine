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
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const GallerySlider = async () => {
  const magazines = await fetchData("pdfs/?limit=6");
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.borderContainer}>
          <SectionHeader
            style={{ color: "#fff" }}
            subTitle="Previous Editions Gallery"
          />
          <SectionBorder />
        </div>

        <div className={styles.MgSliderContainer} style={{ maxWidth: "100%" }}>
          <MgSlider settings={settings}>
            {magazines?.results?.map((magazine) => {
              return <GalleryCard key={magazine.id} data={magazine} />;
            })}
          </MgSlider>
        </div>
      </Container>
    </div>
  );
};

export default GallerySlider;
