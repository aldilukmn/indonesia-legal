import { useState } from "react";
import EventBody from "./EventBody";
import EventBodyCard from "./EventBodyCard";
import EventDayDetail from "./EventDayDetail";

function EventDetailBody({ activeTab, setActiveTab, handleClick, investment, date, place, category, body, agenda }) {
  return (
    <div class="container">
      <div class="row pt-5 pb-5 px-2">
        <div class="tab-content" id="nav-tabContent1">
          <div class={`tab-pane fade show ${activeTab === "about" ? "active" : ""}`} id="nav-about" role="tabpanel" aria-labelledby="about-event">
            <div class="row ">
              <EventBody handleClick={handleClick} body={body}/>
              <EventBodyCard investment={investment} date={date} place={place} category={category} />
            </div>
          </div>
          <div class={`tab-pane fade show ${activeTab === "agenda" ? "active" : ""}`} id="nav-agenda" role="tabpanel" aria-labelledby="agenda-event">
            <div class="row ">
              <EventDayDetail date={date} agenda={agenda}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailBody;
