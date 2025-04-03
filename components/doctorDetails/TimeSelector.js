import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

function TimeSelector({ time }) {
  return (
    <View style={styles.timeSelector}>
      <Text style={styles.timeSelectorText}>{time}</Text>
    </View>
  );
}

export default TimeSelector;

const styles = StyleSheet.create({
  timeSelector: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: Colors.accentColor,
    borderRadius: 10,
  },
  timeSelectorText: {
    fontWeight: "bold",
    color: Colors.secondaryColor,
    fontSize: 16,
  },
});
