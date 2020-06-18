import React from "react";
import { Text, View, TouchableOpacity, StyleSheet,Image } from "react-native";
import Card from "../UI/Card";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";



const Attachements = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.attachements}>
      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={() => navigate("RadiographySub")}>
          <Card style={styles.cards}>
            <View style={styles.titleContainer}>
              <View style={styles.iconContainer}>
              <Image style={styles.image} source={require('../Photos/radiography.png')} />
              </View>
              <Text style={styles.textTitle}>Radiography</Text>
            </View>
            <Icon
              name="chevron-right"
              type="font-awesome5"
              reverseColor={Colors.second}
              size={30}
            />
          </Card>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      <TouchableOpacity onPress={() => navigate("Photographs")}>
        <Card style={styles.cards}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
            <Image style={styles.image} source={require('../Photos/photographs.png')} />
            </View>
            <Text style={styles.textTitle}>Photoghraphs</Text>
          </View>
          <Icon
            name="chevron-right"
            type="font-awesome5"
            reverseColor={Colors.second}
            size={30}
          />
        </Card>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <Card style={styles.cards}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
            <Image style={styles.image} source={require('../Photos/prescription.png')} />
            </View>
            <Text style={styles.textTitle}>Prescription</Text>
          </View>
          <Icon
            name="chevron-right"
            type="font-awesome5"
            reverseColor={Colors.second}
            size={30}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  attachements: {
    flexDirection: "column",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
  },
  cardsContainer: {
    paddingVertical: RFValue(10),
  },
  cards: {
    width: "95%",
    height: 75,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(20),
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf:"center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems:'center'
  },
  textTitle: {
    
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily:'Poppins-SemiBold'
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: "#ebeef1",
    justifyContent: "center",
    alignItems: "center",
  },
 
});

export default Attachements;
