import React from "react";
import "./Events.css";

function Events() {
  return (
    <section id="events" className="events">
      <h2>Special Events</h2>
      <div className="event-cards">
        <div className="event-card">
          <h3>Birthdays</h3>
          <p>Brighten someone’s special day with fresh flowers.</p>
        </div>
        <div className="event-card">
          <h3>Weddings</h3>
          <p>Elegant bouquets for your unforgettable day.</p>
        </div>
        <div className="event-card">
          <h3>Special Events</h3>
          <p>Custom arrangements for all your special moments.</p>
        </div>
      </div>
    </section>
  );
}

export default Events;
