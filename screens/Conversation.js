import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import Conversations from "../data/ConversationData";
import { RFValue } from "react-native-responsive-fontsize";

const Conversation = ({ navigation: { goBack, navigate } }) => {
  const [renderData, setRenderData] = useState(Conversations);
  const [selectionData, setSelectionData] = useState([]);

  const onPressHandler = (id) => {
    let Data = [...renderData];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setRenderData(Data);
  };

  const getSelectedItem = () => {
    let Data = [...renderData];
    for (i of Data) {
      if (i.selected == true) {
        selectionData.push(i.id);
      }
    }
    setSelectionData(selectionData);
  };

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

            <MenuOptions
              style={{
                height: 70,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{ color: "red", fontSize: 18 }}>
                  Delete conversation
                </Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.text}>
        <Text
          style={{
            color: "#575757",
            fontSize: 15,
            lineHeight: 22,
            fontFamily: "Poppins-Medium",
            fontWeight: "600",
          }}
        >
          Here are the previous conversation with lab assist.{"\n"}
          regarding patients
        </Text>
      </View>
      <View style={styles.messages}>
        <FlatList
          data={Conversations}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigate("Chat")}
                activeOpacity={0.8}
              >
                <Card style={styles.card}>
                  <View style={styles.containerInfo}>
                    <TouchableOpacity
                      onPress={() => onPressHandler(item.id)}
                    >
                      {item.selected == true ? (
                        <View
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 70 / 2,
                            backgroundColor: "#ff3030",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            name="check"
                            type="material"
                            color="white"
                            size={40}
                          />
                        </View>
                      ) : (
                        <Image source={item.image} style={styles.image} />
                      )}
                    </TouchableOpacity>

                    <View style={styles.nameMessage}>
                      <Text
                        style={{ fontSize: 15, fontFamily: "Poppins-SemiBold" }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: Colors.second,
                          fontFamily: "Poppins-Medium",
                        }}
                      >
                        {item.message}
                      </Text>
                    </View>
                  </View>
                  {item.selected == true ? (
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100 / 2,
                        backgroundColor: "#ff3030",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          Alert.alert("Delete", "Are you sure?", [
                            { text: "Yes",onPress:()=>item.selected=null },
                            { text: "No" },
                          ])
                        }
                      >
                        <Icon
                          name="clear"
                          type="material"
                          color="white"
                          size={30}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.badgeStyle}>
                      <Text style={styles.badgeText}>{item.number}</Text>
                    </View>
                  )}
                </Card>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

        <View
          style={{
            right: RFValue(20),
            alignItems: "flex-end",
            top: RFValue(75),
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("PatientsConversations")}
            style={[styles.addIcon, shadow]}
          >
            <Icon name="add" type="material" color="white" size={60} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const shadow = {
  shadowColor: Colors.primary,
  shadowRadius: 10,
  shadowOpacity: 0.6,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 4,
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(30),
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: RFValue(20),
    fontFamily: "Poppins-SemiBold",
  },

  text: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(20),
  },
  cardContainer: {
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
  },
  card: {
    width: "100%",
    height: 100,

    paddingHorizontal: RFValue(20),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  containerInfo: {
    flexDirection: "row",

    alignItems: "center",
  },
  nameMessage: {
    paddingHorizontal: RFValue(15),
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
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",

    zIndex: 1,
    position: "absolute",
  },
});

export default Conversation;
