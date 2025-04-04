import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import NumberContainer from "../components/appointmentDetails/NumberContainer";
import { Colors } from "../constants/Colors";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

function AppointmentDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.availabilityTextContainer}>
        <Text style={styles.availabilityText}>Available</Text>
      </View>
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
      <View style={styles.numberContainer}>
        <NumberContainer number={13} textBelow="You"></NumberContainer>
        <NumberContainer number={10} textBelow="Now"></NumberContainer>
      </View>
      <View style={styles.counterContainer}>
        <CountdownCircleTimer
          isPlaying
          duration={7}
          colors={[Colors.primaryColor]}
        >
          {({ remainingTime }) => (
            <View style={styles.counterTextContainer}>
              <Text style={styles.mainText}>You have</Text>
              <Text style={styles.secondaryText}>{remainingTime}</Text>
              <Text style={styles.mainText}>left</Text>
            </View>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
}

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
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
  numberContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  counterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  counterTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 20,
    color: Colors.secondaryGreen,
  },
  secondaryText: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
