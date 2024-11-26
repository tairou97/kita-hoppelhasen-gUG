import React from "react";

const Impressum = () => {
  const events = [
    { date: "2024-10-04", title: "Brückentag", type: "Kita geschlossen" },
    { date: "2024-11-01", title: "Konzeptionstag", type: "Kita geschlossen" },
    {
      date: "2024-12-23",
      endDate: "2024-12-31",
      title: "Weihnachtsschließzeit",
      type: "Kita geschlossen",
    },
    {
      date: "2024-10-02",
      title: "Elternabend Superhasen (16:30 Uhr)",
      type: "Event",
    },
    { date: "2024-11-15", title: "Laternenfest", type: "Event" },
    {
      date: "2024-12-13",
      title: "Weihnachtsfeier (nur für die Kinder)",
      type: "Event",
    },
    { date: "2025-05-02", title: "Brückentag", type: "Kita geschlossen" },
    {
      date: "2025-07-28",
      endDate: "2025-08-18",
      title: "Sommerschließung",
      type: "Kita geschlossen",
    },
    { date: "2025-03-04", title: "Fasching", type: "Event" },
    { date: "2025-06-05", title: "Fotograf", type: "Event" },
    { date: "2025-07-04", title: "Sommerfest", type: "Event" },
  ];

  // iCal-Datei generieren
  const generateICS = () => {
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Kita Hoppelhasen//Kalender//DE`;

    events.forEach((event) => {
      const startDate = event.date.replace(/-/g, ""); // Format: YYYYMMDD
      const endDate = event.endDate
        ? event.endDate.replace(/-/g, "")
        : startDate;

      icsContent += `
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART;VALUE=DATE:${startDate}
DTEND;VALUE=DATE:${endDate}
DESCRIPTION:${event.type}
END:VEVENT`;
    });

    icsContent += `
END:VCALENDAR`;

    // Speichern als .ics-Datei
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    saveAs(blob, "Kita_Hoppelhasen_Kalender.ics");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Kita Hoppelhasen Kalender 2024/2025</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Datum</th>
            <th style={styles.th}>Titel</th>
            <th style={styles.th}>Typ</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.td}>
                {event.date} {event.endDate ? `- ${event.endDate}` : ""}
              </td>
              <td style={styles.td}>{event.title}</td>
              <td style={styles.td}>{event.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={styles.button} onClick={generateICS}>
        Kalender als iCal exportieren
      </button>
      <p style={styles.footer}>
        Sie können diese Datei in Google Calendar importieren!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
  },
  row: {
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    color: "#7f8c8d",
    fontSize: "14px",
  },
};

export default Impressum;
