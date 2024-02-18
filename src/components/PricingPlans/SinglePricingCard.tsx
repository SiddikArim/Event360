import Container from "../ui/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const SinglePricingCard = ({
  serviceHead,
  serviceDescription,
  serviceRelatedNames,
  servicePrice,
}) => {
  return (
    <Container>
      <Card
        style={{ position: "relative" }}
        className={`w-[330px] h-[548px] space-y-5 ${
          servicePrice < 600 ? "bg-yellow-500" : ""
        }`}
      >
        <CardHeader>
          <CardTitle className="flex justify-center text-4xl">
            {serviceHead}
          </CardTitle>
          <CardDescription className="my-10 pt-5">
            {serviceDescription}
          </CardDescription>
          <h1 className="text-3xl font-bold pb-5">${servicePrice}</h1>
          <Button
            className={`${
              servicePrice < 600
                ? "bg-gray-200"
                : "bg-gradient-to-r from-yellow-300 to-yellow-600"
            }`}
          >
            Get this package
          </Button>
        </CardHeader>
        <CardContent>
          {serviceRelatedNames && serviceRelatedNames.length > 0 ? (
            <ul>
              {serviceRelatedNames.map((feature, index) => (
                <li className="flex gap-2 gap-y-2 py-2" key={index}>
                  <Check />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>This service does not have any additional features.</p>
          )}
        </CardContent>
        <CardFooter
          className={`flex justify- p-5 ${
            servicePrice > 900
              ? "bg-gradient-to-r from-yellow-300 to-yellow-600"
              : " bg-gray-200 "
          }`}
          style={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          <p>See all features</p>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SinglePricingCard;
