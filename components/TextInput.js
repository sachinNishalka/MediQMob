import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function TextBox({ placeholderText, onChangeText, keyboardType = "default" }) {
  return (
    <TextInput
      keyboardType={keyboardType}
      style={styles.inputDesing}
      selectionColor={Colors.accentColor}
      placeholder={placeholderText}
      onChangeText={(text) => onChangeText(text)}
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
