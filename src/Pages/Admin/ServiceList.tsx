import useServiceData from "@/DataManager/useServiceData";

const ServiceList = () => {
  const [servicesData, isServiceDataLoading, isServiceDataError] =
    useServiceData();
  if (isServiceDataLoading)
    return <p className="text-5xl text-center mt-32">Loading Please Wait!!!</p>;
  else if (isServiceDataError)
    return (
      <p className="text-center text-5xl">
        <span className="text-red-500">404 </span>Something went wrong!!!
      </p>
    );
  console.log(servicesData);

  return (
    <div>
      <h1 className="text-center mt-5">servicelist here</h1>
      <div>
        {/* {isServiceDataLoading && (
          <p className="text-5xl text-center">Loading Please Wait!!!</p>
        )}
        {isServiceDataError && (
          <p className="text-center text-5xl">
            <span className="text-red-500">404</span>Something went wrong!!!
          </p>
        )} */}

        {servicesData.map((service, index) => (
          <div
            className="border-solid border-2 my-5 p-5 mx-5 space-y-2"
            key={service?.id}
          >
            <p className="text-2xl font-bold">
              {index + 1}. {service?.serviceHead}
            </p>
            <p>
              <span className="font-bold">Description:</span>{" "}
              {service?.serviceDescription}
            </p>
            {service.serviceRelatedNames &&
              service.serviceRelatedNames.map((features, index) => (
                <li key={index}>{features}</li>
              ))}
            <p className="text-xl">
              <span className="font-bold">Price:</span> {service?.servicePrice}$
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
