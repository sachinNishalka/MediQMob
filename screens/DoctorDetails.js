import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Colors } from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";
import DoctorInformation from "../components/doctorDetails/DoctorInformation";
import TimeSelector from "../components/doctorDetails/TimeSelector";

function DoctorDetails() {
  const [selected, setSelected] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView>
        <DoctorInformation></DoctorInformation>
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

  timeSelectorArea: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
});
