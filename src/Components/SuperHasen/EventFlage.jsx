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
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px", // Standardmäßiger Abstand für größere Bildschirme
        marginTop: "50px",
        position: "relative",
        flexWrap: "wrap", // Ermöglicht das Umbruch der Dreiecke bei kleinen Bildschirmen
      }}
    >
      {colors.map((color, index) => (
        <motion.div
          key={index}
          style={{
            width: "40px", // Standardbreite der Dreiecke
            height: "60px", // Standardhöhe der Dreiecke
            backgroundColor: color,
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Dreiecksform
            transformOrigin: "top center", // Animationsursprung
          }}
          animate={{
            y: [0, -15, 0], // Bewegung nach oben und zurück
            rotate: [0, 2, -2, 0], // Leichtes Wackeln für einen realistischen Effekt
          }}
          transition={{
            repeat: Infinity, // Endlose Wiederholung der Animation
            duration: 2, // Dauer einer Animation
            delay: index * 0.2, // Verzögerung zwischen den Dreiecken
          }}
        />
      ))}
      <style jsx>{`
        @media (max-width: 1024px) {
          div {
            gap: 8px; // Kleinere Lücken für kleinere Bildschirme
          }
          motion.div {
            width: 35px; // Etwas kleinere Dreiecke
            height: 55px; // Etwas kleinere Höhe
          }
        }

        @media (max-width: 768px) {
          div {
            gap: 5px; // Noch kleinere Lücken für noch kleinere Bildschirme
          }
          motion.div {
            width: 30px; // Weitere Reduzierung der Dreiecksgröße
            height: 45px; // Weitere Reduzierung der Höhe
          }
        }

        @media (max-width: 480px) {
          div {
            gap: 3px; // Noch kleinere Lücken für sehr kleine Bildschirme
          }
          motion.div {
            width: 25px; // Noch kleinere Dreiecke
            height: 35px; // Noch kleinere Höhe
          }
        }
      `}</style>
    </div>
  );
};

export default EventFlage;
