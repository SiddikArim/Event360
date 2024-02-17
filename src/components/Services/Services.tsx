import useServiceData from "@/DataManager/useServiceData";
import Container from "../ui/Container";
import SingleCard from "./SingleCard";

const Services = () => {
  const [servicesData, isServiceDataLoading, isServiceDataError] =
    useServiceData();
  if (isServiceDataLoading) return <div>Loading...</div>;
  else if (isServiceDataError) return <div>Error loading data.</div>;
  console.log(servicesData);

  return (
    <Container className="my-16">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-xl lg:text-5xl mb-5">Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corrupti eaque, ad possimus aut a velit autem facere dolor obcaecati
          tenetur blanditiis rerum mollitia ex, fugit incidunt sunt labore
          officia!
        </p>
      </div>
      <div className=" my-10  grid sm:grid-cols-1 lg:gap-5 lg:grid-cols-3 md:grid-cols-2">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </Container>
  );
};

export default Services;
