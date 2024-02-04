import App from "@/App";
import About from "@/Pages/About/About";
import Contact from "@/Pages/Contact/Contact";
import Index from "@/Pages/Home/Index";

import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Index /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <Contact /> },
    ],
  },
]);

export default route;
