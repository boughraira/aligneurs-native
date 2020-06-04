import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";


const RadiographySub = ({ navigation: { navigate, goBack } }) => {
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
      <View style={styles.uploadButton}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate('Radiography')}>
            <View style={styles.button}>
              <Icon
                name="credit-card"
                type="font-awesome"
                reverseColor={Colors.second}
                size={90}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Icon
              name="upload"
              type="font-awesome"
              reverseColor={Colors.second}
              size={25}
            />
            <Text style={styles.textStyle}>Upload photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
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
  uploadButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "column",
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 10,
  },
  textStyle: {
    fontSize: 15,
    paddingHorizontal: RFValue(10),
    fontFamily:'Poppins-SemiBold'
  },
  titleContainer: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "center",
  },
});

export default RadiographySub;
