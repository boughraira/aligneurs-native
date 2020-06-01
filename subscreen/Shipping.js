import React from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";


const Shipping = ({ navigation: { goBack } }) => {
  return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text>
     Shipping
       </Text>
   </View>
  );
};

export default Shipping;