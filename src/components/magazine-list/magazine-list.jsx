import dynamic from "next/dynamic";
import styles from "./magazine-list.module.css";
import { fetchData } from "@/utils/api";
import { Col, Row } from "react-bootstrap";

const MagazineCard = dynamic(() => import("../magazine-card/magazine-card"), {
  ssr: false,
});

export const getSingleMagazine = async (id) => {
  const magazines = await fetchData("pdfs");
  const singleMagazine = magazines.results.find(
    (magazine) => magazine.id === parseInt(id)
  );

  return singleMagazine;
};

const MagazineList = async () => {
  const magazines = await fetchData("pdfs");

  return (
    <div className={styles.container}>
      <Row>
        {magazines?.results?.map((magazine) => (
          <Col lg={3} key={magazine.id}>
            <MagazineCard data={magazine} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MagazineList;
