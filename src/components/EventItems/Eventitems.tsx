import Container from "../ui/Container";

import picnic from "../../assets/picnic.jpg";
import sports from "../../assets/sports.jpg";
import wed from "../../assets/wed.jpg";
import wed2 from "../../assets/wed2.jpg";

import anime2 from "../../assets/anime2.jpg";
import gather from "../../assets/gather.jpg";

const Eventitems = () => {
  return (
    <Container>
      <div className="flex flex-col items-center p-10">
        <h1 className="sm:text-xl lg:text-5xl my-5">Event Items</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          doloremque pariatur exercitationem atque corrupti ad quidem, officia,
          nostrum{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 sm:h-full lg:grid-cols-12  lg:h-[600px] gap-5 ">
        <div className="sm:h-full lg:h-[530px] sm:col-span-12 md:lg:col-span-4 bg-gray-400  p-5 rounded ">
          <img className="h-[90%] rounded w-full" src={sports} alt="" />
          <h3>Event-1</h3>
        </div>
        <div className="flex flex-col gap-3 sm:h-full lg:h-[530px] sm:col-span-12 md:lg:col-span-4">
          <div className="h-1/2 bg-gray-400 rounded-md  p-2">
            <img className="h-[90%] rounded w-full" src={wed} alt="" />
            <h3>Event-2</h3>
          </div>
          <div className="h-1/2 flex gap-2 ">
            <div className="p-2 bg-gray-400 rounded-md w-full">
              <img className="rounded-md h-[80%] w-full" src={wed2} alt="" />
              <h3>Event-3</h3>
            </div>
            <div className="p-2 bg-gray-400 rounded-md w-full">
              <img className="rounded-md h-[80%] w-full" src={picnic} alt="" />
              <h3>Event-4</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:h-full lg:h-[530px] sm:col-span-12 lg:col-span-4  ">
          <div className="h-1/2 bg-gray-400 rounded-md  p-2">
            <img className="rounded-md h-[90%] w-full" src={gather} alt="" />
            <h3>Event-5</h3>
          </div>
          <div className="h-1/2 bg-gray-400 rounded-md  p-2">
            <img className="rounded-md h-[90%] w-full" src={anime2} alt="" />
            <h3>Event-5</h3>
          </div>
        </div>
      </div>
      {/* */}
    </Container>
  );
};

export default Eventitems;
