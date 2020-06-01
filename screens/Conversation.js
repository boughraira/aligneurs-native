import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import Conversations from "../data/ConversationData";

const Conversation = ({ navigation: { goBack, navigate } }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon
              name="arrow-back"
              type="material"
              reverseColor={Colors.second}
              size={30}
            />
          </TouchableOpacity>

          <Text style={styles.titleHeader}>Conversation</Text>
        </View>

        <View>
          <Menu>
            <MenuTrigger>
              <Icon
                type="material"
                color="#555555"
                name="more-vert"
                size={30}
              />
            </MenuTrigger>

            <MenuOptions style={{height:70,alignItems:'center' ,justifyContent:'center'}}>
              <MenuOption onSelect={() => alert(`Delete`)} >
                <Text style={{ color: "red" ,fontSize:18}}>Delete conversation</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.text}>
        <Text style={{ color: "#555555", fontSize: 15, lineHeight: 22 }}>
          Here are the previous conversation with lab assist.{"\n"}
          regarding patients
        </Text>
      </View>
      <View style={styles.messages}>
        <FlatList
          data={Conversations}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity onPress={() => navigate("Chat")}>
                <Card style={styles.card}>
                  <View style={styles.containerInfo}>
                    <Image source={item.image} style={styles.image} />

                    <View style={styles.nameMessage}>
                      <Text style={{ fontSize: 15,  fontFamily:'Poppins-SemiBold'}}>
                        {item.name}
                      </Text>
                      <Text style={{ fontSize: 15, color: Colors.second }}>
                        {item.message}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.badgeStyle}>
                    <Text style={styles.badgeText}>{item.number}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />

        <View
          style={{
            paddingHorizontal: 20,
            alignItems: "flex-end",
            paddingVertical: 120,
          }}
        >
          <View style={styles.addIcon}>
            <TouchableOpacity onPress={() => navigate("PatientsConversations")}>
              <Icon name="add" type="material" color="white" size={60} />
            </TouchableOpacity>
          </View>
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily:'Poppins-SemiBold'
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  cardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    width: 175 * 2,
    height: 100,

    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  containerInfo: {
    flexDirection: "row",

    alignItems: "center",
  },
  nameMessage: {
    paddingHorizontal: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  badgeStyle: {
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
  },
  addIcon: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 10,
    zIndex: 1,
    // position: "absolute",
  },
});

export default Conversation;
