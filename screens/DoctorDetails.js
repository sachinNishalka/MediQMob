import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

import { Colors } from "../constants/Colors";

import useDoctor from "../hooks/useDoctor";

import PrimaryButton from "../components/PrimaryButton";
import DoctorInformation from "../components/doctorDetails/DoctorInformation";
import TimeSelector from "../components/doctorDetails/TimeSelector";

function DoctorDetails({ route }) {
  const [selected, setSelected] = useState("");
  const { doctorId } = route.params;
  const { doctor, isLoading, error } = useDoctor(doctorId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <DoctorInformation
          fullName={doctor.fullName}
          credentials={doctor.credentials}
          speciality={doctor.specialization}
          description={doctor.about}
          imageUri={doctor.profile_image_url}
        ></DoctorInformation>
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
