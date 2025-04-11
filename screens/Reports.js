import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function Reports() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.cardContainer,
          pressed && styles.pressed,
        ]}
      >
        <View>
          <Text style={styles.reportTitle}>Blood Report</Text>
          <Text style={styles.dateText}>2025 - 04 - 10</Text>
        </View>
        <View>
          <Ionicons
            name="document"
            size={32}
            color={Colors.primaryColor}
          ></Ionicons>
        </View>
      </Pressable>
    </View>
  );
}

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
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
