import Container from "../ui/Container";
import SingleCard from "./SingleCard";

const Services = () => {
  return (
    <Container className="my-16">
      <div className="flex flex-col items-center">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corrupti eaque, ad possimus aut a velit autem facere dolor obcaecati
          tenetur blanditiis rerum mollitia ex, fugit incidunt sunt labore
          officia!
        </p>
      </div>
      <div className=" my-10 grid sm:grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </Container>
  );
};

export default Services;
