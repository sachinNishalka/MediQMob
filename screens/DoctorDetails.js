import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import useDoctor from "../hooks/useDoctor";

import CustomCalendar from "../components/doctorDetails/CustomCalendar";
import DoctorInformation from "../components/doctorDetails/DoctorInformation";
import Time from "../components/doctorDetails/Time";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PrimaryButton from "../components/PrimaryButton";

function DoctorDetails({ route }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const { doctorId } = route.params;
  const { doctor, isLoading, error } = useDoctor(doctorId);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

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
          <Time
            times={doctor.available_time_slots}
            selectedTime={selectedTime}
            onSelect={handleTimeSelect}
          />
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
    marginBottom: 15,
  },
});
