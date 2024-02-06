import Container from "../ui/Container";
import { Button } from "../ui/button";
import img from "../../assets/header-bg.jpg";

const Header = () => {
  return (
    <div className="relative">
      <img
        src={img}
        alt="Background Image"
        className=" h-full lg:h-[810px] lg:w-[1440px] lg:mx-auto object-cover filter  polygon"
      />
      <div className="absolute polygon h-full lg:h-[810px] lg:w-[1440px] lg:mx-auto  inset-0 bg-gradient-to-b from-blue-800 via-blue-950 to-black  opacity-60"></div>
      <div className=" absolute inset-5 flex justify-center items-center">
        <Container className="flex w-full  flex-col items-center lg:space-y-10">
          <div className="text-center ">
            <h1 className="sm:text-xl md:text-3xl lg:text-7xl mb-1 text-white font-bold ">
              BRAND NEW EVENT PACKAGES
              <br />
              <span className=" text-yellow-400">For Winter</span>
            </h1>
          </div>
          <div className="">
            <p className=" text-white mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              reiciendis accusantium itaque, vitae tempora optio totam id
              accusamus autem eveniet magni eum!
            </p>
          </div>
          <div>
            <Button className=" backdrop-blur">Explore</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
