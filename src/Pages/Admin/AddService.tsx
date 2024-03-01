import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

const AddService = () => {
  const [serviceHead, setServiceHead] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/add-services", {
        serviceHead, // Send data directly in the request body
        serviceDescription,
        servicePrice,
      });

      if (!response.data.success) {
        throw new Error("Failed to add service");
      }

      setServiceHead("");
      setServiceDescription("");
      setServicePrice("");
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-10">Add Service</h1>
      <Container className="border border-solid w-1/2 rounded mt-10 p-4 justify-center items-start flex">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="font-bold" htmlFor="name">
              Service-Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={serviceHead}
              onChange={(e) => setServiceHead(e.target.value)}
              className="flex flex-row border border-solid"
              required
            />
          </div>
          <div className="form-group ">
            <label className="font-bold" htmlFor="Price">
              Price:
            </label>
            <input
              type="number"
              id="number"
              name="Price"
              value={servicePrice}
              onChange={(e) => setServicePrice(e.target.value)}
              className="flex flex-row border border-solid"
              required
            />
          </div>
          <div className="form-group  ">
            <label className="font-bold" htmlFor="description">
              Service-Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={serviceDescription}
              onChange={(e) => setServiceDescription(e.target.value)}
              className="flex flex-row border border-solid p-5"
              required
            ></textarea>
          </div>
          <Button type="submit" className="bg-gray-600 mt-5">
            Add Service
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddService;
