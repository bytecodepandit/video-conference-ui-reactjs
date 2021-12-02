import React from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";

const Pagination = ({ pageSize, totalItems, onPageChange }) => {
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  const getPaginationGroup = React.useMemo(() => {
    const pageCount = Math.floor((totalItems + pageSize - 1) / pageSize);
    return new Array(pageCount).fill();
  }, [totalItems, pageSize]);
  const onPageSelect = (index) => {
    setActivePageIndex(index);
    onPageChange(index);
  };
  return (
    <div className="pagination_wrapper">
      {getPaginationGroup.length > 1 && getPaginationGroup.map((_, index) => (
        <button
          type="button"
          onClick={() => onPageSelect(index)}
          className={`theme_btn ${activePageIndex === index ? 'active' : null}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

Pagination.protoTypes = {
  pageSize: PropTypes.number,
  totalItems: PropTypes.number,
  onPageChange: PropTypes.func,
};
