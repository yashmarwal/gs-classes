import type { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "courses", element: <Courses /> },
      { path: "facilities", element: <Facilities /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
