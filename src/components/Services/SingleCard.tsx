// SingleCard.tsx
import anime from "../../assets/anime.jpg";
import anime2 from "../../assets/anime2.jpg";
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

interface SingleServiceData {
  id: string;
  serviceHead: string;
  serviceDescription: string;
  serviceRelatedNames: string[];
  servicePrice: number;
}
const SingleCard = ({
  serviceHead,
  serviceDescription,
  serviceRelatedNames,
  servicePrice,
}: SingleServiceData) => {
  return (
    <Container>
      <Card
        style={{ position: "relative" }}
        className={`w-[412px] h-[590px]  ${
          servicePrice > 900 ? "bg-gray-200" : ""
        }`}
      >
        {servicePrice === 800 && (
          <img
            className="w-[362px] h-[253px] mx-auto mt-4"
            src={anime}
            alt="Service Image"
          />
        )}
        {servicePrice === 500 && (
          <img
            className="w-[362px] h-[253px] mx-auto mt-4"
            src={anime2}
            alt="Service Image"
          />
        )}
        <CardHeader>
          <CardTitle className="flex justify-center text-4xl">
            {serviceHead}
          </CardTitle>
          <CardDescription className="my-10 pt-5">
            {serviceDescription}
          </CardDescription>
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
        <CardFooter>
          <Button
            style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
            className={`flex justify-center  p-5 ${
              servicePrice > 900
                ? "bg-gradient-to-r from-yellow-300 to-yellow-600"
                : " hidden"
            }`}
          >
            See all features
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SingleCard;
