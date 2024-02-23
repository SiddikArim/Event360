import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostService = () => {
  const mutation = useMutation(
    async (newServiceData) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/add-services",
          newServiceData
        );
        return res.data;
      } catch (error) {
        throw new Error(error.response.data.message); // Throw error to be caught by onError
      }
    },
    {
      onSuccess: () => {
        // Optionally, perform any actions after successful mutation
        console.log("done");
      },
      onError: (error) => {
        // Optionally, handle errors
        console.error("Error posting data:", error);
      },
    }
  );

  return mutation;
};

export default usePostService;
