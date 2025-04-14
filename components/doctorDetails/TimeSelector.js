import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

function TimeSelector({ time, isSelected, onSelect }) {
  return (
    <Pressable
      style={[styles.timeSelector, isSelected && styles.selectedTimeSelector]}
      onPress={onSelect}
    >
      <Text
        style={[styles.timeSelectorText, isSelected && styles.selectedTimeText]}
      >
        {time}
      </Text>
    </Pressable>
  );
}

export default TimeSelector;

const styles = StyleSheet.create({
  timeSelector: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: Colors.accentColor,
    borderRadius: 0,
  },
  selectedTimeSelector: {
    backgroundColor: "#ffffff",
  },
  timeSelectorText: {
    fontWeight: "bold",
    color: Colors.secondaryGreen,
    fontSize: 16,
  },
  selectedTimeText: {
    color: Colors.primaryColor,
  },
});
