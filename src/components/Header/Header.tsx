import { motion } from "framer-motion";
import Container from "../ui/Container";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="">
      <motion.div className="headerBg bg-cover  w-full ">
        <Container className="flex  w-full  flex-col items-center space-y-10">
          <div className="text-center mt-40  backdrop-blur inset-0">
            <h1 className="text-7xl font-bold ">BRAND NEW EVENT PACKAGES</h1>
            <br />
            <span className=" backdrop-blur text-7xl font-bold text-yellow-500">
              For Winter
            </span>
          </div>
          <div className=" backdrop-blur">
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              reiciendis accusantium itaque, vitae tempora optio totam id
              accusamus autem eveniet magni eum! Soluta recusandae explicabo,
              autem officiis aut consequatur maxime.
            </p>
          </div>
          <div>
            <Button className=" backdrop-blur">Explore</Button>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Header;
