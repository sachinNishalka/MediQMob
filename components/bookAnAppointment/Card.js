import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

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

export default Card;

const styles = StyleSheet.create({
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
