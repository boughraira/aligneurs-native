import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from "react-native";
import styles from "../style/AddPatientsStyle";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import CheckBox from "@react-native-community/checkbox";
import DatePicker from 'react-native-datepicker'


const AddPatients = ({ navigation: { goBack } }) => {
  const [isSelected, setSelection] = useState(true);
  const [isSelect, setSelect] = useState(false);
  const [date,setDate]=useState(new Date())
  const [isDate,setIsDate]=useState(false)
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

        <Text style={styles.titleHeader}>Add new patient</Text>
      </View> 
      <ScrollView>
      <View style={styles.uploadImage}>
        <View style={styles.circleCard}>
          <Image source={require('../Photos/user.png')}/>
         
        </View>
        <View style={styles.titles}>
          <Icon
            name="upload"
            type="font-awesome"
            reverseColor={Colors.second}
            size={25}
          />
          <Text style={styles.textStyle}>Upload photo</Text>
        </View>
      </View>
     
        <View style={styles.inputsButtons}>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="First name" placeholderTextColor="#7a7a7a" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Last name" placeholderTextColor="#7a7a7a" />
            </Card>
          </View>
          <View style={styles.buttonRadio}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={isSelected}
                onValueChange={() =>
                  isSelected ? setSelection(false) : setSelection(true)
                }
              />
              <Text>Male</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={isSelect}
                onValueChange={() =>
                  isSelect ? setSelect(false) : setSelect(true)
                }
              />
              <Text>Female</Text>
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
            <DatePicker
        style={{width: 300}}
        //date={date}
        mode="date"
        placeholder={isDate ? date :"Date of birth"}
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2025-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right:0,
            top: 4,
            marginRight: 0
          },
          dateInput: {
           marginRight:220,
            borderWidth:0
          },
          placeholderText:{
            color:'#7a7a7a'
          }
          
        }}
        onDateChange={(date) => {setDate(date);setIsDate(true)}}
        
      />
              
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Email" placeholderTextColor="#7a7a7a" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.cards}>
              <TextInput placeholder="Phone number" placeholderTextColor="#7a7a7a" />
            </Card>
          </View>
          <View style={styles.cardsContainer}>
            <Card style={styles.button}>
              <Text style={styles.textButton}>Add new patient</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddPatients;
