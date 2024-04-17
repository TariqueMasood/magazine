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
        <div className={styles.cardName}>
          <div className={styles.category}>{category.slug}</div>
          <div className={styles.shareIcon}>
            <Image src={shareIcon} alt="icon" />
          </div>
        </div>
        <Link href={`/blogs/${id}`}>
          <h4 className={styles.cardTitle}>{title}</h4>
        </Link>
        <p className={styles.cardDesc}>{subtitle}</p>
      </div>
    </div>
  );
};

const RecentBlog = async () => {
  const magazines = await fetchData("blogs/?limit=3");
  return (
    <div>
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
