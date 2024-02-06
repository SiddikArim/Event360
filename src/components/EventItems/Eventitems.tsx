import Container from "../ui/Container";
import img from "../../assets/header-bg.jpg";

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
          <img className="h-[90%] rounded w-full" src={img} alt="" />
          <h3>Event-1</h3>
        </div>
        <div className="flex flex-col gap-3 sm:h-full lg:h-[530px] sm:col-span-12 md:lg:col-span-4">
          <div className="h-1/2 bg-gray-400 rounded-md  p-2">
            <img className="h-[90%] rounded w-full" src={img} alt="" />
            <h3>Event-2</h3>
          </div>
          <div className="h-1/2  flex gap-2">
            <div className="p-2 bg-gray-400 rounded-md ">
              <img className="rounded-md h-[80%] w-full" src={img} alt="" />
              <h3>Event-3</h3>
            </div>
            <div className="p-2 bg-gray-400 rounded-md">
              <img className="rounded-md h-[80%] w-full" src={img} alt="" />
              <h3>Event-4</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:h-full lg:h-[530px] sm:col-span-12 lg:col-span-4  ">
          <div className="h-1/2 bg-gray-400 rounded-md  p-2">
            <img className="rounded-md h-[90%] w-full" src={img} alt="" />
            <h3>Event-5</h3>
          </div>
          <div className="h-1/2 bg-gray-400 rounded-md  p-2">
            <img className="rounded-md h-[90%] w-full" src={img} alt="" />
            <h3>Event-5</h3>
          </div>
        </div>
      </div>
      {/* */}
    </Container>
  );
};

export default Eventitems;
