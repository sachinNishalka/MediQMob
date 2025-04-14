import { StyleSheet, View } from "react-native";
import TimeSelector from "./TimeSelector";

function Time({ times, selectedTime, onSelect }) {
  // Function to convert 24-hour format to 12-hour format with AM/PM
  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(":");
    const hour = parseInt(hours);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${period}`;
  };

  return (
    <View style={styles.container}>
      {times.map((time) => (
        <TimeSelector
          key={time}
          time={formatTime(time)}
          isSelected={selectedTime === time}
          onSelect={() => onSelect(time)}
        />
      ))}
    </View>
  );
}

export default Time;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
