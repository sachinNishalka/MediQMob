import { FlatList, StyleSheet, View } from "react-native";
import AppointmentCard from "../components/appointments/AppointmentCard";

const dummyData = [
  {
    doctorName: "Jhon Doe",
    availability: "available",
    number: 15,
    date: "Thursday",
    time: "6:00 PM",
  },
  {
    doctorName: "Jhon Doe",
    availability: "available",
    number: 15,
    date: "Thursday",
    time: "6:00 PM",
  },
  {
    doctorName: "Jhon Doe",
    availability: "available",
    number: 15,
    date: "Thursday",
    time: "6:00 PM",
  },
  {
    doctorName: "Jhon Doe",
    availability: "available",
    number: 15,
    date: "Thursday",
    time: "6:00 PM",
  },
];

function MyAppointments() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <AppointmentCard></AppointmentCard>}
      ></FlatList>
    </View>
  );
}

export default MyAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
