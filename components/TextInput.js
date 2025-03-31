import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function TextBox({ placeholderText }) {
  return (
    <TextInput
      style={styles.inputDesing}
      selectionColor={Colors.accentColor}
      placeholder={placeholderText}
    ></TextInput>
  );
}

export default TextBox;

const styles = StyleSheet.create({
  inputDesing: {
    borderColor: Colors.accentColor,
    borderWidth: 2,
  },
});
