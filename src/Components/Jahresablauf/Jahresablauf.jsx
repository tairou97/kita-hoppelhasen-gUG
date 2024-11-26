import React from "react";
import "./Jahresablauf.css";
import Img from "../../assets/img/img.png";

const Jahresablauf = () => {
  const jahresablaufData = [
    {
      id: 1,
      name: "Elternabend",
      englishName: "Parent-Teacher Meeting",
      imgSrc: Img,
    },
    {
      id: 2,
      name: "Laternenfest",
      englishName: "Lantern Festival",
      imgSrc: Img,
    },
    {
      id: 3,
      name: "Weihnachtsfeier",
      englishName: "Christmas Celebration",
      imgSrc: Img,
    },
    {
      id: 4,
      name: "Fasching",
      englishName: "Carnival",
      imgSrc: Img,
    },
    {
      id: 5,
      name: "Osterfrühstück",
      englishName: "Easter Breakfast",
      imgSrc: Img,
    },
    {
      id: 6,
      name: "Abschiedsfeier der Vorschulkinder",
      englishName: "Farewell Party for Preschool Children",
      imgSrc: Img,
    },
    {
      id: 7,
      name: "Sommerfest",
      englishName: "Summer Festival",
      imgSrc: Img,
    },
    {
      id: 8,
      name: "Fototag",
      englishName: "Photo Day",
      imgSrc: Img,
    },
    {
      id: 9,
      name: "Kroko Zahnpflege",
      englishName: "Crocodile Dental Care",
      imgSrc: Img,
    },
    {
      id: 10,
      name: "Abschiedsfeier der Vorschulkinder",
      englishName: "Farewell Party for Preschool Children",
      imgSrc: Img,
    },
    {
      id: 11,
      name: "Erste Hilfe Kurs der Erzieher/innen",
      englishName: "First Aid Course for Educators",
      imgSrc: Img,
    },
  ];
  return (
    <section className="jahresablauf">
      <h1 className="jahres-header">Jahresablauf</h1>
      <h1 className="jahres-header">Jahresprogramm</h1>
      <div className="jahresablauf-container">
        {jahresablaufData.map((item) => (
          <div key={item.id} className={`box box${item.id}`}>
            <div>
              <img
                src={item.imgSrc}
                alt={`${item.name} - ${item.englishName}`}
                className="event-image"
              />
            </div>
            <div className="text">
              <span>
                {item.name} ({item.englishName})
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jahresablauf;
