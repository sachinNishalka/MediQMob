import { useQuery } from "@tanstack/react-query";
import { getDoctorById } from "../services/apiDoctors";

export default function useDoctor(id) {
  const {
    data: doctor,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["doctor", id],
    queryFn: () => getDoctorById(id),
  });

  return { doctor, isLoading, error };
}
