import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Picker,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "../style/PatientsConversationsStyles";
import Colors from "../constants/Colors";
import patients from "../data/PatientsData";
import Card from "../UI/Card";

const PatientsConversations = ({ navigation: { navigate, goBack } }) => {
  const [selectedValue, setSelectedValue] = useState("Recently Added");
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon
              name="arrow-back"
              type="material"
              reverseColor={Colors.second}
              size={30}
            />
          </TouchableOpacity>

          <Text style={styles.textHeader}>Select a patient to start</Text>
        </View>
        <View style={styles.inputStyle}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Search" />
            <Icon
              name="search"
              type="font-awesome5"
              reverseColor={Colors.second}
              size={30}
              style={styles.search}
            />
          </View>
        </View>

        <View style={styles.titles}>
          <Text style={styles.textTitle}>Sort by</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 20, width: 180, fontSize: 15 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Recently Added" value="Recently Added" />
          </Picker>
        </View>

        <View style={styles.orders}>
          <FlatList
            data={patients}
            renderItem={({ item }) => (
              <View style={styles.cardsContainer}>
                <TouchableOpacity onPress={() => navigate("Chat")}>
                  <Card style={styles.cards}>
                    <View style={styles.cardHeader}>
                      
                    
                        <Text style={styles.textStyle}>ID #{item.id}</Text>
                        <Text style={styles.textStyle}>
                          added on {item.date}
                        </Text>
                      
                    </View>
                    <View style={styles.footerCard}>
                        <View style={{flexDirection:'row' ,alignItems:'center'}}>
                             <Image source={item.image} style={styles.image} />
                             <View style={{paddingHorizontal:10}}>
                                  <Text style={styles.textName}>{item.name}</Text>
                      <Text style={styles.footerText}>{item.add}</Text>  
                             </View>
                   
                        </View>
                   
                      <Icon
                        name="chevron-right"
                        type="font-awesome5"
                        reverseColor={Colors.second}
                        size={30}
                      />
                    </View>
                    
                  </Card>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PatientsConversations;
