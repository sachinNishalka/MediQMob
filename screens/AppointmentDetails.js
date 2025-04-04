import { StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/appointmentDetails/NumberContainer";
import Timer from "../components/appointmentDetails/Timer";
import AppointmentDetailsContainer from "../components/appointmentDetails/AppointmentDetailsContainer";
import { Colors } from "../constants/Colors";

function AppointmentDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.availabilityTextContainer}>
        <Text style={styles.availabilityText}>Available</Text>
      </View>
      <AppointmentDetailsContainer></AppointmentDetailsContainer>
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
  availabilityText: {
    fontSize: 12,
    fontWeight: "semibold",
    color: Colors.secondaryGreen,
  },
  availabilityTextContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    alignSelf: "flex-end",
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
});
