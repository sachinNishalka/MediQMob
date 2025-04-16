import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { openImageAndroid } from "../../utils/openImageAndroid";

function RecordCard({
  title,
  date,
  onPress,
  profileImage,
  prescriptionImageUri,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.prescriptionCard,
        pressed && styles.pressed,
      ]}
      onPress={async () => {
        await openImageAndroid(prescriptionImageUri);
      }}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{ uri: profileImage }}></Image>
      </View>
      <View style={styles.prescriptionDetails}>
        <Text style={styles.doctorName}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Ionicons name="document" size={32} color={Colors.primaryColor} />
    </Pressable>
  );
}

export default RecordCard;

const styles = StyleSheet.create({
  prescriptionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
  imageStyle: {
    height: 64,
    width: 64,
  },
  prescriptionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.primaryColor,
  },
  date: {
    fontSize: 12,
    color: Colors.secondaryGreen,
  },
  pressed: {
    opacity: 0.7,
  },
});
