import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../subscreen/ProfileDetails";
import Attachements from "../subscreen/Attachments";
import Treatment from "../subscreen/Treatment";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Icon, colors } from "react-native-elements";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

import patients from "../data/PatientsData";

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = ({ navigation: { goBack, navigate } }) => {
  return (
    <>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon
              name="arrow-back"
              type="material"
              reverseColor={Colors.second}
              size={30}
            />
          </TouchableOpacity>
          <View style={styles.subHeader}>
            <Image style={styles.image} source={patients[2].image} />
            <View style={{ paddingTop: 20, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-SemiBold",
                  fontWeight: "600",
                  color: "#232323",
                }}
              >
                {patients[0].name}
              </Text>
              <Text
                style={{
                  color: Colors.second,
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                }}
              >
                {patients[0].add}
              </Text>
            </View>

            <View style={styles.buttons}>
              <View style={{ paddingHorizontal: RFValue(10) }}>
                <TouchableOpacity onPress={() => navigate("StartCase")}>
                  <View style={styles.button}>
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                       color:'#ffffff',
                        fontSize: 14,
                        fontWeight: "600",
                      }}
                    >
                      Start the case
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigate("Chat")}>
                <View style={styles.message}>
                  <Icon
                    name="comment"
                    type="font-awesome"
                    color={Colors.primary}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 13,
            fontFamily: "Poppins-Medium",
            fontWeight: "700",
          },
          indicatorStyle:{borderColor:Colors.primary,borderBottomWidth:2},
          activeTintColor: "#232323",
          inactiveTintColor: '#d2d2d2',
        }}
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: "Profile" }}
        />
        <Tab.Screen
          name="Attachements"
          component={Attachements}
          options={{ tabBarLabel: "Attachements" }}
        />
        <Tab.Screen
          name="Treatment"
          component={Treatment}
          options={{ tabBarLabel: "Treatment" }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: 30,
    paddingHorizontal: RFValue(20),
  },
  subHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: RFValue(50),
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  buttons: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 43,
    width: 137,
    borderRadius: 137 / 4,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: Colors.primary,
  },
  message: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary,
  },
});

export default ProfileScreen;
