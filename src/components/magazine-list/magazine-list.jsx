"use client";
import dynamic from "next/dynamic";
import styles from "./magazine-list.module.css";
import { fetchData } from "@/utils/api";
import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

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
  let [pageNo, setPageNo] = useState(1);

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
    setPageNo(pageNo - 1);
  };

  let handleNext = (url) => {
    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    getMagazineData(pathname + newurl);
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    getMagazineData("pdfs");
  }, []);

  return (
    <>
      <Row>
        {magazines?.results?.map((magazine) => (
          <Col sm={6} md={6} lg={3} key={magazine.id}>
            <MagazineCard data={magazine} />
          </Col>
        ))}
      </Row>
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
          <Col
            md={10}
            className="d-flex flex-row justify-content-center align-items-center fs-6 fw-bold"
          >
            Page No. {pageNo}
          </Col>
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
        {/* <div className={styles.paginationBtnContainer}>
        <Button
          variant="primary"
          onClick={() => handlePrev(magazines.previous)}
          disabled={prevValue === null}
          className={styles.paginationBtn}
        >
          <FaChevronLeft /> <span>Previous</span>
        </Button>
        <Button
          variant="primary"
          onClick={() => handleNext(magazines.next)}
          disabled={nextValue === null}
          className={styles.paginationBtn}
        >
          <span>Next</span> <FaChevronRight />
        </Button>
      </div> */}
      </Row>
    </>
  );
};

export default MagazineList;
