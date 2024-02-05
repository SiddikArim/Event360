import Container from "../ui/Container";
import img from "../../assets/header-bg.jpg";

const Eventitems = () => {
  return (
    <Container>
      <div>
        <h1>Event Items</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          doloremque pariatur exercitationem atque corrupti ad quidem, officia,
          nostrum{" "}
        </p>
      </div>
      {/* */}
      <div className=" grid ">
        <div className="grid-cols-3">
          <img className="h-full" src={img} alt="" />
        </div>
        <div className="grid-cols-3 ">
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Eventitems;
