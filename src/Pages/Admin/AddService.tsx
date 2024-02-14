import React from "react";

const AddService = () => {
  return (
    <div>
      <h1 className="text-center">Add Service</h1>
      <form>
        <div className="form-group">
          <label htmlFor="serviceName1">Service Name 1:</label>
          <input
            id="serviceName1"
            className="form-control"
            type="text"
            placeholder="Enter service name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceName2">Service Name 2:</label>
          <input
            id="serviceName2"
            className="form-control"
            type="text"
            placeholder="Enter service name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceName3">Service Name 3:</label>
          <input
            id="serviceName3"
            className="form-control"
            type="text"
            placeholder="Enter service name"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
