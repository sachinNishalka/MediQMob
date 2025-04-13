import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../services/apiDoctors";

export default function useDoctors() {
  const {
    isLoading,
    data: doctors,
    error,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  return { isLoading, doctors, error };
}
