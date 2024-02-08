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
        <div className="flex justify-between w-full h-full items-center py-5 px-0 sm:px-5  max-w-[1280px] mx-auto ">
          <div>
            <NavLink to="/">
              <h1 className="text-3xl my-auto">
                <span>Event</span>
                <span className="text-yellow-400">360</span>
              </h1>
            </NavLink>
          </div>
          <div className="flex flex-row space-x-5  ">
            <NavLink className="hover:text-yellow-500" to="/">
              Home
            </NavLink>
            <NavLink className="hover:text-yellow-500" to="about">
              About
            </NavLink>
            <NavLink className="hover:text-yellow-500" to="contact-us">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
