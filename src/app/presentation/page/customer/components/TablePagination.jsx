import React from "react";
import { Pagination, Row, Col } from "react-bootstrap";
import "../HomePage.css";

const TablePagination = ({ totalPages, currentPage, setCurrentPage }) => (
  <Row className="justify-content-center">
    <Col xs="auto">
      <Pagination className="table-footer">
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        />
        {Array.from({ length: totalPages }, (_, i) => {
          const startPage = Math.max(0, currentPage - 2);
          const endPage = Math.min(totalPages - 1, startPage + 4);

          if (i >= startPage && i <= endPage) {
            return (
              <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Pagination.Item>
            );
          }

          return null;
        })}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        />
      </Pagination>
    </Col>
  </Row>
);

export default TablePagination;
