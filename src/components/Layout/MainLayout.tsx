import { Outlet } from "react-router-dom";
// import Nav from "./Nav/Nav";

import Nav from "./Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
