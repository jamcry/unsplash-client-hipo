import React from 'react'
import "./Pagination.css";

const Pagination = (props) => {
  const currentPage = parseInt(props.currentPage);
  const totalPages = parseInt(props.totalPages);
  const { decrementPageNumber, incrementPageNumber } = props;
  return (
    <>
      {(totalPages === 0) ?
        <p>Sorry, no images found for your search!</p>
        :
        <>
          <div className="pagination">
            <div className="page-counter">Page {currentPage} of {totalPages}</div>
            {(currentPage > 1) &&
              <button className="btn-pagination prev" onClick={decrementPageNumber}>
                <i className="fas fa-chevron-left" /> Prev Page
              </button>
            }
            {(currentPage < totalPages) &&
              <button className="btn-pagination next" onClick={incrementPageNumber}>
                Next Page <i className="fas fa-chevron-right" />
              </button>
            }
          </div>
        </>
      }
    </>
  )
}

export default Pagination;