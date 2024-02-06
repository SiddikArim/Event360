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

const SinglePricingCard = () => {
  return (
    <Container className="">
      <Card className="w-[330px]">
        <CardHeader>
          <CardTitle className="flex justify-center">Wedding Event</CardTitle>
          <CardDescription className="my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corrupti voluptatum, nihil nostrum eum cumque error ut quam optio
            asperiores repellendus illo saepe maiores praesentium quae ipsum
            deserunt? Omnis, nam.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Check it out</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default SinglePricingCard;
