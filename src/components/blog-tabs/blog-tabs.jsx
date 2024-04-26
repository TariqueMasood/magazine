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

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  let getTabData = async () => {
    const tabsData = await fetchData("categories");
    setTabsData(tabsData.results);
    getBlogsData("blogs", tabsData.results);
  };

  let getBlogsData = async (url, tab) => {
    let blogsDatas = null;
    blogsDatas = await fetchData(url);
    console.log("data come", blogsDatas);
    setPrevValue(blogsDatas.previous);
    setNextValue(blogsDatas.next);

    setBlogsData(blogsDatas);
    setBlogsTempData(blogsData);
    if (activeTab === "") {
      handleTabChange(tab[0].name, blogsDatas);
    } else {
      handleTabChange(activeTab, blogsDatas);
    }
  };

  let handleTabChange = (key, data = []) => {
    let filteredData = [];
    setActiveTab(key);
    if (data.length === 0) {
      filteredData = blogsData.results.filter(
        (item) =>
          item.category.name.toLowerCase().trim() === key.toLowerCase().trim()
      );
    } else {
      filteredData = data.results.filter(
        (item) =>
          item.category.name.toLowerCase().trim() === key.toLowerCase().trim()
      );
    }
    let temp = { ...blogsData };

    temp.results = filteredData;
    if (filteredData.length !== 0) {
      setBlogsTempData(temp);
    } else {
      setBlogsTempData([]);
    }
  };

  let handlePrev = async (url) => {
    console.log("url", url, blogsTempData);

    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    getBlogsData(pathname + newurl, "");
  };

  let handleNext = (url) => {
    const parsedUrl = new URL(url);
    let pathname = parsedUrl.pathname;
    pathname = pathname.slice(4).substring(1);
    const newurl = parsedUrl.search;
    getBlogsData(pathname + newurl, "");
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
            : "news"
        }
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={(key) => handleTabChange(key, [])}
      >
        {tabsData &&
          tabsData.map((tab) => (
            <Tab
              key={tab.id}
              eventKey={tab.name.toLowerCase()}
              title={capitalizeFirstLetter(tab.name)}
            >
              <Row>
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
