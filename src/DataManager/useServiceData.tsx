import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useServiceData = () => {
  const {
    data: servicesData,
    isLoading: isServiceDataLoading,
    isError: isServiceDataError,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8000/services");
      // console.log(res);
      return res.data;
    },
  });
  return [servicesData, isServiceDataLoading, isServiceDataError];
};

export default useServiceData;
