import { Container } from "react-bootstrap";
import styles from "./gallery-slider.module.css";
import GalleryCard from "../gallery/gallery-card";
import MgSlider from "../slider/slider";
import SectionHeader from "../section-header/section-header";
import SectionBorder from "../section-border/section-border";
import galleryImg1 from "../../../public/images/gallery-img-1.png";
import galleryImg2 from "../../../public/images/gallery-img-2.png";
import galleryImg3 from "../../../public/images/gallery-img-3.png";

const data = [
  {
    id: 1,
    galleryImg: galleryImg1,
  },
  {
    id: 2,
    galleryImg: galleryImg2,
  },
  {
    id: 3,
    galleryImg: galleryImg3,
  },
  {
    id: 4,
    galleryImg: galleryImg3,
  },
];

const GallerySlider = () => {
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
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionHeader
          style={{ color: "#fff" }}
          title="100% READY TO US"
          subTitle="Huge premade layouts gallery"
          desc="Ready variety of layouts for blog posts and other pages."
        />
        <SectionBorder />
        <MgSlider settings={settings}>
          {data.map((data, index) => {
            return <GalleryCard key={index} galleryImg={data.galleryImg} />;
          })}
        </MgSlider>
      </Container>
    </div>
  );
};

export default GallerySlider;
