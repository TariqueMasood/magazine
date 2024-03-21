"use client";
import { Container } from "react-bootstrap";
import styles from "./technology-blog.module.css";
import SectionTitle from "../section-title/section-title";
import MgPagination from "../pagination/pagination";
import BlogTabs from "../blog-tabs/blog-tabs";
import { useEffect, useState } from "react";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const TechnologyBlog = (props) => {
  const [ariticles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  const [pageSize, setPageSize] = useState(30);

  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d4c18cd8be8d4b05886252163b8aa126&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    const res = await data.json();
    setArticles(res);
    setTotalResults(res.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [page, setPage]);

  const handleNext = async () => {
    setPage(page + 1);
    fetchNews();
  };

  const handlePrev = async () => {
    setPage(page - 1);
    fetchNews();
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle title="TECHNOLOGY BLOGS" />
        <p>
          Read the latest posts from experts at Knowmed Health Publishing
          covering a variety of health topics and perspectives on medical news.
        </p>
        <BlogTabs
          ariticles={ariticles}
          loading={loading}
          category={category}
          pageSize={pageSize}
          country={country}
        />
        <MgPagination
          nextButton={handleNext}
          prevButton={handlePrev}
          pageCount={page}
          isDisabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
        />
      </Container>
    </div>
  );
};

export default TechnologyBlog;
