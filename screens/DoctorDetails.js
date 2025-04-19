import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

import useDoctor from "../hooks/useDoctor";
import useUser from "../hooks/useUser";
import useCreateReservation from "../hooks/useCreateReservation";

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
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    createReservation,
    isPending: isCreatingReservation,
    error: createReservationError,
  } = useCreateReservation();

  const { user, isPending } = useUser();

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <Error message={error.message}></Error>;
  }

  function handleReservation() {
    // Format date to MM/DD/YYYY
    const formattedDate = selectedDate
      ? new Date(selectedDate).toLocaleDateString("en-US")
      : null;

    // Format time to HH:MM:SS
    const formattedTime = selectedTime ? `${selectedTime}:00` : null;

    const reservation = {
      userId: user.id,
      doctorId: doctorId,
      date: formattedDate,
      time: formattedTime,
      queNumber: 1,
    };

    createReservation(reservation);

    if (createReservationError) {
      Alert.alert("Error", createReservationError.message);
    }
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

        <CustomCalendar
          enabledDays={doctor.available_days}
          onDateSelect={setSelectedDate}
        ></CustomCalendar>

        <View style={styles.timeSelectorArea}>
          <Time
            times={doctor.available_time_slots}
            selectedTime={selectedTime}
            onSelect={handleTimeSelect}
          />
        </View>

        <PrimaryButton
          disabled={isCreatingReservation}
          isLoading={isCreatingReservation}
          buttonText="Reserve"
          onPress={handleReservation}
        ></PrimaryButton>
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
