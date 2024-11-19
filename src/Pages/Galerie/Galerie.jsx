import React, { useState } from "react";
import "../../Pages/Galerie/Galerie.css";
import Image1 from "../../assets/img/kinder2.png";
import Image2 from "../../assets/img/hero2.png";
import Image3 from "../../assets/img/kinder.png";

// Mini-Hasen

import MiniHasen1 from "../Galerie/Image/MiniHasen/mini1.png";
import MiniHasen2 from "../Galerie/Image/MiniHasen/mini2.png";
import MiniHasen3 from "../Galerie/Image/MiniHasen/mini3.png";
import MiniHasen4 from "../Galerie/Image/MiniHasen/mini4.png";
import MiniHasen5 from "../Galerie/Image/MiniHasen/mini5.png";
import MiniHasen6 from "../Galerie/Image/MiniHasen/mini6.png";
import MiniHasen7 from "../Galerie/Image/MiniHasen/mini7.png";
import MiniHasen8 from "../Galerie/Image/MiniHasen/mini8.png";
import MiniHasen9 from "../Galerie/Image/MiniHasen/mini9.png";
import MiniHasen10 from "../Galerie/Image/MiniHasen/mini10.png";
import MiniHasen11 from "../Galerie/Image/MiniHasen/mini11.png";
import MiniHasen12 from "../Galerie/Image/MiniHasen/mini12.png";
import MiniHasen13 from "../Galerie/Image/MiniHasen/mini13.png";

// Super-Hasen
import SuperHasen1 from "../Galerie/Image/SuperHasen/super1.png";
import SuperHasen2 from "../Galerie/Image/SuperHasen/super2.png";
import SuperHasen3 from "../Galerie/Image/SuperHasen/super3.png";
import SuperHasen4 from "../Galerie/Image/SuperHasen/super4.png";
import SuperHasen5 from "../Galerie/Image/SuperHasen/super5.png";
import SuperHasen6 from "../Galerie/Image/SuperHasen/super6.png";
import SuperHasen7 from "../Galerie/Image/SuperHasen/super7.png";
import SuperHasen8 from "../Galerie/Image/SuperHasen/super8.png";
import SuperHasen9 from "../Galerie/Image/SuperHasen/super9.png";
import SuperHasen10 from "../Galerie/Image/SuperHasen/super10.png";

// Küche
import Küche1 from "../Galerie/Image/Kuche/kuche1.png";
import Küche2 from "../Galerie/Image/Kuche/kuche2.png";
import Küche3 from "../Galerie/Image/Kuche/kuche3.png";
import Küche4 from "../Galerie/Image/Kuche/kuche3.png";

// Spielplatz
import Spielplatz1 from "../Galerie/Image/Spiel/Spiel1.png";
import Spielplatz2 from "../Galerie/Image/Spiel/Spiel2.png";
import Spielplatz3 from "../Galerie/Image/Spiel/Spiel3.png";
import Spielplatz4 from "../Galerie/Image/Spiel/Spiel4.png";
import Spielplatz5 from "../Galerie/Image/Spiel/Spiel5.png";
import Spielplatz6 from "../Galerie/Image/Spiel/Spiel6.png";

const Galerie = () => {
  const galleries = {
    "Mini-Hasen": [
      { src: MiniHasen1, text: "Mini-Hasen Bild 1" },
      { src: MiniHasen2, text: "Mini-Hasen Bild 2" },
      { src: MiniHasen3, text: "Mini-Hasen Bild 3" },
      { src: MiniHasen4, text: "Mini-Hasen Bild 4" },
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
      { src: SuperHasen9, text: "Super-Hasen Bild 9" },
      { src: SuperHasen10, text: "Super-Hasen Bild 10" },
    ],
    Küche: [
      { src: Küche1, text: "Küche Bild 1" },
      { src: Küche2, text: "Küche Bild 2" },
      { src: Küche3, text: "Küche Bild 3" },
      { src: Küche4, text: "Küche Bild 4" },
    ],
    Spielplatz: [
      { src: Spielplatz1, text: "Spielplatz Bild 1" },
      { src: Spielplatz2, text: "Spielplatz Bild 2" },
      { src: Spielplatz3, text: "Spielplatz Bild 3" },
      { src: Spielplatz4, text: "Spielplatz Bild 4" },
      { src: Spielplatz5, text: "Spielplatz Bild 5" },
      { src: Spielplatz6, text: "Spielplatz Bild 6" },
    ],
  };

  const [activeGallery, setActiveGallery] = useState("Mini-Hasen");

  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="gallery-container">
      {/* Boxen in einer Reihe */}
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
  );
};

export default Galerie;
