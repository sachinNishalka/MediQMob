import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";

function InputLabel({ labelText, validation = true, validationMessage = "" }) {
  return (
    <View style={styles.inputLabelContainer}>
      <Text style={styles.inputLabel}>{labelText}</Text>;
      {validation === false && (
        <Text style={styles.validationMessage}>* {validationMessage}</Text>
      )}
    </View>
  );
}

export default InputLabel;

const styles = StyleSheet.create({
  inputLabel: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  inputLabelContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  validationMessage: {
    color: Colors.dangerColor,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
