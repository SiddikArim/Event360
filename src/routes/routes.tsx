import App from "@/App";
import About from "@/Pages/About/About";
import AddService from "@/Pages/Admin/AddService";
import Dashboard from "@/Pages/Admin/Dashboard";
import ServiceList from "@/Pages/Admin/ServiceList";
import Contact from "@/Pages/Contact/Contact";
import Index from "@/Pages/Home/Index";
import AdminLayout from "@/components/Layout/AdminLayout";

import { Navigate, createBrowserRouter } from "react-router-dom";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "service-list", element: <ServiceList /> },
      { path: "add-service", element: <AddService /> },
    ],
  },
]);

export default route;
