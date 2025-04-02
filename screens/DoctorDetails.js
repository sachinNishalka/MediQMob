import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Colors } from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

function TimeSelector({ time }) {
  return (
    <View style={styles.timeSelector}>
      <Text style={styles.timeSelectorText}>{time}</Text>
    </View>
  );
}

function DoctorDetails() {
  const [selected, setSelected] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.doctorInformation}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
              }}
            ></Image>
          </View>
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorsName}>John Doe</Text>
            <View style={styles.credentialSpecialityContainer}>
              <Text style={styles.doctorsCredentials}>MBBS, FRCS</Text>
              <Text style={styles.speciality}>Gynecologist</Text>
            </View>
            <Text style={styles.description}>
              Dr. Williams has a strong commitment to delivering comprehensive
              medical care, focusing on preventive medicine, early diagnosis,
              and effective treatment strategies.
            </Text>
          </View>
        </View>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
        />
        <View style={styles.timeSelectorArea}>
          <TimeSelector time="4:00"></TimeSelector>
          <TimeSelector time="6:00"></TimeSelector>
        </View>
        <PrimaryButton buttonText="Reserve"></PrimaryButton>
      </ScrollView>
    </View>
  );
}

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  doctorInformation: {
    flexDirection: "row",
    marginBottom: 5,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  doctorDetails: {
    flex: 1,
    padding: 5,
  },
  imageStyle: {
    aspectRatio: 1,
  },
  doctorsName: {
    fontWeight: "bold",
    color: Colors.primaryColor,
    fontSize: 24,
    marginBottom: 10,
  },
  doctorsCredentials: {
    fontSize: 12,
    color: Colors.secondaryColor,
    fontWeight: "bold",
    marginBottom: 2,
  },
  speciality: {
    fontSize: 12,
    fontWeight: "bold",
  },
  credentialSpecialityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    textAlign: "justify",
  },
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
  timeSelectorArea: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
});
