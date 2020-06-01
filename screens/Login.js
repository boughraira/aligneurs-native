import React, { useState, useReducer, useEffect, useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";

import Input from "../UI/Input";
import Colors from "../constants/Colors";
import { colors } from "react-native-elements";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const LoginScreen = ({ navigation: { navigate } }) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.screen}>
            <View style={styles.intro}>
              <Image
                style={styles.image}
                source={require("../android/app/src/assets/logo.png")}
              />
              <Text style={styles.title}>Aligneurs Français</Text>
              <Text style={styles.subTitle}>
                Welcome back, login to use{"\n"}the app
              </Text>
            </View>
            <View style={styles.authScreen}>
              <Input
                id="email"
                placeholder="Email"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="password"
                placeholder="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("TabNavigation")}
              >
                <Text style={styles.textButton}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.suggestion}>
              <TouchableOpacity>
                <Text style={styles.text}>Reset Password</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>Can't login?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  authScreen: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
    maxHeight: 400,
    paddingTop: 150,
  },
  buttonContainer: {
    height: 60,
    width: "80%",
    backgroundColor: Colors.primary,
    padding: 20,
  },
  textButton: {
    color: "white",
    fontSize: 15,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },

  suggestion: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 17,
    paddingHorizontal: 50,
    fontFamily:'Poppins'
  },
  intro: {
    flex: 1,
    paddingVertical: 20,
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "stretch",
  },
  title: {
    color: Colors.primary,
    fontSize: 35,
    paddingTop: 30,
    fontFamily:'Poppins-Bold'
  },
  subTitle: {
    fontSize: 20,
    //paddingTop: 10,
    fontFamily:'Poppins',
    color:"#555555"
  },
});

export default LoginScreen;
