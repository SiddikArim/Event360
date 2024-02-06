import Eventitems from "@/components/EventItems/Eventitems";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import Services from "@/components/Services/Services";

const Index = () => {
  return (
    <div>
      <Header />
      <Services />
      <Eventitems />
      <PricingPlans />
      <Gallery />
    </div>
  );
};

export default Index;
