import { CheckCircle2 } from "lucide-react";
const GalleryDetails = () => {
  return (
    <div className="sm:w-full lg:w-1/2 md:w-1/2 my-auto flex justify-center flex-col px-10">
      <h1 className="text-5xl font-bold mb-4 py-2">Gallery Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio
        beatae error, quod eius obcaecati corporis consequuntur illo quaerat
        suscipit.
      </p>
      <ul className="font-semibold py-5">
        <li className="flex p-2">
          <CheckCircle2 className="mr-2" /> One day workshop with industry
          experts
        </li>
        <li className="flex p-2">
          <CheckCircle2 className="mr-2" /> Lunch and Snack
        </li>
        <li className="flex p-2">
          <CheckCircle2 className="mr-2" /> Custom design
        </li>
        <li className="flex p-2">
          <CheckCircle2 className="mr-2" /> Best Speakers and singers
        </li>
        <li className="flex p-2">
          <CheckCircle2 className="mr-2" /> Front Seat
        </li>
      </ul>
    </div>
  );
};

export default GalleryDetails;
