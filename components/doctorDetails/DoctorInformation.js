import { View, Image, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

function DoctorInformation({
  fullName,
  credentials,
  speciality,
  description,
  imageUri,
}) {
  return (
    <View style={styles.doctorInformation}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: imageUri,
          }}
        ></Image>
      </View>
      <View style={styles.doctorDetails}>
        <Text style={styles.doctorsName}>{fullName}</Text>
        <View style={styles.credentialSpecialityContainer}>
          <Text style={styles.doctorsCredentials}>{credentials}</Text>
          <Text style={styles.speciality}>{speciality}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

export default DoctorInformation;

const styles = StyleSheet.create({
  doctorInformation: {
    flexDirection: "row",
    marginBottom: 5,
  },
  imageContainer: {
    flex: 1,
    // backgroundColor: Colors.primaryColor,
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
  credentialSpecialityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
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
  description: {
    fontSize: 12,
    textAlign: "justify",
  },
});
