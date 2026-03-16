import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import CasinoHome from "./components/CasinoHome";
import Homepage from "./components/Homepage";
import Downloads from "./components/Downloads";
import Repository from "./components/Repository";
import Contact from "./components/Contact";
import About from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: CasinoHome },
      { path: "m-preg", Component: Homepage },
      { path: "downloads", Component: Downloads },
      { path: "repository", Component: Repository },
      { path: "contact", Component: Contact },
      { path: "about", Component: About },
    ],
  },
]);