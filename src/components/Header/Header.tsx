import Container from "../ui/Container";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="headerBg bg-cover  w-full ">
      <Container className="flex  w-full  flex-col items-center space-y-10">
        <div className="text-center mt-20">
          <h1 className="text-7xl ">BRAND NEW EVENT PACKAGES</h1>
          <br />
          <span className="text-7xl text-yellow-500">For Winter</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            reiciendis accusantium itaque, vitae tempora optio totam id
            accusamus autem eveniet magni eum! Soluta recusandae explicabo,
            autem officiis aut consequatur maxime.
          </p>
        </div>
        <div>
          <Button className="">Explore</Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
