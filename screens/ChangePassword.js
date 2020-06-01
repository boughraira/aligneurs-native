import React from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Card from "../UI/Card";
import Colors from "../constants/Colors";
import styles from "../style/PasswordStyle";
import { Icon } from "react-native-elements";

const ChangePassword = ({ navigation: { goBack } }) => {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

            <Text style={styles.titleHeader}>Change password</Text>
          </View>
          <View style={styles.inputsButtons}>
            <View style={styles.cardsContainer}>
              <Card style={styles.cards}>
                <TextInput placeholder="Enter current password" />
              </Card>
            </View>
            <View style={styles.cardsContainer}>
              <Card style={styles.cards}>
                <TextInput placeholder="Enter new password" />
              </Card>
            </View>
            <View style={styles.cardsContainer}>
              <Card style={styles.cards}>
                <TextInput placeholder="Confirm new password" />
              </Card>
            </View>
            <View style={styles.cardsContainer}>
              <Card style={styles.button}>
                <Text style={styles.textButton}>Change password</Text>
              </Card>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
