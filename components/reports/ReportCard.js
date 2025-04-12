import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

function ReportCard({ title, date, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.cardContainer, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.reportTitle}>{title}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View>
        <Ionicons name="document" size={32} color={Colors.primaryColor} />
      </View>
    </Pressable>
  );
}

export default ReportCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  reportTitle: {
    fontSize: 16,
    color: Colors.primaryColor,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: Colors.secondaryGreen,
  },
  pressed: {
    opacity: 0.7,
  },
}); 