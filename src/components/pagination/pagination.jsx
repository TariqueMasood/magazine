"use client";

import { Button, Pagination } from "react-bootstrap";
import "./pagination.module.css";
import { useEffect, useState } from "react";
import styles from "./pagination.module.css";

const MgPagination = (props) => {
  const [nextPrev, setNextPrev] = useState({ next: null, prev: null });

  useEffect(() => {
    if (props.data.previous || props.data.next) {
      setNextPrev({ next: props.data.next, prev: props.data.previous });
    }
  }, [props.data]);

  return (
    <div className="d-flex gap-3 justify-content-center">
      <Button
        disabled={nextPrev.prev === null}
        onClick={() => {
          // props.data.previous;
          console.log("Prev clicked", props.data.previous);
        }}
      >
        Prev
      </Button>
      <Button
        disabled={nextPrev.next === null}
        onClick={() => {
          // debugger;
          props.handleNext;
          console.log("Next clicked", props.data.next);
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default MgPagination;
