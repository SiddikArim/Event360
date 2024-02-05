import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Nav = () => {
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, transition: { duration: 1 }, y: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-lg fixed  w-full h-16 z-50 "
    >
      <div>
        <div className="flex justify-between w-full h-full items-center py-5   max-w-[1280px] mx-auto ">
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
    </motion.div>
  );
};

export default Nav;
