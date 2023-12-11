import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa/index.esm';
import "./Paginator.css";

export const Paginator = ({
  pagination,
  handlePagination,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <Pagination>
      {pagination.currentPage !== 1 && (
        <Pagination.Prev className="custom-pagination-prev "  onClick={handlePrevPage} > <FaChevronLeft className="prev" /> </Pagination.Prev>
      )}
      {pagination.pages.map((paginate) => (
        <Pagination.Item
          key={paginate.number}
          active={paginate.number === pagination.currentPage}
          activeLabel=""
          onClick={() => handlePagination(paginate.url)}>
          {paginate.number}
        </Pagination.Item>
      ))}

      {pagination.currentPage !== pagination.pagesCount && (
        <Pagination.Next className="custom-pagination-prev "   onClick={handleNextPage}> <FaChevronRight />  </Pagination.Next> 
      )}
    </Pagination>
  );
};

Paginator.propTypes = {
  pagination: PropTypes.object,
  handlePagination: PropTypes.func,
  handleNextPage: PropTypes.func,
  handlePrevPage: PropTypes.func,
  pagesCount: PropTypes.number
};