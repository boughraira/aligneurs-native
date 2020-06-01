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

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "view-dashboard" : "view-dashboard";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings";
          } else if (route.name === "Agenda") {
            iconName = focused ? "calendar-blank" : "calendar-blank";
          } else if (route.name === "Orders") {
            iconName = focused ? "reorder-horizontal" : "reorder-horizontal";
          } else if (route.name === "Patients") {
            iconName = focused ? "tooth" : "tooth";
          }

          return <Icon name={iconName} size={35} color={color} />;
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
