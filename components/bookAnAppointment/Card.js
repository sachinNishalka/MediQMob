import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
function Card({ data }) {
  const navigation = useNavigation();
  return (
    <Pressable style={({pressed})=>[styles.card, pressed && styles.pressed]} onPress={()=>{navigation.navigate("doctorDetails", {doctorId:data.id})}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:data.profile_image_url}}></Image>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{data.fullname}</Text>
        <Text style={styles.specialization}>{data.specialization}</Text>
      </View>
      <Ionicons name="calendar" size={32} color={Colors.primaryColor} />
    </Pressable>
  );
}

export default Card;

const styles = StyleSheet.create({
  card:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:'#ffffff',
    borderRadius:5,
    marginBottom:10
  },
 
  image:{
    height:64,
    width:64,
  },
  detailsContainer:{
    flex:1,
    marginLeft:10
  },
  name:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom:5,
    color:Colors.primaryColor
  },
  specialization:{
    fontSize:12,
    color:Colors.secondaryGreen,
  },
  pressed:{
    opacity:0.7
  }
});
