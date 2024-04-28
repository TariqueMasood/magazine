"use client";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import BlogCard from "../blog-card/blog-card";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import styles from "../magazine-list/magazine-list.module.css";

const BlogTabs = () => {
  let [tabsData, setTabsData] = useState([]);
  let [activeTab, setActiveTab] = useState("");
  let [blogsData, setBlogsData] = useState([]);
  let [blogsTempData, setBlogsTempData] = useState([]);
  let [prevValue, setPrevValue] = useState(null);
  let [nextValue, setNextValue] = useState(null);
  let [pageNo, setPageNo] = useState(1);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  let getTabData = async () => {
    const tabsData = await fetchData("categories");
    tabsData.results.unshift({
      id: 0,
      name: "All",
      slug: "all",
    });
    // console.log("tabs", tabsData.results)
    setTabsData(tabsData.results);
    getBlogsData("blogs", 0);
  };

  let getBlogsData = async (url, tab) => {
    let blogsDatas = null;
    if (tab === 0) {
      blogsDatas = await fetchData(url);
    } else {
      blogsDatas = await fetchData(url + "?category=" + tab);
    }
    setPrevValue(blogsDatas.previous);
    setNextValue(blogsDatas.next);

    setBlogsData(blogsDatas);
    setBlogsTempData(blogsDatas);
  };

  let handleTabChange = (key) => {
    setBlogsTempData([]);
    if (key !== "all") {
      let tabNumber = parseInt(
        tabsData.filter((value) => value.name.toLowerCase() === key)[0].id
      );
      getBlogsData("blogs", tabNumber);
      setActiveTab(tabNumber);
    } else {
      getBlogsData("blogs", 0);
      setActiveTab(0);
    }
  };

  let handlePrev = async (url) => {
    console.log("url", url, blogsTempData);

    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    getBlogsData(pathname + newurl, activeTab);
    setPageNo(pageNo - 1);
  };

  let handleNext = (url) => {
    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    console.log("rddg ", pathname, newurl);
    getBlogsData(pathname + newurl, activeTab);
    // console.log("data come", blogsDatas);
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    getTabData();
  }, []);

  return (
    <>
      <Tabs
        defaultActiveKey={
          tabsData && tabsData.length > 0
            ? tabsData[0].name.toLowerCase()
            : "all"
        }
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={(key) => handleTabChange(key)}
      >
        {tabsData &&
          tabsData.map((tab) => (
            <Tab
              key={tab.id}
              eventKey={tab.name.toLowerCase()}
              title={capitalizeFirstLetter(tab.name)}
            >
              <Row>
                <Row className="justify-content-center mb-4">
                  <Col md={1}>
                    <Button
                      variant="primary"
                      onClick={() => handlePrev(blogsData.previous)}
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
                      onClick={() => handleNext(blogsData.next)}
                      disabled={nextValue === null}
                    >
                      Next &gt;
                    </Button>
                  </Col>
                </Row>
                {blogsTempData.results &&
                  blogsTempData.results.map((data) => (
                    <Col key={data.id} md={6} lg={3}>
                      <BlogCard data={data} />
                    </Col>
                  ))}
              </Row>
            </Tab>
          ))}
      </Tabs>
      <div className={styles.paginationBtnContainer}>
        <Button
          variant="primary"
          onClick={() => handlePrev(blogsData.previous)}
          disabled={prevValue === null}
          className={styles.paginationBtn}
        >
          <FaChevronLeft /> <span>Previous</span>
        </Button>
        <Button
          variant="primary"
          onClick={() => handleNext(blogsData.next)}
          disabled={nextValue === null}
          className={styles.paginationBtn}
        >
          <span>Next</span> <FaChevronRight />
        </Button>
      </div>
    </>
  );
};

export default BlogTabs;
