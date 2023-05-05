function PaginationNews({ pageNumbers, currentPage, handleClick, handlePrevClick, handleNextClick }) {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
              <a className="page-link" onClick={handlePrevClick} aria-label="Previous" style={{ cursor: "pointer" }}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pageNumbers.map((number) => (
              <li key={number} className={currentPage === number ? "page-item active" : "page-item"}>
                <a id={number} className="page-link" onClick={handleClick} style={{ cursor: "pointer" }}>
                  {number}
                </a>
              </li>
            ))}
            <li className={currentPage === pageNumbers.length ? "page-item disabled" : "page-item"}>
              <a className="page-link" onClick={handleNextClick} aria-label="Next" style={{ cursor: "pointer" }}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PaginationNews;