import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import SelectMultiple from 'react-native-select-multiple'


const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  )
}


const Prescription = ({ navigation: { goBack } }) => {

const Arcade=[
{label:'Both',value:'both'},
{label:'Maximiliaire',value:'maximiliaire'},
{label:'Madibule',value:'madibule'}

]
const Reason=[
  {label:'Dimensions (upper arch)',value:'1'},
  {label:'Anterior cross joint',value:'2'},
  {label:'Gap',value:'3'},
  {label:'Spacing (uper arch)',value:'4'},
  {label:'Dimensions (lower arch)',value:'5'},
  {label:'Width of smile / Width of arch',value:'6'},
  {label:'Spacing (lower arch)',value:'7'}
]

const [arcade,setArcade]=useState([])
const [reason,setReason]=useState([])

const onSelectionChangeArcade=(selectedArcade)=>{
  setArcade(selectedArcade)
}

const onSelectionChangeReason=(selectedReason)=>{
  setReason(selectedReason)
}


  return (
    <View style={styles.screen}>
      <View style={styles.instru1}>
        <View style={styles.title}>
          <Text style={{fontSize:15,fontFamily:'Poppins-SemiBold',color:'#232323',fontWeight:'500'}}>1. Arcade (s) to be treated</Text>
        </View>
        <View>
       
        <SelectMultiple
          items={Arcade}
          renderLabel={renderLabel}
          selectedItems={arcade}
          onSelectionsChange={onSelectionChangeArcade} 
          rowStyle={{backgroundColor:'transparent',borderBottomColor:'transparent',paddingVertical:5,paddingHorizontal:5}}
          checkboxStyle={{width: 20,
            height: 20,
            borderRadius: 20 / 2,}} 
           // style={{flexDirection:'column'}}
          
         
          />
      
       
        </View>
      </View>
      <View style={styles.instru2}>
      <View style={styles.title}>
          <Text style={{fontSize:15,fontFamily:'Poppins-SemiBold',color:'#232323',fontWeight:'500'}}>2. Reason for Consultation</Text>
        </View>
        <View >
       
       <SelectMultiple
         items={Reason}
         renderLabel={renderLabel}
         selectedItems={reason}
         onSelectionsChange={onSelectionChangeReason} 
         rowStyle={{backgroundColor:'transparent',borderBottomColor:'transparent',paddingVertical:5,paddingHorizontal:5}}
         checkboxStyle={{width: 20,
           height: 20,
           borderRadius: 20 / 2,}}
          // style={{flexDirection:'column'}}
        
         />
     
      
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
