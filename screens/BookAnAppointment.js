import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/bookAnAppointment/Card";

const dummyList = [
  {
    id: "1",
    profile_image_url:
      "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
    fullname: "Jane Smith",
    specialization: "Dentist",
  },
  {
    id: "2",
    profile_image_url:
      "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
    fullname: "Jone Doe",
    specialization: "Dermatologist",
  },
  {
    id: "3",
    profile_image_url:
      "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
    fullname: "Lisa Kumar",
    specialization: "Pediatricians",
  },
];

function BookAnAppointment() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyList}
        renderItem={({ item }) => <Card data={item}></Card>}
        
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
