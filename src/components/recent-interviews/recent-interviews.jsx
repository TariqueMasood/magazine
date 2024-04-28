import SectionTitle from "../section-title/section-title";
import Image from "next/image";
import { fetchData } from "@/utils/api";
import Link from "next/link";
import styles from "./recent-interviews.module.css";

function RecentInterviewCard(props) {
  const { id, title, profile_pic, position, subtitle } = props.data;
  return (
    <Link className={styles.card} href={`/interview/textual-interviews/${id}`}>
      <div className={styles.cardContent}>
        <h4>{title}</h4>
        <h5>{position}</h5>
        <p>{subtitle}</p>
      </div>
      <Image
        src={profile_pic}
        alt="profile-pic"
        width={70}
        height={100}
        className={styles.imgCss}
      />
    </Link>
  );
}

const RecentInterviews = async () => {
  const interviews = await fetchData("interviews/?limit=4");
  return (
    <div>
      <SectionTitle title="RECENT INTERVIEWS" />
      <div className={styles.cardList}>
        {interviews?.results &&
          interviews?.results.map((interview) => (
            <RecentInterviewCard key={interview.id} data={interview} />
          ))}
      </div>
    </div>
  );
};

export default RecentInterviews;
