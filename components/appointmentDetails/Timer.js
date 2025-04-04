import { View, Text, StyleSheet } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Colors } from "../../constants/Colors";

function Timer() {
  return (
    <View style={styles.counterContainer}>
      <CountdownCircleTimer
        isPlaying
        duration={7}
        colors={[Colors.primaryColor]}
      >
        {({ remainingTime }) => (
          <View style={styles.counterTextContainer}>
            <Text style={styles.mainText}>You have</Text>
            <Text style={styles.secondaryText}>{remainingTime}</Text>
            <Text style={styles.mainText}>left</Text>
          </View>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

export default Timer;

const styles = StyleSheet.create({
  counterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  counterTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 20,
    color: Colors.secondaryGreen,
  },
  secondaryText: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
