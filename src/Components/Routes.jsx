import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/UberUns/About";
import Kontakt from "../Pages/Kontakt/Kontakt";
import Galerie from "../Pages/Galerie/Galerie";
import Abloefe from "../Pages/Abläufe/Abloeufe/";
import PageNotFound from "../Pages/Pagenotfound/PageNotFound";
import SuperHasen from "./SuperHasen/SuperHasen";
import MiniHasen from "./MiniHasen/MiniHasen";
import Impressum from "./Impressum/Impressum";
import HomeTest from "../Pages/Home/HomeTest";

const routes = [
  { path: "home/", element: <Home />, Id: 1 },
  { path: "/about", element: <About />, Id: 2 },
  { path: "/galerie", element: <Galerie />, Id: 3 },
  { path: "/abläufe", element: <Abloefe />, Id: 4 },
  { path: "/kontakt", element: <Kontakt />, Id: 5 },
  { path: "/superhasen", element: <SuperHasen />, Id: 6 },
  { path: "/minihasen", element: <MiniHasen />, Id: 7 },
  { path: "/impressum", element: <Impressum />, Id: 8 },
  { path: "*", element: <PageNotFound />, Id: 9 },
  { path: "/", element: <HomeTest />, Id: 10 },
];

export default routes;
