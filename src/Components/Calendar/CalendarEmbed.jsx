import React from "react";

const CalendarEmbed = ({
  backgroundColor = "#b8df57",
  padding = "10px",
  borderRadius = "10px",
  calendarUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&showTz=0&showTabs=0&showNav=0&showTitle=0&src=mr.tbrown1997%40gmail.com",
  width = "100%",
  height = "600px",
}) => {
  return (
    <div
      style={{
        backgroundColor,
        padding,
        borderRadius,
      }}
    >
      <iframe
        src={calendarUrl}
        style={{
          border: "1px solid #ccc",
          width,
          height,
          borderRadius,
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default CalendarEmbed;
