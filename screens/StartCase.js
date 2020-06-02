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
          <Text style={styles.nameStyle}>{patients[0].name}</Text>
          <Text style={{ color: Colors.second, paddingTop: 5 }}>
            ID #{patients[0].id}
          </Text>
        </View>
        <Text style={{ color: Colors.second }}>
          added on {patients[0].date}
        </Text>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.second,
          labelStyle:{fontSize:12,fontWeight:'600'},
          labelStyle:{fontSize:15,fontFamily:'Poppins-SemiBold'},
          style:{ backgroundColor: 'transparent',
          
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,},
          scrollEnabled: true
         
        }}
      >
        <Tab.Screen name="Prescription" component={Prescription} />
        <Tab.Screen name="Type of imprint" component={Imprint} />
        <Tab.Screen name="Shipping from" component={Shipping} />
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
    fontFamily:'Poppins-SemiBold'
  },
  profile: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  nameStyle: {
    fontSize: 17,
    
    fontFamily:'Poppins-SemiBold'
  },
});

export default StartCase;
