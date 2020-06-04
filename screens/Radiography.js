import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import { RFValue } from "react-native-responsive-fontsize";


const Radiography = ({ navigation: { goBack } }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
        <Icon
              name="arrow-back"
              type="material"
              reverseColor={Colors.second}
              size={30}
            />
        </TouchableOpacity>

        <Text style={styles.titleHeader}>Radiography</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Upload a photo
          </Text>
          <Icon
            name="upload"
            type="font-awesome"
            reverseColor={Colors.second}
            size={25}
          />
        </Card>
      </View>
      <View style={styles.photosContainer}>
        <Text style={{ fontSize: 15 }}>Photos</Text>
        <View style={styles.photos}>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../Photos/photo1.png")}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../Photos/photo2.png")}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../Photos/photo3.png")}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../Photos/photo4.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(30),
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: RFValue(20),
    fontFamily:'Poppins-SemiBold'
  },
  cardContainer: {
    paddingHorizontal:RFValue (20),
    paddingVertical: RFValue(30),
  },
  card: {
    paddingHorizontal: RFValue(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 175 * 2,
    height: 75,
  },
  photosContainer: {
    paddingHorizontal: RFValue(20),
  },
  photos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: RFValue(20),
  },
  image: {
    width: 170,
    height: 170,
    paddingVertical: RFValue(10),
  },
});

export default Radiography;
