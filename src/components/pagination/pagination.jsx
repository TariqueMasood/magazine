import { Pagination } from "react-bootstrap";
import "./pagination.module.css";

const MgPagination = () => {
  return (
    <Pagination>
      <Pagination.Prev disabled={true} />
      <Pagination.Item active={true}>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
};

export default MgPagination;
