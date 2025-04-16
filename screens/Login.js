import { Image, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";

import InputContainer from "../components/InputContainer";
import InputLabel from "../components/InputLabel";
import OutlineButton from "../components/OutlineButton";
import PrimaryButton from "../components/PrimaryButton";
import TextBox from "../components/TextInput";

import { Colors } from "../constants/Colors";

import useLogin from "../hooks/useLogin";

import {
  validateEmail,
  validatePassword,
  validateLoginFields,
} from "../utils/validation";

function Login({ navigation }) {
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

  const [validForm, setValidForm] = useState(false);

  const { login, isPending, error } = useLogin();

  useEffect(() => {
    if (email.isValid && password.isValid) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [email, password]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error.message);
    }
  }, [error]);

  function handleLogin() {
    validateLoginFields(email, setEmail, password, setPassword);
    if (validForm) {
      login({ email: email.value, password: password.value });
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo/logo.png")}
      ></Image>

      <InputContainer>
        <InputLabel
          labelText="Email"
          validation={email.isValid}
          validationMessage={email.validationMessage}
        ></InputLabel>
        <TextBox
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
            // validatePassword(text, setPassword);
            setPassword({
              value: text,
              isValid: true,
              validationMessage: "",
            });
          }}
        ></TextBox>
      </InputContainer>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          buttonText="Login"
          onPress={handleLogin}
          disabled={isPending}
          loading={isPending}
        ></PrimaryButton>
        <OutlineButton
          iconName="logo-google"
          buttonText="Sign in with Google"
        ></OutlineButton>
      </View>

      <View style={styles.registerTextContainer}>
        <Text>Don`t have an account.</Text>
        <Pressable onPress={() => navigation.navigate("registerScreen")}>
          <Text style={styles.registerNowText}>Register Now!</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;

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
  },

  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
  registerTextContainer: {
    flexDirection: "row",
    marginTop: 10,
    fontSize: 14,
  },
  registerNowText: {
    color: Colors.primaryColor,
    marginLeft: 5,
  },
});
