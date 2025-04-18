import React, { useState } from "react";
import "../../Pages/Galerie/Galerie.css";
import GalerieHero from "../../assets/img/Galerie.png";

// Mini-Hasen

import MiniHasen1 from "../../assets/image/miniHasen/mini1.png";
import MiniHasen2 from "../../assets/image/miniHasen/mini2.png";
import MiniHasen3 from "../../assets/image/miniHasen/mini3.png";
import MiniHasen4 from "../../assets/image/miniHasen/mini4.png";
import MiniHasen5 from "../../assets/image/miniHasen/mini5.png";
import MiniHasen6 from "../../assets/image/miniHasen/mini6.png";
import MiniHasen7 from "../../assets/image/miniHasen/mini7.png";
import MiniHasen8 from "../../assets/image/miniHasen/mini8.png";
import MiniHasen9 from "../../assets/image/miniHasen/mini9.png";
import MiniHasen10 from "../../assets/image/miniHasen/mini10.png";
import MiniHasen11 from "../../assets/image/miniHasen/mini11.png";
import MiniHasen12 from "../../assets/image/miniHasen/mini12.png";
import MiniHasen13 from "../../assets/image/miniHasen/mini13.png";

// Super-Hasen
import SuperHasen1 from "../../assets/image/superHasen/super1.png";
import SuperHasen2 from "../../assets/image/superHasen/super2.png";
import SuperHasen3 from "../../assets/image/superHasen/super3.png";
import SuperHasen4 from "../../assets/image/superHasen/super4.png";
import SuperHasen5 from "../../assets/image/superHasen/super5.png";
import SuperHasen6 from "../../assets/image/superHasen/super6.png";
import SuperHasen7 from "../../assets/image/superHasen/super7.png";
import SuperHasen8 from "../../assets/image/superHasen/super8.png";
import SuperHasen10 from "../../assets/image/superHasen/super10.png";

// Küche
import Küche1 from "../../assets/image/Kuche/kuche1.png";
import Küche2 from "../../assets/image/Kuche/kuche2.png";
import Küche3 from "../../assets/image/Kuche/kuche3.png";

// Spielplatz
import Spielplatz1 from "../../assets/image/Spiel/spiel1.png";
import Spielplatz2 from "../../assets/image/Spiel/spiel2.png";
import Spielplatz3 from "../../assets/image/Spiel/spiel3.png";
import Spielplatz4 from "../../assets/image/Spiel/spiel4.png";
import Spielplatz5 from "../../assets/image/Spiel/spiel5.png";
import Spielplatz6 from "../../assets/image/Spiel/spiel6.png";

const Galerie = () => {
  const galleries = {
    "Mini-Hasen": [
      { src: MiniHasen1, text: "Mini-Hasen Bild 1" },
      { src: MiniHasen2, text: "Mini-Hasen Bild 2" },
      { src: MiniHasen3, text: "Mini-Hasen Bild 3" },
      { src: MiniHasen5, text: "Mini-Hasen Bild 5" },
      { src: MiniHasen6, text: "Mini-Hasen Bild 6" },
      { src: MiniHasen7, text: "Mini-Hasen Bild 7" },
      { src: MiniHasen8, text: "Mini-Hasen Bild 8" },
      { src: MiniHasen9, text: "Mini-Hasen Bild 9" },
      { src: MiniHasen10, text: "Mini-Hasen Bild 10" },
      { src: MiniHasen11, text: "Mini-Hasen Bild 11" },
      { src: MiniHasen12, text: "Mini-Hasen Bild 12" },
      { src: MiniHasen13, text: "Mini-Hasen Bild 13" },
    ],
    "Super-Hasen": [
      { src: SuperHasen1, text: "Super-Hasen Bild 1" },
      { src: SuperHasen2, text: "Super-Hasen Bild 2" },
      { src: SuperHasen3, text: "Super-Hasen Bild 3" },
      { src: SuperHasen4, text: "Super-Hasen Bild 4" },
      { src: SuperHasen5, text: "Super-Hasen Bild 5" },
      { src: SuperHasen6, text: "Super-Hasen Bild 6" },
      { src: SuperHasen7, text: "Super-Hasen Bild 7" },
      { src: SuperHasen8, text: "Super-Hasen Bild 8" },
      { src: SuperHasen10, text: "Super-Hasen Bild 10" },
    ],
    "hauseigene Küche": [
      { src: Küche1, text: "Küche Bild 1" },
      { src: Küche2, text: "Küche Bild 2" },
      { src: Küche3, text: "Küche Bild 3" },
    ],
    Spielplatz: [
      { src: Spielplatz1, text: "Spielplatz Bild 1" },
      { src: Spielplatz2, text: "Spielplatz Bild 2" },
      { src: Spielplatz3, text: "Spielplatz Bild 3" },
      { src: Spielplatz4, text: "Spielplatz Bild 4" },
      { src: Spielplatz5, text: "Spielplatz Bild 5" },
    ],
  };

  const [activeGallery, setActiveGallery] = useState("Mini-Hasen");

  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {/* Boxen in einer Reihe */}
        <img src={GalerieHero} alt="" />
        <div className="gallery-grid">
          {" "}
          <h1>Galerie</h1>
          {/* Buttons für Galerieauswahl */}
          <div className="gallery-buttons">
            {Object.keys(galleries).map((gallery) => (
              <button
                key={gallery}
                className={`gallery-button ${
                  activeGallery === gallery ? "active" : ""
                }`}
                onClick={() => setActiveGallery(gallery)}
              >
                {gallery}
              </button>
            ))}
          </div>
          {galleries[activeGallery].map((item, index) => (
            <div
              className="gallery-box"
              key={index}
              onClick={() => setFullscreenImage(item.src)}
            >
              <img src={item.src} alt={item.text} />
            </div>
          ))}
        </div>{" "}
        {/* Fullscreen Image */}
        {fullscreenImage && (
          <div className="fullscreen" onClick={() => setFullscreenImage(null)}>
            <img src={fullscreenImage} alt="Fullscreen" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Galerie;
