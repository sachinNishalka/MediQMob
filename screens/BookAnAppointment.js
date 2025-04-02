import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

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

function Card({ data }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("doctorDetails")}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
          }}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.doctorsName}>{data.fullname}</Text>
        <Text>{data.specialization}</Text>
      </View>
    </Pressable>
  );
}

function BookAnAppointment() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyList}
        renderItem={({ item }) => <Card data={item}></Card>}
        numColumns={2}
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
  imageStyle: {
    aspectRatio: 1,
  },
  imageContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  card: {
    flex: 1,
    overflow: "hidden",
    margin: 4,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: Colors.accentColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    paddingBottom: 3,
    borderRadius: 10,
  },
  doctorsName: {
    color: Colors.primaryColor,
    fontWeight: "bold",
  },
});
