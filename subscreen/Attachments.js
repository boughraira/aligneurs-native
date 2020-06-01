import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Card from "../UI/Card";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";

const Attachements = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.attachements}>
      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={() => navigate("RadiographySub")}>
          <Card style={styles.cards}>
            <View style={styles.titleContainer}>
              <View style={styles.iconContainer}>
                <Icon
                  name="credit-card"
                  type="font-awesome"
                  reverseColor={Colors.second}
                  size={20}
                />
              </View>
              <Text style={styles.textTitle}>Radiography</Text>
            </View>
            <Icon
              name="chevron-right"
              type="font-awesome5"
              reverseColor={Colors.second}
              size={30}
            />
          </Card>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      <TouchableOpacity onPress={() => navigate("Photographs")}>
        <Card style={styles.cards}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <Icon
                name="camera"
                type="font-awesome"
                reverseColor={Colors.second}
                size={20}
              />
            </View>
            <Text style={styles.textTitle}>Photoghraphs</Text>
          </View>
          <Icon
            name="chevron-right"
            type="font-awesome5"
            reverseColor={Colors.second}
            size={30}
          />
        </Card>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <Card style={styles.cards}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <Icon
                name="paste"
                type="font-awesome"
                reverseColor={Colors.second}
                size={20}
              />
            </View>
            <Text style={styles.textTitle}>Prescription</Text>
          </View>
          <Icon
            name="chevron-right"
            type="font-awesome5"
            reverseColor={Colors.second}
            size={30}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  attachements: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardsContainer: {
    paddingVertical: 10,
  },
  cards: {
    width: 175 * 2,
    height: 75,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
  },
  textTitle: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily:'Poppins-SemiBold'
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#dbdbdb",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Attachements;
