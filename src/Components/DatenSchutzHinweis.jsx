import React, { useState, useEffect } from "react";
import "../Components/DatenSchutzHinweis.css";

const DatenSchutzHinweis = () => {
  const [accepted, setAccepted] = useState(false);
  const [allowOptional, setAllowOptional] = useState(false);

  useEffect(() => {
    const preferences = JSON.parse(localStorage.getItem("cookiePreferences"));
    if (preferences?.essential) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({ essential: true, optional: allowOptional })
    );
  };

  if (accepted) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-banner">
        <h2 className="cookie-title">Cookie-Einstellungen</h2>
        <p className="cookie-description">
          Wir verwenden Cookies, um grundlegende Funktionen unserer Website zu
          gewährleisten und Ihre Nutzererfahrung zu verbessern. Sie können
          optional zusätzliche Cookies zulassen.
        </p>
        <div className="cookie-options">
          <label className="cookie-label">
            <input
              type="checkbox"
              className="cookie-checkbox"
              checked={allowOptional}
              onChange={() => setAllowOptional(!allowOptional)}
            />
            Optionale Cookies erlauben (z. B. für Analyse und Marketing)
          </label>
        </div>
        <button className="cookie-accept-button" onClick={handleAccept}>
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
};

// Stile für das verbesserte Design

export default DatenSchutzHinweis;
