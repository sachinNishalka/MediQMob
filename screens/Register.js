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

import {
  validateAge,
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validateAllFields,
} from "../utils/validation";
import useSignup from "../hooks/useSignup";

function Register({ navigation }) {
  const [firstName, setFirstName] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [age, setAge] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [email, setEmail] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [password, setPassword] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [validForm, setValidForm] = useState(false);

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

  useEffect(() => {
    if (
      firstName.isValid &&
      lastName.isValid &&
      age.isValid &&
      email.isValid &&
      password.isValid &&
      confirmPassword.isValid
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [firstName, lastName, age, email, password, confirmPassword]);

  const handleRegister = () => {
    // if the fields are empty
    validateAllFields(
      firstName,
      setFirstName,
      lastName,
      setLastName,
      age,
      setAge,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword
    );

    // if all the fields are valid

    if (validForm) {
      setIsSubmitting(true);
      signUp({
        firstname: firstName.value,
        lastname: lastName.value,
        age: age.value,
        email: email.value,
        password: password.value,
      });
    }
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
            <InputLabel
              labelText="First Name"
              validation={firstName.isValid}
              validationMessage={firstName.validationMessage}
            ></InputLabel>
            <TextBox
              placeholderText="Enter your first name"
              onChangeText={(text) => {
                validateFirstName(text, setFirstName);
              }}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel
              labelText="Last Name"
              validation={lastName.isValid}
              validationMessage={lastName.validationMessage}
            ></InputLabel>
            <TextBox
              placeholderText="Enter your last name"
              onChangeText={(text) => {
                validateLastName(text, setLastName);
              }}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel
              labelText="Age"
              validation={age.isValid}
              validationMessage={age.validationMessage}
            ></InputLabel>
            <TextBox
              keyboardType="numeric"
              placeholderText="Enter your age"
              onChangeText={(text) => {
                validateAge(text, setAge);
              }}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel
              labelText="Email"
              validation={email.isValid}
              validationMessage={email.validationMessage}
            ></InputLabel>
            <TextBox
              keyboardType="email-address"
              placeholderText="Enter your email"
              onChangeText={(text) => {
                validateEmail(text, setEmail);
              }}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel
              labelText="Password"
              validation={password.isValid}
              validationMessage={password.validationMessage}
            ></InputLabel>
            <TextBox
              placeholderText="Enter your password"
              onChangeText={(text) => {
                validatePassword(text, setPassword);
              }}
            ></TextBox>
          </InputContainer>
          <InputContainer>
            <InputLabel
              labelText="Confirm Password"
              validation={confirmPassword.isValid}
              validationMessage={confirmPassword.validationMessage}
            ></InputLabel>
            <TextBox
              placeholderText="Confirm your password"
              onChangeText={(text) => {
                validateConfirmPassword(text, setConfirmPassword, password);
              }}
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
