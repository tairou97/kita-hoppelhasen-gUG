import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/UberUns/About";
import Programs from "../Pages/Programs/Programs";
import Galerie from "../Pages/Galerie/Galerie";
import Abloefe from "../Pages/Abläufe/Abloeufe/";
import PageNotFound from "../Pages/Pagenotfound/PageNotFound";
import SuperHasen from "./SuperHasen/SuperHasen";
import MiniHasen from "./MiniHasen/MiniHasen";

const routes = [
  { path: "/", element: <Home />, Id: 1 },
  { path: "/about", element: <About />, Id: 2 },
  { path: "/programs", element: <Programs />, Id: 3 },
  { path: "/galerie", element: <Galerie />, Id: 4 },
  { path: "/abläufe", element: <Abloefe />, Id: 5 },
  { path: "*", element: <PageNotFound />, Id: 6 },
  { path: "/superhasen", element: <SuperHasen />, Id: 7 },
  { path: "/minihasen", element: <MiniHasen />, Id: 8 },
];

export default routes;
