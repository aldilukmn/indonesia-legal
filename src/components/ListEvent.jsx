import { Link } from "react-router-dom";

function ListEvent({ currentEvent }) {
  function formatDate(dateStr) {
    const [startDate, endDate] = dateStr.split("/");
    
    const startDay = new Date(startDate).getDate();
    const endDay = new Date(endDate).getDate();
    
    const startMonth = new Date(startDate).toLocaleString("en-us", {
      month: "long",
    });
    
    const year = new Date(startDate).getFullYear();
    
    return `${startDay}-${endDay} ${startMonth} ${year}`;
  }

  return (
    <>
      {currentEvent.map((event) => (
        <>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img className="img-fluid mb-5 shadow" src={event.image} alt="image" />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <h4 className="mb-4">
              <strong>{event.title}</strong>
            </h4>
            <p style={{ font: "14px" }}>{formatDate(event.date)} | {event.place}</p>
            <p className="card-text">
              {event.body.substring(0, 220)}...{" "}
              <Link to={`/event/${event.id}`}>Show more</Link>
            </p>
          </div>
        </>
      ))}
    </>
  );
}

export default ListEvent;


