"use client";

import { Button, Pagination } from "react-bootstrap";
import "./pagination.module.css";
import { useEffect, useState } from "react";
import styles from "./pagination.module.css";

const MgPagination = (props) => {
  const [offset, setOffset] = useState(3);

  //  const offset = postPerpage * (page - 1);

  return (
    <div className="d-flex gap-3 justify-content-center">
      <Button
        disabled={false}
        onClick={() => {
          console.log("Prev clicked");
        }}
      >
        Prev
      </Button>
      <Button
        disabled={false}
        onClick={() => {
          props.handleOffsetNext;
          console.log("Next clicked", props.handleOffsetNext(offset));
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default MgPagination;
