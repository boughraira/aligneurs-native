import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Card from "../UI/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Imprint = ({ navigation: { goBack } }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cards}>
        <View>
          <Card style={styles.card}>
            <Icon name="mailbox" reverseColor={Colors.second} size={80} />
            <Text style={{ fontSize: 15, color: "gray" }}>By post</Text>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Icon
              name="file-upload-outline"
              reverseColor={Colors.second}
              size={80}
            />
            <Text style={{ fontSize: 15, color: "gray" }}>
              Upload STL online
            </Text>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 160,
    borderRadius: 10,
  },
});

export default Imprint;
