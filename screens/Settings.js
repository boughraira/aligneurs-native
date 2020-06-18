import React from "react";
import {
  Text,
  View,
  ScrollView,
  _ScrollView,
  TouchableOpacity,
} from "react-native";
import styles from "../style/SettingsStyle";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";
import users from "../data/UserData";

const Settings = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Settings</Text>
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
      <View style={styles.userDetails}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>Name</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}>{users.name}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>

            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>Phone</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}>{users.phone}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>Email</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}>{users.email}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>Company</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}>{users.company}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>Address</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}>{users.address}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>City</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}>{users.city}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>

            <View style={{ paddingBottom: 20 }}>
              <Text style={styles.textStyling}>Zipcode</Text>
              <View style={styles.footerContainer}>
                <Text style={styles.info}> {users.zipCode}</Text>
                <Text style={styles.textStyling}>Edit</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.password}
              onPress={() => navigate("ChangePassword")}
            >
              <View style={styles.passwordContainer}>
                <Icon
                  name="lock"
                  type="material"
                  reverseColor={Colors.second}
                  size={20}
                />

                <Text style={styles.textPassword}>Change Password</Text>
              </View>

              <Icon
                name="arrow-right"
                type="font-awesome"
                reverseColor={Colors.second}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Settings;
