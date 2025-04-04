import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import NumberContainer from "../components/appointmentDetails/NumberContainer";
import { Colors } from "../constants/Colors";
import Timer from "../components/appointmentDetails/Timer";

function AppointmentDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.availabilityTextContainer}>
        <Text style={styles.availabilityText}>Available</Text>
      </View>
      <AppointmentDetails></AppointmentDetails>
      <View style={styles.numberContainer}>
        <NumberContainer number={13} textBelow="You"></NumberContainer>
        <NumberContainer number={10} textBelow="Now"></NumberContainer>
      </View>
      <Timer></Timer>
    </View>
  );
}

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
