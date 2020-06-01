import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";

const PhotographsSubScreen = ({ navigation: { goBack } }) => {
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

        <Text style={styles.titleHeader}>Vue de face</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text style={{ fontSize: 18, fontFamily:'Poppins-SemiBold' }}>
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
              source={require("../android/app/src/assets/photo1.png")}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../android/app/src/assets/photo2.png")}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../android/app/src/assets/photo3.png")}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Image
              style={styles.image}
              source={require("../android/app/src/assets/photo4.png")}
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily:'Poppins-SemiBold'
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  card: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 175 * 2,
    height: 75,
  },
  photosContainer: {
    paddingHorizontal: 20,
  },
  photos: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 170,
    height: 170,
    paddingVertical: 10,
  },
});

export default PhotographsSubScreen;