import { Euro, Globe, MoveRight, PersonStanding } from "lucide-react";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(23,22,17,80%)" }}
      className="bottom-0  mt-56 p-16 "
    >
      <Container className="grid sm:grid-cols-2 py-8 lg:grid-cols-12">
        <div className="col-span-2 mb-10">
          <h1 className="text-4xl">
            Event<span className="text-yellow-500">360</span>
          </h1>
        </div>
        <div className="col-span-2 mb-10 space-y-4 font-semibold">
          <p>Product</p>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
        </div>
        <div className="col-span-2 mb-10 space-y-4 font-semibold">
          <p>Solutions</p>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Research</p>
        </div>
        <div className="col-span-2 mb-10 space-y-4 font-semibold">
          <p>Resources</p>
          <p>Help Center</p>
          <p>Blog</p>
          <p>Tutorials</p>
          <p>FAQs</p>
        </div>
        <div className="col-span-2 mb-10 space-y-4 font-semibold">
          <p>Support</p>
          <p>Contact Us</p>
          <p>Developers</p>
          <p>Documentation</p>
          <p>Integrations</p>
        </div>
        <div className="col-span-2 mb-10 space-y-4 font-semibold">
          <p>Company</p>
          <p>About</p>
          <p>Press</p>
          <p>Events</p>
          <p className="flex gap-1 items-center">
            Request Demo
            <MoveRight />
          </p>
        </div>
      </Container>
      <Container>
        <hr
          style={{ backgroundColor: "rgb(23,22,17,85%)" }}
          className="mt-6 bg-gray-500"
        />
      </Container>
      <div>
        <Container className="flex sm:flex-col md:flex-row justify-between mt-6">
          <div>
            <p>@2023.ALl rights reserved</p>
          </div>
          <div className="flex gap-2">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Contact</p>
            <p className="flex">
              <Globe />
              EN
            </p>
            <p className="flex">
              <Euro /> EUR
            </p>
            <p>
              <PersonStanding />
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
