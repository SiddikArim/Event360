import Container from "@/components/ui/Container";
import img from "../../assets/header-bg.jpg";

const Contact = () => {
  return (
    <Container>
      <div className="relative">
        <img
          src={img}
          alt="Background Image"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 opacity-50"></div>
        <div className=" absolute inset-5 flex justify-center items-center">
          <div className="text-white text-3xl font-bold">Contact Us here</div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
