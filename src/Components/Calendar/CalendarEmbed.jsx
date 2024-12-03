import React from "react";

const CalendarEmbed = ({
  padding = "10px",
  borderRadius = "10px",
  calendarUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FBerlin&showTz=0&showTabs=0&showNav=0&showTitle=0&src=mr.tbrown1997%40gmail.com",
  width = "1200px",
  height = "600px",
  display = "flex",
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "column",
  border = "2px solid black",
  marginTop = "10px",
}) => {
  return (
    <div
      style={{
        marginTop,
        border,
        padding,
        borderRadius,
        display,
        justifyContent,
        alignItems,
        flexDirection,
      }}
    >
      <h1>hhsh</h1>
      <iframe
        src={calendarUrl}
        style={{
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
