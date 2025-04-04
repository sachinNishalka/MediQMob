import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function PrimaryButton({ buttonText, onPress, color = Colors.primaryColor }) {
  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      padding: 5,
      marginBottom: 5,
      backgroundColor: color,
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
