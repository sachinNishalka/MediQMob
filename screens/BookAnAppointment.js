import { FlatList, StyleSheet, View, Text } from "react-native";

import Card from "../components/bookAnAppointment/Card";
import useDoctors from "../hooks/useDoctors";

function BookAnAppointment() {
  const { isLoading, doctors, error } = useDoctors();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={doctors}
        renderItem={({ item }) => <Card data={item}></Card>}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

export default BookAnAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
