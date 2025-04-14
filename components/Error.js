import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Error({ message }) {
  const handleContactSupport = () => {
    // You can implement email or other contact methods here
    console.log("Contact support clicked");
  };

  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle" size={48} color="#ff4444" />
      <Text style={styles.errorText}>{message}</Text>
      <Text style={styles.supportText}>
        If the problem persists, please contact our support team
      </Text>
      {/* <TouchableOpacity
        style={styles.contactButton}
        onPress={handleContactSupport}
      >
        <Text style={styles.contactButtonText}>Contact Support</Text>
      </TouchableOpacity> */}
      <View style={styles.contactInfo}>
        <Ionicons name="call" size={24} color="#007AFF" />
        <Text>077 168 1976</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginVertical: 20,
  },
  supportText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
