import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { RFValue } from "react-native-responsive-fontsize";


const Prescription = ({ navigation: { goBack } }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.instru1}>
        <View style={styles.title}>
          <Text style={{fontSize:15}}>1. Arcade (s) to be treated</Text>
        </View>
        <View style={styles.checkbox}>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
              
              
            />
            <Text>Both</Text>
          </View>

          <View style={{ flexDirection: "row",alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Maxilliaire</Text>
          </View>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Madibule</Text>
          </View>
        </View>
      </View>
      <View style={styles.instru2}>
      <View style={styles.title}>
          <Text style={{fontSize:15}}>2. Reason for Consultation</Text>
        </View>
        <View style={styles.checkboxs}>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
              
            />
            <Text>Dimension (upper arch)</Text>
          </View>

          <View style={{ flexDirection: "row",alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Anterior cross joint</Text>
          </View>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Gab</Text>
          </View>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Spacing (upper arch)</Text>
          </View>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Dimensions(lower arch)</Text>
          </View>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Width of smile / Width of arch</Text>
          </View>
          <View style={{ flexDirection: "row" ,alignItems:'center' }}>
            <CheckBox
              value={isSelected}
              onValueChange={() =>
                isSelected ? setSelection(false) : setSelection(true)
              }
            />
            <Text>Spacing (lower arch)</Text>
          </View>
        </View>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
  },
  instru1: {
    paddingBottom: 20,
  },
  title: {
    paddingBottom: 10,
    
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  instru2:{
    paddingVertical:RFValue(10)
  },
  checkboxs:{
    flexDirection:'column',

  }
});

export default Prescription;
