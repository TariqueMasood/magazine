import { Container } from "react-bootstrap";
import SectionTitle from "../section-title/section-title";
import styles from "./recent-blog.module.css";
import Image from "next/image";
import shareIcon from "../../../public/images/share-icon.png";
import blogImage from "../../../public/images/spotlight-img-3.png";
import { fetchData } from "@/utils/api";
import Link from "next/link";

const RecentCard = (props) => {
  const { id, title, subtitle, image, category } = props?.data;

  const limitTitle = title.slice(0, 60);
  const limitSubTitle = subtitle.slice(0, 130);
  return (
    <div className={styles.recentCard}>
      <div className={styles.cardImg}>
        <Image
          src={image !== null ? image : blogImage}
          alt="card"
          width={350}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.category}>{category.name}</div>
        <Link href={`/blogs/${id}`}>
          <h4 className={styles.cardTitle}>
            {limitTitle.length >= 60 ? `${limitTitle}...` : limitTitle}
          </h4>
        </Link>
        <p className={styles.cardDesc}>
          {limitSubTitle.length >= 130 ? `${limitSubTitle}...` : limitSubTitle}
        </p>
      </div>
    </div>
  );
};

const RecentBlog = async () => {
  const magazines = await fetchData("blogs/?limit=4");
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className="pb-3">
          <SectionTitle title="RECENT BLOGS" />
        </div>
        <div className={styles.cardContainer}>
          {magazines.results.map((magazine) => (
            <RecentCard key={magazine.id} data={magazine} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentBlog;
