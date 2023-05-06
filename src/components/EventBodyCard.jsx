import { formatDate } from "../utils/data";

function EventBodyCard({ investment, date, place, category }) {
  const formattedDate = formatDate(date);
  return (
    <div class="Col-lg-3 col-md-3 col-sm-12 mb-4 ">
      <div class="card sticky-top" style={{ zIndex: "1" }}>
        <div class="card-header">
          <h5 class="card-title">
            <i class="fas fa-tags"></i> <strong>Investment</strong>
          </h5>
          <p class="card-text">USD {investment}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fas fa-calendar-alt"></i> Date <br />
            {formattedDate}
          </li>
          <li class="list-group-item">
            <i class="fas fa-map-marker-alt"></i> Venue <br />
            {place}
          </li>
          <li class="list-group-item">
            <i class="fas fa-folder-open"></i> Category: <br />
            {category}
          </li>
        </ul>
        <div class="card-footer ">
          <a href="">Register Now</a>
        </div>
      </div>
    </div>
  );
}

export default EventBodyCard;
