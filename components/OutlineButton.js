import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function OutlineButton({ iconName, buttonText }) {
  return (
    <Pressable style={({ pressed }) => [pressed && styles.onPress]}>
      <View style={styles.buttonContainer}>
        <Ionicons
          name={iconName}
          size={24}
          style={styles.iconStyle}
          color={Colors.accentColor}
        ></Ionicons>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  );
}

export default OutlineButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: Colors.accentColor,
    borderWidth: 3,
    justifyContent: "center",
    padding: 5,
  },
  buttonTextStyle: {
    fontSize: 24,
    color: Colors.primaryColor,
    fontWeight: "700",
  },
  iconStyle: {
    marginRight: 10,
  },
  onPress: {
    opacity: 0.7,
  },
});
