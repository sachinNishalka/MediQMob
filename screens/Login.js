import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import InputContainer from "../components/InputContainer";
import InputLabel from "../components/InputLabel";
import OutlineButton from "../components/OutlineButton";
import PrimaryButton from "../components/PrimaryButton";
import TextBox from "../components/TextInput";

import { Colors } from "../constants/Colors";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo/logo.png")}
      ></Image>

      <InputContainer>
        <InputLabel
          labelText="Username"
          validation={false}
          validationMessage="Username is required"
        ></InputLabel>
        <TextBox placeholderText="Enter your username"></TextBox>
      </InputContainer>

      <InputContainer>
        <InputLabel
          labelText="Password"
          validation={false}
          validationMessage="Password is required"
        ></InputLabel>
        <TextBox placeholderText="Enter your password"></TextBox>
      </InputContainer>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          buttonText="Login"
          onPress={() => {
            navigation.navigate("tabScreen");
          }}
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
