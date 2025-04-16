import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import InputContainer from "../components/InputContainer";
import InputLabel from "../components/InputLabel";
import OutlineButton from "../components/OutlineButton";
import PrimaryButton from "../components/PrimaryButton";
import TextBox from "../components/TextInput";
import { Colors } from "../constants/Colors";

import useSignup from "../hooks/useSignup";

function Register({ navigation }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signUp, isLoading, error } = useSignup();

  useEffect(() => {
    setIsSubmitting(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error.message);
      setIsSubmitting(false);
    }
  }, [error]);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    setIsSubmitting(true);
    signUp({
      firstname: firstName,
      lastname: lastName,
      age,
      email,
      password,
    });
  };

  return (
    <>
      <Image
        style={styles.image}
        source={require("../assets/logo/logo.png")}
      ></Image>
      <ScrollView>
        <View style={styles.container}>
          <InputContainer>
            <InputLabel>First Name</InputLabel>
            <TextBox
              placeholderText="Enter your first name"
              onChangeText={setFirstName}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel>Last Name</InputLabel>
            <TextBox
              placeholderText="Enter your last name"
              onChangeText={setLastName}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel>Age</InputLabel>
            <TextBox
              placeholderText="Enter your age"
              onChangeText={setAge}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <TextBox
              placeholderText="Enter your email"
              onChangeText={setEmail}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel>Password</InputLabel>
            <TextBox
              placeholderText="Enter your password"
              onChangeText={setPassword}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel>Confirm Password</InputLabel>
            <TextBox
              placeholderText="Confirm your password"
              onChangeText={setConfirmPassword}
            ></TextBox>
          </InputContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              buttonText="Register"
              onPress={handleRegister}
              disabled={isSubmitting}
              loading={isSubmitting}
            ></PrimaryButton>
            <OutlineButton
              iconName="logo-google"
              buttonText="Sign up with Google"
            ></OutlineButton>
          </View>
          <View style={styles.loginTextContainer}>
            <Text>Already have an account?.</Text>
            <Pressable onPress={() => navigation.navigate("loginScreen")}>
              <Text style={styles.loginNowText}>Login Now!</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  image: {
    width: "150",
    height: "150",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
  loginTextContainer: {
    flexDirection: "row",
    marginTop: 10,
    fontSize: 14,
  },
  loginNowText: {
    color: Colors.primaryColor,
    marginLeft: 5,
  },
});
