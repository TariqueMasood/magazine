import { Pagination } from "react-bootstrap";
import "./pagination.module.css";

const MgPagination = (props) => {
  return (
    <Pagination>
      <Pagination.Prev
        onClick={props.prevButton}
        disabled={props.pageCount <= 1}
      />
      <Pagination.Item active={true}>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next onClick={props.nextButton} disabled={props.isDisabled} />
    </Pagination>
  );
};

export default MgPagination;
