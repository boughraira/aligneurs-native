import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import LatestNotifications from "../data/LatestNotificationsData";
import OldNotifications from "../data/OldNotificationsData";
import { RFValue } from "react-native-responsive-fontsize";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";

const Notifications = ({ navigation: { goBack } }) => {
  

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-back" reverseColor={Colors.second} size={30} />
          </TouchableOpacity>

          <Text style={styles.titleHeader}>Notifications</Text>
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
                <Text style={{ color: "red", fontSize: 18 }}>Clear all</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.newNotif}>
        <Text style={{ color: Colors.third, fontSize: 14, fontWeight: "500",paddingBottom:20 }}>
          Latest notifications
        </Text>
        <View style={styles.notif}>
          <FlatList
            data={LatestNotifications}
            renderItem={({ item }) => (
              <SwipeRow leftOpenValue={75}>
                <View
                  style={{
                    backgroundColor: "#ff3030",
                    width: "100%",
                    height: 90,
                    justifyContent: "center",
                    //alignItems: "center",
                    flex: 1,
                    paddingHorizontal:15
                  }}
                >
                  <TouchableOpacity>
                    <Icon
                      type="material"
                      color="white"
                      name="delete"
                      size={40}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.notifContainer}>
                  <View style={styles.iconsInfo}>
                    <View style={styles.iconContainer}>
                      <Icon
                        color={Colors.primary}
                        name={item.icon.name}
                        size={40}
                      />
                    </View>
                    <View style={styles.infoContainer}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: "Poppins-SemiBold",
                          }}
                        >
                          {item.title}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: "#555555",
                          lineHeight: 19,
                          paddingVertical: 5,
                          fontFamily: "Poppins",
                          fontSize: 14,
                          fontWeight: "400",
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.timeContainer}>
                    <Text style={{ color: "#555555" }}>{item.time}</Text>
                  </View>
                </View>
              </SwipeRow>
            )}
          />
        </View>
        <View style={styles.oldNotif}>
          <Text
            style={{ color: Colors.third, fontSize: 14, fontWeight: "500",paddingBottom:20 }}
          >
            Old notifications
          </Text>
          <View style={styles.notif}>
            <FlatList
              data={OldNotifications}
              renderItem={({ item }) => (
                <SwipeRow leftOpenValue={75}>
                <View
                  style={{
                    backgroundColor: "#ff3030",
                    width: "100%",
                    height: 90,
                    justifyContent: "center",
                    //alignItems: "center",
                    flex: 1,
                    paddingHorizontal:15
                    
                  }}
                >
                  <TouchableOpacity>
                    <Icon
                      type="material"
                      color="white"
                      name="delete"
                      size={40}
                    />
                  </TouchableOpacity>
                </View>
                  <View style={styles.notifContainer}>
                    <View style={styles.iconsInfo}>
                      <View style={styles.iconContainer}>
                        <Icon
                          color={Colors.primary}
                          name={item.icon.name}
                          size={40}
                        />
                      </View>
                      <View style={styles.infoContainer}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontFamily: "Poppins-SemiBold",
                            }}
                          >
                            {item.title}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: "#555555",
                            lineHeight: 19,
                            paddingVertical: 5,
                          }}
                        >
                          {item.description}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.timeContainer}>
                      <Text style={{ color: "#555555" }}>{item.time}</Text>
                    </View>
                  </View>
                </SwipeRow>
              )}
            />
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
  delete: {
    width: 90,
    height: 90,
    backgroundColor: "#ff3030",
    justifyContent: "center",
    alignItems: "center",
  },
  newNotif: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(20),
  },
  notifContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: RFValue(20),
    flex:1,

    backgroundColor:'white'
  },

  iconsInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    paddingHorizontal: RFValue(15),
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  oldNotif: {
    paddingVertical: RFValue(20),
  },
});

export default Notifications;
