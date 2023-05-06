import React from "react";

function EventNavigation({ setActiveTab, activeTab }) {
  return (
    <nav class="text-center mt-5">
      <div class="nav nav-tabs justify-content-center " id="nav-tab" role="tablist">
        <a className={`nav-item nav-link text-dark ${
            activeTab === "about" ? "active" : ""
          }`} id="about-event" data-toggle="tab" style={{ cursor: "pointer" }} role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => setActiveTab("about")}>
          About
        </a>
        <a
          className={`nav-item nav-link text-dark ${
            activeTab === "agenda" ? "active" : ""
          }`}
          id="agenda"
          data-toggle="tab"
          role="tab"
          style={{ cursor: "pointer" }}
          aria-controls="
          nav-profile"
          aria-selected="false"
          onClick={() => setActiveTab("agenda")}
        >
          Agenda
        </a>
      </div>
    </nav>
  );
}

export default EventNavigation;
