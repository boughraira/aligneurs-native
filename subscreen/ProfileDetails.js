import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import patients from "../data/PatientsData";

const Profile = (props) => {
  return (
    <View style={styles.container}>
    
        <View style={styles.date}>
          <Text style={styles.textTitle}>Date added</Text>
          <Text style={styles.title}>{patients[0].date}</Text>
        </View>
      

      <View style={styles.details}>
        <Text style={styles.textTitle}>Patient name</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>{patients[0].name}</Text>
          <Text style={styles.textTitle}>Edit</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.textTitle}>Mobile number</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>{patients[0].phone}</Text>
          <Text style={styles.textTitle}>Edit</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.textTitle}>Email</Text>
        <View style={styles.detail}>
          <Text style={styles.title}>{patients[0].email}</Text>
          <Text style={styles.textTitle}>Edit</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  date: {
    flexDirection: "column",
   paddingVertical: 10,
  },
 
  details: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  textTitle: {
    color: Colors.second,
    fontSize: 15,
  },
  title: {
    fontSize: 17,
  },
});

export default Profile;
