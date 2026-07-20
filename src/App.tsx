import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    entry: "src/Layout.tsx",
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      { path: "courses", Component: Courses, entry: "src/pages/Courses.tsx" },
      { path: "facilities", Component: Facilities, entry: "src/pages/Facilities.tsx" },
      { path: "about", Component: About, entry: "src/pages/About.tsx" },
      { path: "contact", Component: Contact, entry: "src/pages/Contact.tsx" },
      // Real static 404.html (static hosts auto-serve this for unmatched paths)
      { path: "404", Component: NotFound, entry: "src/pages/NotFound.tsx" },
      // Client-side catch-all so in-app navigation to a bad path also renders NotFound
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" },
    ],
  },
];
