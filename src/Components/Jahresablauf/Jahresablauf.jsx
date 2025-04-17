import React from "react";
import { motion } from "framer-motion"; // Importiere Framer Motion
import "./Jahresablauf.css";
import Img from "../../assets/img/img.png";
import Laterne from "..//Jahresablauf/laterne.png";
import Weihnachten from "..//Jahresablauf/xmas.png";
import Karnaval from "..//Jahresablauf/karnav.png";
import Ostern from "..//Jahresablauf/oster.png";
import Abschied from "..//Jahresablauf/abschied.png";
import Sommer from "..//Jahresablauf/summer.png";
import Zahn from "..//Jahresablauf/zahn.png";
import Fototag from "..//Jahresablauf/foto.png";
import Meeting from "..//Jahresablauf/meeting.png";

import ErsteHilfe from "..//Jahresablauf/hilfe.png";

const Jahresablauf = () => {
  const jahresablaufData = [
    {
      id: 1,
      name: "Elternabend",
      englishName: "Parent-Teacher Meeting",
      imgSrc: Meeting,
    },
    {
      id: 2,
      name: "Laternenfest",
      englishName: "Lantern Festival",
      imgSrc: Laterne,
    },
    {
      id: 3,
      name: "Weihnachtsfeier",
      englishName: "Christmas Celebration",
      imgSrc: Weihnachten,
    },
    {
      id: 4,
      name: "Fasching",
      englishName: "Carnival",
      imgSrc: Karnaval,
    },
    {
      id: 5,
      name: "Osterfrühstück",
      englishName: "Easter Breakfast",
      imgSrc: Ostern,
    },

    {
      id: 6,
      name: "Sommerfest",
      englishName: "Summer Festival",
      imgSrc: Sommer,
    },
    {
      id: 7,
      name: "Fototag",
      englishName: "Photo Day",
      imgSrc: Fototag,
    },
    {
      id: 8,
      name: "Kroko Zahnpflege",
      englishName: "Crocodile Dental Care",
      imgSrc: Zahn,
    },
    {
      id: 9,
      name: "Abschiedsfeier der Vorschulkinder",
      englishName: "Farewell Party for Preschool Children",
      imgSrc: Abschied,
    },
    {
      id: 10,
      name: "Erste Hilfe Kurs der Erzieher/innen",
      englishName: "First Aid Course for Educators",
      imgSrc: ErsteHilfe,
    },
  ];

  return (
    <section className="jahresablauf">
      <h2 className="jahres-header">Jahresprogramm</h2>
      <div className="jahresablauf-container">
        {jahresablaufData.map((item) => (
          <motion.div
            key={item.id}
            className={`box box${item.id}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: item.id * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{ scale: 1.05 }} // Hover-Effekt
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.id * 0.2, duration: 0.5 }}
              className="event-image"
            >
              <img
                src={item.imgSrc}
                alt={`${item.name} - ${item.englishName}`}
              />
            </motion.div>

            <div className="text">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: item.id * 0.3, duration: 0.4 }}
              >
                {item.name} ({item.englishName})
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Jahresablauf;
