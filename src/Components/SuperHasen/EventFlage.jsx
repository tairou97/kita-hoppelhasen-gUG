import React from "react";
import { motion } from "framer-motion";
const EventFlage = () => {
  const colors = [
    "#F2A1A1",
    "#FFE27A",
    "#A1D8F2",
    "#A8F2A1",
    "#F2A1F2",
    "#2f3105",
    "#FFD700",
    "#87CEEB",
    "#32CD32",
    "#FF69B4",
    "#FFA07A",
    "#FF6347",
    "#D3D3D3",
    "#00BFFF",
    "#8A2BE2",
    "#FF4500",
    "#6A5ACD",
    "#00FA9A",
    "#FF8C00",
    "#20B2AA",
    "#800080",
    "#98FB98",
    "#FF1493",
    "#FFFF00",
    "#F0E68C",
    "#C71585",
    "#4682B4",
    "#7FFF00",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px", // Geringerer Abstand für mehr Dreiecke
        marginTop: "50px", // Platz nach oben
        position: "relative",
      }}
    >
      {colors.map((color, index) => (
        <motion.div
          key={index}
          style={{
            width: "40px", // Breitere Dreiecke für bessere Sichtbarkeit
            height: "60px",
            backgroundColor: color,
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Dreiecksform
            transformOrigin: "top center", // Animationsursprung
          }}
          animate={{
            y: [0, -15, 0], // Die Bewegung nach oben und zurück
            rotate: [0, 2, -2, 0], // Leichtes Wackeln, um realistisch zu wirken
          }}
          transition={{
            repeat: Infinity, // Endlose Wiederholung
            duration: 2, // Dauer einer Bewegung
            delay: index * 0.2, // Verzögerung zwischen den Dreiecken
          }}
        />
      ))}
    </div>
  );
};

export default EventFlage;
