import { View, StyleSheet, FlatList } from "react-native";
import RecordCard from "../components/records/RecordCard";


const records = [
  {
    profileImage: "https://vabvequftpzqervnzclm.supabase.co/storage/v1/object/public/doctorImages//1.png",
    title: "Dr. John Doe",
    date: "2024-05-01",
    prescriptionImageUri: "https://picsum.photos/200/300",
  },
];


function Records() {
  return (
    <View style={styles.container}>
        <FlatList data={records} renderItem={({item})=><RecordCard title={item.title} date={item.date} prescriptionImageUri={item.prescriptionImageUri} profileImage={item.profileImage}/>}></FlatList>
    </View>
  );
}

export default Records;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  }
});
