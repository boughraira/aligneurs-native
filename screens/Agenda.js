import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../style/AddPatientsStyle";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import Card from "../UI/Card";
import DatePicker from 'react-native-datepicker'
import { color } from "react-native-reanimated";


const Agenda = ({ navigation: { goBack } }) => {
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

      <Text style={styles.titleHeader}>Ajouter un RDV</Text>
    </View>
 
    <ScrollView>
      <View style={styles.inputsButtons}>
        <View style={styles.cardsContainer}>
          <Card style={styles.cards}>
            <TextInput placeholder="Patient" placeholderTextColor="#7a7a7a" />
          </Card>
        </View>
        <View style={styles.cardsContainer}>
          <Card style={styles.cards}>
            <TextInput placeholder="Téléphone" placeholderTextColor="#7a7a7a"  />
          </Card>
        </View>
       
        <View style={styles.cardsContainer}>
          <Card style={styles.cards}>
            <TextInput placeholder="Email" placeholderTextColor="#7a7a7a"  />
          </Card>
        </View>
        <View style={styles.cardsContainer}>
          <Card style={styles.cards}>
            <TextInput placeholder="Adresse de cabinet" placeholderTextColor="#7a7a7a"  />
          </Card>
        </View>
        <View style={styles.cardsContainer}>
          <Card style={styles.cards}>
          <DatePicker
        style={{width: 300,justifyContent:'center',alignItems:'center'}}
        //date={date}
        mode="date"
        placeholder={isDate ? date : "Date de Rendez-vous"}
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
           marginRight:160,
            borderWidth:0,
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
            <TextInput placeholder="Dentiste" placeholderTextColor="#7a7a7a"  />
          </Card>
        </View>
        <View style={styles.cardsContainer}>
          <Card style={styles.button}>
            <Text style={styles.textButton}>Ajouter un RDV</Text>
          </Card>
        </View>
      </View>
    </ScrollView>
  </View>
  );
};

export default Agenda;
