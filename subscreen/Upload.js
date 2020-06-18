import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import ImprintData from "../data/ImprintData";
import { RFValue } from "react-native-responsive-fontsize";


const Upload =({ navigation })  => {
 
  return (
    
 
    <View style={styles.cards}>
      <FlatList
        data={ImprintData}
        renderItem={({ item }) => (
          <View style={styles.cardsContainer}>
              <TouchableOpacity onPress={() =>navigation.navigate('PhotographsSub')} activeOpacity={0.8}>

              
            <Card style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                  <Image source={item.image} style={styles.image} />
                
                <Text style={{  fontSize: 17, paddingHorizontal:20, fontFamily:'Poppins-SemiBold' }}>
                  {item.name}
                </Text>
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
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
 
  );
};

const styles = StyleSheet.create({
 

  cards: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(5),
  },
  card: {
    paddingHorizontal: RFValue(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    height: 71,
    alignSelf:"center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  cardsContainer: {
    paddingVertical: RFValue(10),
  },
});



export default Upload;