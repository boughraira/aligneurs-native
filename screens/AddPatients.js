import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../style/AddPatientsStyle";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import CheckBox from "@react-native-community/checkbox";

const AddPatients = ({ navigation: { goBack } }) => {
  const [isSelected, setSelection] = useState(true);
  const [isSelect, setSelect] = useState(false);
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

        <Text style={styles.titleHeader}>Add new patient</Text>
      </View>
      <View style={styles.uploadImage}>
        <View style={styles.circleCard}>
          <Icon
            name="user"
            type="font-awesome"
            reverseColor={Colors.second}
            size={50}
          />
        </View>
        <View style={styles.titles}>
          <Icon
            name="upload"
            type="font-awesome"
            reverseColor={Colors.second}
            size={25}
          />
          <Text style={styles.textStyle}>Upload photo</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputsButtons}>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="First name" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Last name" />
            </Card>
          </View>
          <View style={styles.buttonRadio}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={isSelected}
                onValueChange={() =>
                  isSelected ? setSelection(false) : setSelection(true)
                }
              />
              <Text>Male</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={isSelect}
                onValueChange={() =>
                  isSelect ? setSelect(false) : setSelect(true)
                }
              />
              <Text>Female</Text>
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Date of birth" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Email" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Phone number" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.button}>
              <Text style={styles.textButton}>Add new patient</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddPatients;
