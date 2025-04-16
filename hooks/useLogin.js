import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../services/apiAuth";
import { ToastAndroid } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function useLogin() {
  const navigate = useNavigation();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      console.log("Login successful");
      ToastAndroid.show("Login successful", ToastAndroid.SHORT);
      queryClient.setQueryData(["user"], user);
      navigate.dispatch(StackActions.replace("homeScreen"));
    },
    onError: (error) => {
      console.log("Login error:", error);
      ToastAndroid.show("Login failed", ToastAndroid.SHORT);
    },
  });

  return { login, isPending, error };
}
