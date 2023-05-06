import moment from "moment";
import EventDetailBody from "./EventDetailBody";
import EventNavigation from "./EventNavigation";
import { useState } from "react";
import { formatDate } from "../utils/data";

function EventDetail({ date, handleClick, title, place, category, body, investment, agenda }) {
  const format = "dddd, MMMM DD YYYY - h:mmA";
  const datetimeWIB = moment.utc(date).utcOffset("+0700").format(format);

  const formattedDate = formatDate(date)

  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <div class="container-fluid grey">
        <div class="container pt-5">
          <div class="row">
            <div class=" col-12 text-center">
              <h2>
                <a href="event-detail.php">
                  <strong>
                    {title}
                  </strong>
                </a>
              </h2>
              <span>
                <i class="fas fa-calendar-alt"></i> {formattedDate} | <i class="fas fa-map-marker-alt"></i> {place}
              </span>
              <EventNavigation setActiveTab={setActiveTab} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
      <EventDetailBody activeTab={activeTab} setActiveTab={setActiveTab} handleClick={handleClick} date={date} place={place} category={category} body={body} investment={investment} agenda={agenda}/>
    </>
  );
}

export default EventDetail;
