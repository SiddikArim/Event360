import Eventitems from "@/components/EventItems/Eventitems";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import RecentEvents from "@/components/RecentEvents/RecentEvents";
import ShowReview from "@/components/Review/ShowReview";
import Services from "@/components/Services/Services";

const Index = () => {
  return (
    <div className="">
      <Header />
      <Services />
      <Eventitems />
      <PricingPlans />
      <Gallery />
      <RecentEvents />
      <ShowReview />
    </div>
  );
};

export default Index;
