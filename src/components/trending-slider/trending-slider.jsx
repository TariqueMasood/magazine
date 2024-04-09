import Image from "next/image";
import styles from "./trending-slider.module.css";
import blogImage from "../../../public/images/spotlight-img-3.png";
import MgSlider from "../slider/slider";
import Link from "next/link";
import { fetchData } from "@/utils/api";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const TrendingCard = (props) => {
  const { id, title, subtitle, image, content, published_date } = props?.data;
  return (
    <Link href={`/blogs/${id}`} className={styles.cardContainer}>
      <Image
        alt="card"
        className={styles.imgCss}
        src={image !== null ? image : blogImage}
        width={300}
        height={250}
      />
      <div className={styles.asideTitles}>{title}</div>
      <div className={styles.asideContent}>{subtitle}</div>
    </Link>
  );
};

const TrendingSlider = async () => {
  const data = await fetchData("blogs");

  function isTrending() {
    return data.results?.filter((data) => data.is_trending);
  }

  return (
    <>
      {isTrending().length > 0 && (
        <div className={styles.aside}>
          <div className={styles.asideHeading}>TRENDING</div>
          <MgSlider settings={settings}>
            {data?.results?.map((data) => {
              return (
                <>
                  {data.is_trending && (
                    <TrendingCard key={data?.id} data={data} />
                  )}
                </>
              );
            })}
          </MgSlider>
        </div>
      )}
    </>
  );
};

export default TrendingSlider;
