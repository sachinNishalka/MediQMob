import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function NumberContainer({ number, textBelow }) {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <Text style={styles.textStyle}>{textBelow}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: Colors.accentColor,
    marginBottom: 5,
  },
  numberText: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    color: Colors.secondaryGreen,
  },
});
