"use client";

import { Pagination } from "react-bootstrap";
import "./pagination.module.css";
import { useEffect, useState } from "react";
import styles from "./pagination.module.css";

const MgPagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const pagesCount = Math.ceil(props.data.count / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);
  console.log("Data count", props.data.count);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>

    // <Pagination>
    //   <Pagination.Prev
    //     onClick={props.prevButton}
    //     disabled={props.pageCount <= 1}
    //   />
    //   <Pagination.Item active={true}>{1}</Pagination.Item>
    //   <Pagination.Item>{2}</Pagination.Item>
    //   <Pagination.Item>{3}</Pagination.Item>
    //   <Pagination.Next onClick={props.nextButton} disabled={props.isDisabled} />
    // </Pagination>
  );
};

export default MgPagination;
