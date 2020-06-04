import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Colors from "../constants/Colors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LatestNotifications from "../data/LatestNotificationsData";
import OldNotifications from '../data/OldNotificationsData'
import { RFValue } from "react-native-responsive-fontsize";


const Notifications = ({ navigation: { goBack } }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon
              name="arrow-back"
              
              reverseColor={Colors.second}
              size={30}
            />
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

            <MenuOptions style={{height:70,alignItems:'center' ,justifyContent:'center'}}>
              <MenuOption onSelect={() => alert(`Delete`)} >
                <Text style={{ color: "red" ,fontSize:18}}>Clear all</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.newNotif}>
        <Text style={{color:"#555555"}}>Latest notifications</Text>
        <View style={styles.notif}>
          <FlatList
            data={LatestNotifications}
            renderItem={({ item }) => (
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
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold'}}>{item.title}</Text>
                    </View>
                    <Text style={{color:"#555555",lineHeight:19,paddingVertical:5}}>{item.description}</Text>
                  </View>
                </View>
                <View style={styles.timeContainer}>
                  <Text style={{color:"#555555"}}>{item.time}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.title}
          />
        </View>
        <View style={styles.oldNotif}>
        <Text style={{color:"#555555"}}>Old notifications</Text>
        <View style={styles.notif}>
          <FlatList
            data={OldNotifications}
            renderItem={({ item }) => (
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
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15, fontFamily:'Poppins-SemiBold'}}>{item.title}</Text>
                    </View>
                    <Text style={{color:"#555555",lineHeight:19,paddingVertical:5}}>{item.description}</Text>
                  </View>
                </View>
                <View style={styles.timeContainer}>
                  <Text style={{color:"#555555"}}>{item.time}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.title}
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
    fontFamily:'Poppins-SemiBold'
  },
  newNotif:{
      paddingVertical:RFValue(20),
      paddingHorizontal:RFValue(20)
  },
  notifContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingVertical:RFValue(20),
     
      borderBottomWidth: 1,
      borderBottomColor: "#dbdbdb",
  },
 
  iconsInfo:{
      flexDirection:'row',
      alignItems:'center'
  },
  infoContainer:{
      paddingHorizontal:RFValue(15)
  },
  iconContainer:{
      width:60,
      height:60,
      borderRadius:60/2,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
  },
  oldNotif:{
      paddingVertical:RFValue(20)
  }
});

export default Notifications;
