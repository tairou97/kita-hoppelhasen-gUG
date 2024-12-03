import React, { useState } from "react";
import Slider from "react-slick"; // Importiere den Slick-Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Deine Bilder
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

import "./CardSlider.css"; // Dein CSS-Datei einbinden

const CardSlider = () => {
  const [mainImage, setMainImage] = useState(MiniHasen1);
  const images = [
    MiniHasen1,
    MiniHasen2,
    MiniHasen3,
    MiniHasen4,
    MiniHasen5,
    MiniHasen6,
    MiniHasen7,
    MiniHasen8,
    MiniHasen9,
    MiniHasen10,
    MiniHasen11,
    MiniHasen12,
    MiniHasen13,
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="gallery-container">
      {/* Hauptbild */}

      <div className="main-image">
        <img src={mainImage} alt="Main" className="main-img" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <div key={index} className="thumbnail-container">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(image)} // Wechsel des Hauptbildes
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
