import { useMutation } from "@tanstack/react-query";
import { createReservation as createReservationAPI } from "../services/apiReservation";
import { ToastAndroid } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function useCreateReservation() {
  const queryClient = useQueryClient();
  const navigate = useNavigation();

  const {
    mutate: createReservation,
    isPending,
    error,
  } = useMutation({
    mutationFn: (reservation) => createReservationAPI(reservation),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
      ToastAndroid.show("Reservation created", ToastAndroid.SHORT);
      navigate.dispatch(
        StackActions.replace("tabScreen", {
          screen: "myAppointments",
        })
      );
    },
    // onError: (error) => {
    //   ToastAndroid.show("Error creating reservation", ToastAndroid.SHORT);
    // },
  });

  return { createReservation, isPending, error };
}
