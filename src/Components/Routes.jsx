import React from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/ÜberUns/About";
import Programs from "../Pages/Programs/Programs";
import Eltern from "../Pages/Eltern/Eltern";
import Abloefe from "../Pages/Abläufe/Abloeufe/";
import PageNotFound from "../Pages/Pagenotfound/PageNotFound";

const routes = [
  { path: "/", element: <Home />, Id: 1 },
  { path: "/about", element: <About />, Id: 2 },
  { path: "/programs", element: <Programs />, Id: 3 },
  { path: "/eltern", element: <Eltern />, Id: 4 },
  { path: "/abläufe", element: <Abloefe />, Id: 5 },
  { path: "*", element: <PageNotFound />, Id: 6 },
];

export default routes;
