import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function PrimaryButton({ buttonText, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.onPress]}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    padding: 5,
    marginBottom: 5,
    backgroundColor: Colors.primaryColor,
  },
  buttonTextStyle: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "700",
  },
  iconStyle: {
    marginRight: 10,
  },
  onPress: {
    opacity: 0.7,
  },
});
