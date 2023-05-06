import PaginationNews from "./PaginationNews";
import PopulerNews from "./PopulerNews";
import ListEvent from "./ListEvent";
import MainEventDetailWrapper from "./MainEventDetail";

function MainEvent({ pageNumbers, currentEvent, currentPage, handleClick, handlePrevClick, handleNextClick }) {
  const pathname = window.location.pathname; // Mendapatkan path dari URL

  // Cek apakah path URL mengandung id
  const isDetailPage = pathname.match(/^\/event\/\d+$/);
  return (
    <>
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-lg-8 col-md-8 col-sm-12 pb-4">
            <div class="row">
              {isDetailPage ? <MainEventDetailWrapper currentEvent={currentEvent} handleClick={handleClick}/> : <ListEvent currentEvent={currentEvent} />}
              <PaginationNews pageNumbers={pageNumbers} currentPage={currentPage} handleClick={handleClick} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
            </div>
          </div>
          <PopulerNews />
        </div>
      </div>
    </>
  );
}

export default MainEvent;
