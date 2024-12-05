import React from "react";
import About from "../Pages/UberUns/About";
import Kontakt from "../Pages/Kontakt/Kontakt";
import Galerie from "../Pages/Galerie/Galerie";
import Abloefe from "../Pages/Abläufe/Abloeufe/";
import PageNotFound from "../Pages/Pagenotfound/PageNotFound";
import SuperHasen from "./SuperHasen/SuperHasen";
import MiniHasen from "./MiniHasen/MiniHasen";
import Impressum from "../Components/Impressum/Impressum";
import HomeTest from "../Pages/Home/HomeTest";
import Programme from "../Components/Programme/Programme";

const routes = [
  { path: "/", element: <HomeTest />, Id: 1 },
  { path: "/about", element: <About />, Id: 2 },
  { path: "/galerie", element: <Galerie />, Id: 3 },
  { path: "/programme", element: <Abloefe />, Id: 4 },
  { path: "/kontakt", element: <Kontakt />, Id: 5 },
  { path: "/superhasen", element: <SuperHasen />, Id: 6 },
  { path: "/minihasen", element: <MiniHasen />, Id: 7 },
  { path: "/impressum", element: <Impressum />, Id: 8 },
  { path: "/programmeFoerKinder", element: <Programme />, Id: 8 },
  { path: "*", element: <PageNotFound />, Id: 9 },
];

export default routes;
