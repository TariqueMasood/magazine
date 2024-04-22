import Image from "next/image";
import SectionBorder from "../section-border/section-border";
import blogImage from "../../../public/images/spotlight-img-3.png";
import styles from "./featured.module.css";

const Featured = (props) => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-3">
        <label className={styles.recentContentLabel}>
          Related Content
          <SectionBorder />
        </label>
        <div
          className="d-flex flex-row justify-content-between pb-3"
          style={{ borderBottom: "1px solid #8585854D" }}
        >
          <div className="d-flex flex-column gap-4" style={{ width: "180px" }}>
            <label className={styles.newLabelHeading}>
              Laguardia International Airport
            </label>
            <div className="d-flex flex-row justify-content-between">
              <label className={styles.newsDate}>September</label>
              <label className={styles.newsDate}>Page 30</label>
            </div>
          </div>
          <div>
            <Image
              src={props.blog?.image !== null ? props.blog?.image : blogImage}
              alt="card"
              width={100}
              height={66}
            />
          </div>
        </div>
        <div
          className="d-flex flex-row justify-content-between  pb-3"
          style={{ borderBottom: "1px solid #8585854D" }}
        >
          <div className="d-flex flex-column gap-4" style={{ width: "180px" }}>
            <label className={styles.newLabelHeading}>
              Laguardia International Airport
            </label>
            <div className="d-flex flex-row justify-content-between">
              <label className={styles.newsDate}>September</label>
              <label className={styles.newsDate}>Page 30</label>
            </div>
          </div>
          <div>
            <Image
              src={props.blog?.image !== null ? props.blog?.image : blogImage}
              alt="card"
              width={100}
              height={66}
            />
          </div>
        </div>
        <div
          className="d-flex flex-row justify-content-between  pb-3"
          style={{ borderBottom: "1px solid #8585854D" }}
        >
          <div className="d-flex flex-column gap-4" style={{ width: "180px" }}>
            <label className={styles.newLabelHeading}>
              Laguardia International Airport
            </label>
            <div className="d-flex flex-row justify-content-between">
              <label className={styles.newsDate}>September</label>
              <label className={styles.newsDate}>Page 30</label>
            </div>
          </div>
          <div>
            <Image
              src={props.blog?.image !== null ? props.blog?.image : blogImage}
              alt="card"
              width={100}
              height={66}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
