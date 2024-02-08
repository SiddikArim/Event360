import birthday from "../../assets/birthday.jpg";
import corporation from "../../assets/corporation.jpg";
import sports from "../../assets/sports.jpg";
import wed from "../../assets/wed.jpg";
import wed2 from "../../assets/wed2.jpg";
import gather from "../../assets/gather.jpg";
import Container from "../ui/Container";
import { Button } from "../ui/button";

const RecentEvents = () => {
  return (
    <Container className="mt-20 flex sm:flex-col md:flex-row lg:flex-row max-h-[490px]">
      <div className="space-y-5 flex flex-col justify-center mb-5 lg:px-5 md:px-5 sm:px-10">
        <h1 className="text-5xl">Recent Events</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          delectus est maxime fugiat commodi earum quis cumque ea!
        </p>
        <Button className="w-1/5">Learn more</Button>
      </div>
      <div className="grid grid-cols-6 max-w-[610px] max-h-[490px]">
        <div className="col-span-2 ">
          <img className="p-2 rounded-full " src={birthday} alt="" />
          <img className="p-2 rounded-2xl" src={corporation} alt="" />
        </div>
        <div className="col-span-2">
          <img className="p-2 rounded-2xl" src={sports} alt="" />
          <img className="p-2 rounded-2xl" src={wed} alt="" />
        </div>
        <div className="col-span-2">
          <img className="p-2 rounded-2xl" src={wed2} alt="" />
          <img className="p-2 rounded-full" src={gather} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default RecentEvents;
