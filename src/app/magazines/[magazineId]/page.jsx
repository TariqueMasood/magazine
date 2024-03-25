import { Container } from "react-bootstrap";
import styles from "../magazines.module.css";
import { notFound } from "next/navigation";
import { getData, getSingleData } from "@/app/page";

export async function generateMetadata({ params }) {
  const { blogSlug } = params;
  const blog = await getSingleData(blogSlug);

  if (!blog) {
    notFound();
  }

  return {
    title: blog.title,
    desc: blog.desc,
  };
}

const SingleMagazine = async (props) => {
  const data = await getData();

  const { blogSlug } = props.params;
  const blog = await getSingleData(blogSlug);

  return (
    <div className={styles.container}>
      <Container>Magazine details</Container>
    </div>
  );
};

export default SingleMagazine;
