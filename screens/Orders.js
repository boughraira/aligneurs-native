import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Picker,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "../style/OrdersStyle";
import Colors from "../constants/Colors";
import orders from "../data/OrdersData";
import Card from "../UI/Card";



const Orders = ({ navigation: { navigate } })  => {
  const [selectedValue, setSelectedValue] = useState("Recently Finished");
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
  
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Finished orders</Text>
            <View style={styles.icons}>
            <TouchableOpacity  onPress={() => navigate("Notifications")}>
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
              style={{ height: 20, width: 190, fontSize: 15 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item
                label="Recently Finished"
                value="Recently Finished"
              />
            </Picker>
          </View>

          <View style={styles.orders}>
            <FlatList
              data={orders}
              renderItem={({ item }) => (

  
                <View style={styles.cardsContainer}>
                    <TouchableOpacity onPress={() => navigate("ProfileScreen")}>

                          <Card style={styles.cards}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.textStyle}>ID #{item.id}</Text>
                      <Text style={styles.textStyle}>finished on {item.date}</Text>
                    </View>
                    <View style={styles.footerCard}>
                      <Text style={styles.textName}>{item.name}</Text>
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

export default Orders;
