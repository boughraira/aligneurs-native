import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import TabNavigation from "./screens/TabNavigation";
import ChangePassword from "./screens/ChangePassword";
import AddPatients from "./screens/AddPatients";
import ProfileScreen from "./screens/ProfileScreen";
import RadiographySub from './subscreen/RadiographySub'
import Radiography from './screens/Radiography'
import Photographs from './screens/Photographs'
import PhotographsSub from './subscreen/PhotographsSub'
import PhotographsSubScreen from './screens/PhotographsSubScreen'
import StartCase from './screens/StartCase'
import Conversation from './screens/Conversation'
import PatientsConversations from './screens/PatientsConversations'
import Chat from './screens/Chat'
import Notifications from './screens/Notifications'

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddPatients"
          component={AddPatients}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RadiographySub"
          component={RadiographySub}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Radiography"
          component={Radiography}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Photographs"
          component={Photographs}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="PhotographsSub"
          component={PhotographsSub}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="PhotographsSubScreen"
          component={PhotographsSubScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="StartCase"
          component={StartCase}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Conversation"
          component={Conversation}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="PatientsConversations"
          component={PatientsConversations}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
