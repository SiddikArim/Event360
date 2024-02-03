import App from "@/App";
import Index from "@/Pages/Home/Index";

import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Index /> }],
  },
]);

export default route;
