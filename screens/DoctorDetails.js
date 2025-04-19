import { useState, useEffect } from "react";
import { Alert, ScrollView, StyleSheet, View, Text } from "react-native";

import useDoctor from "../hooks/useDoctor";
import useUser from "../hooks/useUser";
import useCreateReservation from "../hooks/useCreateReservation";

import CustomCalendar from "../components/doctorDetails/CustomCalendar";
import DoctorInformation from "../components/doctorDetails/DoctorInformation";
import Time from "../components/doctorDetails/Time";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PrimaryButton from "../components/PrimaryButton";

import {
  validateDate,
  validateTime,
  validateReservationForm,
} from "../utils/validation";
import InputLabel from "../components/InputLabel";

function DoctorDetails({ route }) {
  const [selectedTime, setSelectedTime] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [selectedDate, setSelectedDate] = useState({
    value: "",
    isValid: true,
    validationMessage: "",
  });
  const [validForm, setValidForm] = useState(false);

  const { doctorId } = route.params;
  const { doctor, isLoading, error } = useDoctor(doctorId);
  const {
    createReservation,
    isPending: isCreatingReservation,
    error: createReservationError,
  } = useCreateReservation();

  const { user, isPending } = useUser();

  // useEffect(() => {
  //   if (createReservationError) {
  //     Alert.alert("Error", createReservationError.message);
  //   }
  // }, [createReservationError]);

  useEffect(() => {
    if (selectedDate.isValid && selectedTime.isValid) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [selectedDate, selectedTime]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <Error message={error.message}></Error>;
  }

  function handleReservation() {
    // Format date to MM/DD/YYYY
    const formattedDate = selectedDate
      ? new Date(selectedDate.value).toLocaleDateString("en-US")
      : null;

    // Format time to HH:MM:SS
    const formattedTime = selectedTime ? `${selectedTime.value}:00` : null;

    const reservation = {
      userId: user.id,
      doctorId: doctorId,
      date: formattedDate,
      time: formattedTime,
      queNumber: 1,
    };

    validateReservationForm(
      selectedDate,
      selectedTime,
      setSelectedDate,
      setSelectedTime
    );

    if (validForm) {
      createReservation(reservation);
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
        <InputLabel
          labelText="Select your appointment date"
          validation={selectedDate.isValid}
          validationMessage={selectedDate.validationMessage}
        ></InputLabel>
        <CustomCalendar
          enabledDays={doctor.available_days}
          onDateSelect={(date) => {
            validateDate(date, setSelectedDate);
          }}
        ></CustomCalendar>

        <InputLabel
          labelText="Select your appointment time"
          validation={selectedTime.isValid}
          validationMessage={selectedTime.validationMessage}
        ></InputLabel>

        <View style={styles.timeSelectorArea}>
          <Time
            times={doctor.available_time_slots}
            selectedTime={selectedTime.value}
            onSelect={(time) => {
              validateTime(time, setSelectedTime);
            }}
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
