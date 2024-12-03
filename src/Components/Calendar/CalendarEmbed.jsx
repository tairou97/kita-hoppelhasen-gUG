import React from "react";
import "./CalendarEmbed.css"; // Importiere die CSS-Datei

const CalendarEmbed = ({
  calendarUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&showTz=0&showTabs=0&showNav=0&showTitle=0&src=mr.tbrown1997%40gmail.com",
}) => {
  return (
    <div className="CalendarMain">
      {" "}
      <h2>Liebe Eltern Hier ist die Planung für 2024 / 2025</h2>
      <div className="calendar-container">
        <iframe
          src={calendarUrl}
          className="calendar-iframe"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        />
      </div>
    </div>
  );
};

export default CalendarEmbed;
