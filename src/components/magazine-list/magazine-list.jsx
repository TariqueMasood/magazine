"use client";
import dynamic from "next/dynamic";
import styles from "./magazine-list.module.css";
import { fetchData } from "@/utils/api";
import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

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

const MagazineList = () => {
  let [prevValue, setPrevValue] = useState(null);
  let [nextValue, setNextValue] = useState(null);
  let [magazines, setMagazines] = useState(null);

  let getMagazineData = async (url) => {
    let magazineData = await fetchData(url);
    setMagazines(magazineData);
    setPrevValue(magazineData.previous);
    setNextValue(magazineData.next);
  };
  let handlePrev = async (url) => {
    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    getMagazineData(pathname + newurl);
  };

  let handleNext = (url) => {
    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    getMagazineData(pathname + newurl);
  };

  useEffect(() => {
    getMagazineData("pdfs");
  }, []);

  return (
    <Row className="d-flex flex-column flex-md-row">
      <Row className="justify-content-center mb-4">
        <Col md={1}>
          <Button
            variant="primary"
            onClick={() => handlePrev(magazines.previous)}
            disabled={prevValue === null}
          >
            &lt; Prev
          </Button>
        </Col>
        <Col md={10}></Col>
        <Col md={1}>
          <Button
            variant="primary"
            onClick={() => handleNext(magazines.next)}
            disabled={nextValue === null}
          >
            Next &gt;
          </Button>
        </Col>
      </Row>
      <div className={styles.container}>
        <Row>
          {magazines?.results?.map((magazine) => (
            <Col xs={6} sm={6} md={6} lg={3} key={magazine.id}>
              <MagazineCard data={magazine} />
            </Col>
          ))}
        </Row>
      </div>
    </Row>
  );
};

export default MagazineList;
