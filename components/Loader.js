import { Colors } from "../constants/Colors";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator
        size="large"
        color={Colors.primary}
      ></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
