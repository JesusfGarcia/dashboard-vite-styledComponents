import React from "react";

const Home = React.lazy(() => import("../views/home"));
const Module1 = React.lazy(() => import("../views/module1"));
const Module2 = React.lazy(() => import("../views/module2"));

export const Routes = [
  {
    path: "/home",
    label: "Inicio",
    element: Home,
  },
  {
    path: "/module1",
    label: "Modulo 1",
    element: Module1,
  },
  {
    path: "/module2",
    label: "Modulo 2",
    element: Module2,
  },
];
