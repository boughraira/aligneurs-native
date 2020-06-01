import React from "react";
import { Text, View, TouchableOpacity, StyleSheet,TextInput } from "react-native";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Conversations from "../data/ConversationData";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";



const Chat = ({ navigation: { goBack } }) => {
  return (
    <View style={{ flex: 1 }}>
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

          <Text style={styles.titleHeader}>Chat with lab asist.</Text>
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
                <Text style={{ color: "red" ,fontSize:18}}>Delete this chat</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.text}>
        <Text style={{ color: "#555555", fontSize: 15, lineHeight: 22 }}>
          You are now chating with{" "}
          <Text style={{ fontWeight: "700" }}>{Conversations[0].name}</Text>{" "}
          regarding.{"\n"}
          patient{" "}
          <Text style={{ fontWeight: "700" }}>{Conversations[1].name}</Text>
        </Text>
      </View>
      <View style={styles.typingContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write here ..."
            required
            autoCapitalize="none"
            initialValue=""
          />
        </View>
        <View style={{flexDirection:'row',paddingHorizontal:20,}}>
            <View style={{paddingHorizontal:10}}>
                   <Icon
            name="paperclip"
            type="font-awesome"
            color={Colors.primary}
            size={30}
          />
            </View>
            
            <View style={{paddingHorizontal:20}}>
        <Icon
            name="send"
            type="MaterialCommunityIcons"
            color="#555555"
            size={30}
          />
          </View>
        </View>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
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
  typingContainer:{
    paddingHorizontal: 30,
    alignItems: 'center',
    //paddingVertical: 120,
    flexDirection:'row',
    justifyContent:'center',
    flex:1,
    position:'absolute',
    bottom:0,
    paddingVertical:30
  
    
  },
  inputContainer:{
      borderWidth:1,
      borderColor:Colors.second,
      backgroundColor:'white',
      width:230,
      height:50,
      borderRadius:5,
      paddingHorizontal:10
  }

});

export default Chat;
