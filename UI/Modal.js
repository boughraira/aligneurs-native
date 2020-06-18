import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";
import Card from "../UI/Card";
import newPatients from "../data/NewPatientData";

const ModalCas = (props) => {
  
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}> Liste des nouveaux patients</Text>
        </View>
        <TouchableOpacity onPress={props.close}>
          <Icon
            name="close"
            type="material"
            reverseColor={Colors.second}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Card style={styles.card}>
          <View style={styles.headerContainer}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Poppins-Medium",
                color: "#575757",
                fontWeight: "600",
              }}
            >
              Nom de patient
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Poppins-Medium",
                color: "#575757",
                fontWeight: "600",
              }}
            >
              Date de création
            </Text>
            <View/>
          </View>
          <View style={styles.contentContainer}>
            <FlatList
              data={newPatients}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical:20,
                    paddingHorizontal:20
                  }}
                  
                >
                  <Text style={{fontSize:13}}> {item.name}</Text>
                  <Text>{item.date}</Text>
                  <View>
                       <TouchableOpacity onPress={props.navigate}>
                    <Icon
                      name="chevron-right"
                      type="font-awesome5"
                      color={Colors.primary}
                      size={30}
                    />
                  </TouchableOpacity>
                  </View>
               
                </View>
              )}
              keyExtractor={item => item.name}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,

    fontFamily: "Poppins-SemiBold",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 20,
  },
  card: {
    //width:"80%",
    height: "90%",
    borderRadius: 6,
    width: 300,
  },

  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
  },
});

export default ModalCas;
