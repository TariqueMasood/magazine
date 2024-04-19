"use client";

import { Button, Pagination } from "react-bootstrap";
import "./pagination.module.css";
import { useEffect, useState } from "react";
import styles from "./pagination.module.css";

const MgPagination = (props) => {
  // const [nextPrev, setNextPrev] = useState({ next: null, prev: null });
  // const [offset, setOffset] = useState(3);
  const [page, setPage] = useState(1);
  const pageSize = 3;

  function handleNext(prev) {
    return props.offset * (prev + 1);
  }

  return (
    <div className="d-flex gap-3 justify-content-center">
      <Button
        disabled={props.data.previous === null}
        onClick={() => {
          // props.data.previous;
          console.log("Prev clicked");
        }}
      >
        Prev
      </Button>
      <Button
        // disabled={nextPrev.next === null}
        onClick={() => {
          // debugger;
          handleNext();
          console.log("Next clicked");
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default MgPagination;
