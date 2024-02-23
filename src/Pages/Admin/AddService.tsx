import { useState } from "react";

const AddService = () => {
  const [serviceHead, setServiceHead] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/add-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceHead,
          serviceDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add service");
      }

      setServiceHead("");
      setServiceDescription("");
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center">Add Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Service-Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={serviceHead} // Use serviceHead directly here
            onChange={(e) => setServiceHead(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Service-Description:</label>
          <textarea
            id="description"
            name="description"
            value={serviceDescription} // Use serviceDescription directly here
            onChange={(e) => setServiceDescription(e.target.value)}
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
