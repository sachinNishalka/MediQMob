import { useMutation } from "@tanstack/react-query";
import { signup as singUpAPI } from "../services/apiAuth";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function useSignup() {
  const navigate = useNavigation();
  const {
    mutate: signUp,
    isLoading,
    error,
    isPending,
  } = useMutation({
    mutationFn: singUpAPI,
    onSuccess: () => {
      ToastAndroid.show("Registered successfully!", ToastAndroid.SHORT);
      navigate.navigate("loginScreen");
    },
    onError: (error) => {
      console.log("Signup error:", error);
    },
    onMutate: () => {
      console.log("Mutation started");
    },
  });

  return { signUp, isLoading: isLoading || isPending, error };
}
