import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

function AppointmentCard() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.doctorInfoContainer}>
        <Text style={styles.doctorName}>John Doe</Text>
        <Text style={styles.availableText}>Available</Text>
      </View>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>15</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.dateText}>Thursday</Text>
        <Text style={styles.timeText}>6:00 PM</Text>
      </View>
    </View>
  );
}

function MyAppointments() {
  return (
    <View style={styles.container}>
      <AppointmentCard></AppointmentCard>
    </View>
  );
}

export default MyAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  doctorInfoContainer: {
    flexDirection: "column",
  },
  detailsContainer: {
    flexDirection: "column",
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primaryColor,
    marginBottom: 10,
  },
  availableText: {
    fontSize: 15,
    color: Colors.accentColor,
    fontWeight: "semibold",
  },
  numberContainer: {
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e55451",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.primaryColor,
  },
  dateText: { marginBottom: 10, fontSize: 15, fontWeight: "semibold" },
  timeText: { fontSize: 15, fontWeight: "semibold" },
});
