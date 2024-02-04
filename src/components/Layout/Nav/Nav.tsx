import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" rounded-lg fixed w-full h-16 z-[999] ">
      <div>
        <div className="flex justify-between w-full h-full items-center p-5   max-w-[1280px] mx-auto ">
          <div>
            <NavLink to="/">
              <h1>Event360</h1>
            </NavLink>
          </div>
          <div className="flex space-x-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact-us">Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
