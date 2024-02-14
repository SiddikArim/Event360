import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-gray-300 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col text-white text-sm font-medium gap-4 p-4">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray-400 rounded-lg hover:bg-gray-500 transition duration-150 ease-in-out truncate flex items-center gap-2",
              { "bg-gray-900": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray-400 rounded-lg hover:bg-gray-500 transition duration-150 ease-in-out truncate flex items-center gap-2",
              { "bg-gray-900": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray-400 rounded-lg hover:bg-gray-500 transition duration-150 ease-in-out truncate flex items-center gap-2",
              { "bg-gray-900": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
