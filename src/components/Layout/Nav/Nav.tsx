import { NavLink } from "react-router-dom";
import Container from "../ui/Container";

const Nav = () => {
  return (
    <Container className="bg-red-500 rounded-lg ">
      <div className="flex justify-between">
        <div>
          <NavLink to="/">
            <h1>Event360</h1>
          </NavLink>
        </div>
        <div className="flex space-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
