import CreativeSection from "@/components/Creative/CreativeSection";
import Eventitems from "@/components/EventItems/Eventitems";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import PricingPlans from "@/components/PricingPlans/PricingPlans";
import RecentEvents from "@/components/RecentEvents/RecentEvents";
import ShowReview from "@/components/Review/ShowReview";
import Services from "@/components/Services/Services";

const Index = () => {
  return (
    <div>
      <Header />
      <Services />
      <Eventitems />
      <PricingPlans />
      <Gallery />
      <RecentEvents />
      <ShowReview />
      <CreativeSection />
    </div>
  );
};

export default Index;
