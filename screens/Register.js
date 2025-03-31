import { Image, StyleSheet, View, Text } from "react-native";
import InputContainer from "../components/InputContainer";
import InputLabel from "../components/InputLabel";
import TextBox from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import OutlineButton from "../components/OutlineButton";
import { Colors } from "../constants/Colors";

function Register() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/logo/logo.png")}
      ></Image>
      <InputContainer>
        <InputLabel>First Name</InputLabel>
        <TextBox placeholderText="Enter your first name"></TextBox>
      </InputContainer>
      <InputContainer>
        <InputLabel>Last Name</InputLabel>
        <TextBox placeholderText="Enter your last name"></TextBox>
      </InputContainer>
      <InputContainer>
        <InputLabel>Age</InputLabel>
        <TextBox placeholderText="Enter your age"></TextBox>
      </InputContainer>
      <View style={styles.buttonContainer}>
        <PrimaryButton buttonText="Regiter"></PrimaryButton>
        <OutlineButton
          iconName="logo-google"
          buttonText="Sign up with Google"
        ></OutlineButton>
      </View>
      <View style={styles.loginTextContainer}>
        <Text>Already have an account?.</Text>
        <Text style={styles.loginNowText}>Login Now!</Text>
      </View>
    </View>
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
