import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

type Index = number;

const AddService = () => {
  const [serviceHead, setServiceHead] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [serviceRelatedNames, setServiceRelatedNames] = useState<string[]>([]);
  const [relatedName, setRelatedName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/add-services", {
        serviceHead,
        serviceDescription,
        servicePrice,
        serviceRelatedNames,
      });

      if (!response.data.success) {
        throw new Error("Failed to add service");
      }

      setServiceHead("");
      setServiceDescription("");
      setServicePrice("");
      setServiceRelatedNames([]);
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  const handleAddRelatedName = () => {
    if (relatedName.trim() !== "") {
      setServiceRelatedNames((prevRelatedNames: string[]) => [
        ...prevRelatedNames,
        relatedName,
      ]);

      setRelatedName("");
    }
  };

  const handleRemoveRelatedName = (index: Index) => {
    const updatedRelatedNames = serviceRelatedNames.filter(
      (_, i) => i !== index
    );
    setServiceRelatedNames(updatedRelatedNames);
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
          <div className="form-group">
            <label className="font-bold" htmlFor="relatedName">
              Service Features:
            </label>
            <div className="flex">
              <input
                type="text"
                id="relatedName"
                name="relatedName"
                value={relatedName}
                onChange={(e) => setRelatedName(e.target.value)}
                className="flex flex-row border border-solid"
              />
              <Button
                type="button"
                onClick={handleAddRelatedName}
                className="bg-gray-400 ml-3 text-white"
              >
                Add
              </Button>
            </div>
          </div>
          <div>
            {serviceRelatedNames.map((name, index) => (
              <div key={index} className="flex items-center mt-2">
                <li>{name}</li>
                <button
                  type="button"
                  onClick={() => handleRemoveRelatedName(index)}
                  className="bg-black hover:bg-slate-800 ml-2 px-3 py-2 rounded-xl text-white"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <Button type="submit" className="bg-gray-600 mt-5 text-white">
            Add Service
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddService;
