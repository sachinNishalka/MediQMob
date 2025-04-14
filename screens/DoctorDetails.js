import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import useDoctor from "../hooks/useDoctor";

import CustomCalendar from "../components/CustomCalendar";
import DoctorInformation from "../components/doctorDetails/DoctorInformation";
import TimeSelector from "../components/doctorDetails/TimeSelector";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PrimaryButton from "../components/PrimaryButton";

function DoctorDetails({ route }) {
  const [selected, setSelected] = useState("");
  const { doctorId } = route.params;
  const { doctor, isLoading, error } = useDoctor(doctorId);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <Error message={error.message}></Error>;
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

        <CustomCalendar enabledDays={doctor.available_days}></CustomCalendar>

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
