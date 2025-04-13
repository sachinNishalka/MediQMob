import { View, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../PrimaryButton";
import { Colors } from "../../constants/Colors";

function AppointmentDetailsContainer() {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
          }}
        ></Image>
      </View>
      <View style={styles.details}>
        <Text style={styles.doctorsName}>John Doe</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateText}>Thursday</Text>
          <Text style={styles.timeText}>6:00 pm</Text>
        </View>
        <View style={styles.paidTextContainer}>
          <Ionicons
            name="cash-outline"
            size={16}
            color={Colors.accentColor}
          ></Ionicons>
          <Text style={styles.paidText}>PAID</Text>
        </View>
        <PrimaryButton
          buttonText="Cancel"
          color={Colors.dangerColor}
        ></PrimaryButton>
      </View>
    </View>
  );
}

export default AppointmentDetailsContainer;

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    padding: 5,
  },
  imageStyle: {
    aspectRatio: 1,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  doctorsName: {
    fontWeight: "bold",
    color: Colors.primaryColor,
    fontSize: 24,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 12,
    fontWeight: "bold",
  },

  paidTextContainer: {
    borderWidth: 1,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    borderColor: Colors.accentColor,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  paidText: {
    fontSize: 14,
    color: Colors.primaryColor,
    marginLeft: 5,
  },
});
