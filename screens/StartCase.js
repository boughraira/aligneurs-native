import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import patients from "../data/PatientsData";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Shipping from "../subscreen/Shipping";
import Imprint from "../subscreen/Imprint";
import Prescription from "../subscreen/Prescription";

const Tab = createMaterialTopTabNavigator();

const StartCase = ({ navigation: { goBack } }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Icon
            name="arrow-back"
            type="material"
            reverseColor={Colors.second}
            size={30}
          />
        </TouchableOpacity>

        <Text style={styles.titleHeader}>Start a case</Text>
      </View>
      <View style={styles.profile}>
        <View style={styles.info}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.nameStyle}>{patients[0].name}</Text>
            <Text
              style={{
                color: "#575757",
                fontFamily: "Poppins-Medium",
                fontSize: 13,
                fontWeight: "600",
              }}
            >
              added on {patients[0].date}
            </Text>
          </View>
          <Text
            style={{
              color: "#575757",
              paddingTop: 5,
              fontFamily: "Poppins",
              textTransform: "uppercase",
              fontSize: 14,
            }}
          >
            id #{patients[0].id}
          </Text>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: { borderColor: Colors.primary, borderBottomWidth: 2 },
          activeTintColor: Colors.primary,
          inactiveTintColor: "#d2d2d2",

          labelStyle: {
            fontSize: 16,
            fontFamily: "Poppins-Medium",
            fontWeight: "700",
            textTransform: "capitalize",
          },
          style: {
            backgroundColor: "transparent",

            left: 0,
            right: 0,
            bottom: 0,
            elevation: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#dbdbdb",
          },
          scrollEnabled: true,
        }}
      >
        <Tab.Screen
          name="Prescription"
          component={Prescription}
          options={{ tabBarLabel: "Prescription" }}
        />
        <Tab.Screen
          name="Type of imprint"
          component={Imprint}
          options={{ tabBarLabel: "Type of imprint" }}
        />
        <Tab.Screen
          name="Shipping from"
          component={Shipping}
          options={{ tabBarLabel: "Shipping from" }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily: "Poppins-SemiBold",
  },
  profile: {
    flexDirection: 'column',
    paddingHorizontal: 20,
   
    //alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
});

export default StartCase;
