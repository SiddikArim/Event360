import useServiceData from "@/DataManager/useServiceData";
import Container from "../ui/Container";
import SinglePricingCard from "./SinglePricingCard";

interface SingleServiceData {
  id: string;
  serviceHead: string;
  serviceDescription: string;
  serviceRelatedNames: string[];
  servicePrice: number;
}

const PricingPlans = () => {
  const [servicesData, isServiceDataLoading, isServiceDataError] =
    useServiceData();
  if (isServiceDataLoading) return <div>Loading...</div>;
  else if (isServiceDataError) return <div>Error loading data.</div>;
  console.log(servicesData);
  return (
    <Container className="flex flex-col items-center max-w-[1080px]">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-xl lg:text-5xl my-5">
          Explore our prcing plans
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid
          ratione explicabo quo doloremque sed id ea nesciunt perferendis nihil
          laborum earum, ipsa labore.
        </p>
      </div>
      <div className="my-10 mx-auto grid sm:grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        {servicesData.map((service: SingleServiceData) => (
          <SinglePricingCard key={service.id} {...service} />
        ))}
      </div>
    </Container>
  );
};

export default PricingPlans;
