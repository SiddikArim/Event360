import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import sports from "../../assets/sports.jpg";
import wed2 from "../../assets/wed2.jpg";
import anime from "../../assets/anime.jpg";
import anime2 from "../../assets/anime2.jpg";
import gather from "../../assets/gather.jpg";
import Container from "../ui/Container";
import SingleReview from "./SingleReview";

// import SingleReview from "./SingleReview";

const ShowReview = () => {
  const data = [
    {
      id: 1,
      position: "Software Engineer",
      image: sports,
      name: "John Doe",
      review: "Seamless coordination, memorable experiences. Highly recommend!",
    },
    {
      id: 2,
      position: "Marketing Manager",
      image: wed2,
      name: "Jane Smith",
      review: "Exceptional service, unforgettable moments. Highly recommended!",
    },
    {
      id: 3,
      position: "Customer Support Representative",
      image: sports,
      name: "Alice Johnson",
      review: "Efficient and professional service. Highly satisfied!",
    },
    {
      id: 4,
      position: "Data Analyst",
      image: anime2,
      name: "David Brown",
      review: "Superb event management, exceeded expectations!",
    },
    {
      id: 5,
      position: "Project Manager",
      image: anime,
      name: "Emily White",
      review:
        "Impressive coordination, flawless execution. Highly recommended!",
    },
    {
      id: 6,
      position: "Human Resources Specialist",
      image: gather,
      name: "Michael Green",
      review: "Exceptional service, unforgettable events. Highly recommended!",
    },
  ];

  return (
    <Container className=" mx-auto md:mt-36 sm:mt-72  p-10">
      <div className="mt-20  flex md:flex-row lg:flex-row sm:flex-col gap-5">
        <div className="sm:w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold my-8">
            What Our Client Said <br />
            <span className="text-yellow-500 font-bold text-5xl">About Us</span>
          </h1>
          <p className="text-2xl text-center font-semibold">
            Client Satisfaction is our main{" "}
            <span className="text-yellow-400 font-bold text-3xl">GOAL</span>
          </p>
        </div>
        <div className="sm:w-4/5 mx-auto lg:w-1/2 md:w-1/2">
          <Carousel>
            <CarouselContent>
              {data.map((data) => (
                <CarouselItem>
                  <SingleReview data={data} key={data.id} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default ShowReview;
