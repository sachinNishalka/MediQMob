import { Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function InputLabel({ children }) {
  return <Text style={styles.inputLabel}>{children}</Text>;
}

export default InputLabel;

const styles = StyleSheet.create({
  inputLabel: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
