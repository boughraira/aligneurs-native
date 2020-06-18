import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import Dashboard from "../screens/Dashboard";
import Orders from "../screens/Orders";
import Settings from "../screens/Settings";
import Patients from "../screens/Patients";
import Agenda from "../screens/Agenda";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ tintColor }) => {
          if (route.name === "Dashboard") {
            return (
              <View >
                <Image
                 
                  source={require("../Photos/dashboard.png")}
                />
              </View>
            );
          }
          if (route.name === "Settings") {
            return (
              <View >
                <Image
                 
                  source={require("../Photos/settings.png")}
                />
              </View>
            );
          }
          if (route.name === "Agenda") {
            return (
              <View>
                <Image
                
                  source={require("../Photos/RDV.png")}
                />
              </View>
            );
          }
          if (route.name === "Patients") {
            return (
              <View >
                <Image
                  
                  source={require("../Photos/patients.png")}
                />
              </View>
            );
          }
          if (route.name === "Orders") {
            return (
              <View >
                <Image
                 
                  source={require("../Photos/orders.png")}
                />
              </View>
            );
          }


        },

      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: "#555555",
        showLabel: false,
        tabStyle: { paddingVertical: 10 },
      }}
      initialRouteName="Dashboard"
    >
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Agenda"
        component={Agenda}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
