import React, { useState } from "react";
import Slider from "react-slick"; // Importiere den Slick-Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Deine Bilder
import SuperHasen1 from "../../assets/image/superHasen/super1.png";
import SuperHasen2 from "../../assets/image/superHasen/super2.png";
import SuperHasen3 from "../../assets/image/superHasen/super3.png";
import SuperHasen4 from "../../assets/image/superHasen/super4.png";
import SuperHasen5 from "../../assets/image/superHasen/super5.png";
import SuperHasen6 from "../../assets/image/superHasen/super6.png";
import SuperHasen7 from "../../assets/image/superHasen/super7.png";
import SuperHasen8 from "../../assets/image/superHasen/super8.png";

import SuperHasen10 from "../../assets/image/superHasen/super10.png";

import "../SuperHasen/CardSliderSuper.css"; // Dein CSS-Datei einbinden

const CardSliderSuper = () => {
  const [mainImage, setMainImage] = useState(SuperHasen1);
  const images = [
    SuperHasen1,
    SuperHasen2,
    SuperHasen3,
    SuperHasen4,
    SuperHasen5,
    SuperHasen6,
    SuperHasen7,
    SuperHasen8,
    SuperHasen10,
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

export default CardSliderSuper;
