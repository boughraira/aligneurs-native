import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Picker,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "../style/PatientsStyle";
import Colors from "../constants/Colors";
import patients from "../data/PatientsData";
import Card from "../UI/Card";

const Patients = ({ navigation: { navigate } }) => {
  const [selectedValue, setSelectedValue] = useState("Recently Added");
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Patients</Text>
          <View style={styles.icons}>
            <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity onPress={() => navigate("Notifications")}>
              <View style={styles.iconView}>
                <Icon
                  name="notifications"
                  type="ionicons"
                  reverseColor={Colors.second}
                  size={20}
                />
                <View style={styles.badgeStyle}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigate("Conversation")}>
                 <View style={styles.iconView}>
              <Icon
                name="comment"
                type="font-awesome"
                reverseColor={Colors.second}
                size={20}
              />
              <View style={styles.badgeStyle}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
            </TouchableOpacity>

         

          </View>
        </View>
        <View style={styles.inputStyle}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Search" />
            <Icon
              name="search"
              type="font-awesome5"
              reverseColor={Colors.second}
              size={30}
              style={styles.search}
            />
          </View>
        </View>

        <View style={styles.titles}>
          <Text style={styles.textTitle}>Sort by</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 20, width: 180, fontSize: 15 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Recently Added" value="Recently Added" />
          </Picker>
        </View>

        <View style={styles.orders}>
          <FlatList
            data={patients}
            renderItem={({ item }) => (
              <View style={styles.cardsContainer}>
                <TouchableOpacity onPress={() => navigate("ProfileScreen")}>
                  <Card style={styles.cards}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.textStyle}>ID #{item.id}</Text>
                      <Text style={styles.textStyle}>added on {item.date}</Text>
                    </View>
                    <View style={styles.footerCard}>
                      <Text style={styles.textName}>{item.name}</Text>
                      <Icon
                        name="chevron-right"
                        type="font-awesome5"
                        reverseColor={Colors.second}
                        size={30}
                      />
                    </View>
                    <Text style={styles.footerText}>{item.add}</Text>
                  </Card>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />

          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-end",
              bottom: 25,
              right: 20,
            }}
          >
            <View style={styles.addIcon}>
              <TouchableOpacity onPress={() => navigate("AddPatients")}>
                <Icon name="add" type="material" color="white" size={60} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Patients;
