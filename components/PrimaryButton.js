import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function PrimaryButton({
  buttonText,
  onPress,
  color = Colors.primaryColor,
  disabled = false,
  loading = false,
}) {
  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      padding: 5,
      marginBottom: 5,
      backgroundColor: color,
      opacity: disabled ? 0.5 : 1,
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
    loadingContainer: {
      marginRight: 8,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [pressed && styles.onPress]}
    >
      <View style={styles.buttonContainer}>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#ffffff" />
          </View>
        )}
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
