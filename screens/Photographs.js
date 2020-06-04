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
import PhotographsData from "../data/PhotographsData";
import { RFValue } from "react-native-responsive-fontsize";


const Photographs = ({ navigation: { navigate, goBack } }) => {
  return (
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

        <Text style={styles.titleHeader}>Photographs</Text>
      </View>
      <View style={styles.cards}>
        <FlatList
          data={PhotographsData}
          renderItem={({ item }) => (
            <View style={styles.cardsContainer}>
                <TouchableOpacity onPress={() => navigate('PhotographsSub')}>

                
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
    </View>
  );
};
const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: {
    flexDirection: "row",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: RFValue(20),
    fontFamily:'Poppins-SemiBold'
  },
  cards: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
  },
  card: {
    paddingHorizontal: RFValue(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 175 * 2,
    height: 90,
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

export default Photographs;
