import { StyleSheet, View } from "react-native";

function InputContainer({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
});
