import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./Components/Routes";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollButton from "../src/Components/ScrollButton";
import { useEffect } from "react";

function App() {
  const location = useLocation(); // Überwacht die aktuelle Route

  useEffect(() => {
    window.scrollTo(0, 0); // Setzt die Scrollposition auf oben zurück
  }, [location]); // Führt useEffect bei jedem Routenwechsel aus

  return (
    <Layout>
      <ScrollButton />
      <Routes>
        {routes.map((route) => (
          <Route key={route.Id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
