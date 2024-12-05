import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import de from "date-fns/locale/de"; // Importiere die deutsche Lokalisierung
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarEmbed.css"; // Importiere die CSS-Datei

import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS,
  de,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarEmbed = () => {
  const [events, setEvents] = useState([
    {
      title: "Beispiel-Termin",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("Gib einen Titel für deinen Termin ein:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleEventClick = (event) => {
    const confirmDelete = window.confirm(
      `Möchtest du den Termin "${event.title}" löschen?`
    );
    if (confirmDelete) {
      setEvents(events.filter((e) => e !== event));
    }
  };

  return (
    <div className="calendar-container">
      <h2>Bearbeitbarer Kalender</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh", margin: "20px" }}
        selectable={true} // Aktiviert das Hinzufügen von Terminen
        onSelectSlot={handleSelectSlot} // Slot-Auswahl behandeln
        onSelectEvent={handleEventClick} // Termin anklicken
      />
    </div>
  );
};

export default CalendarEmbed;
