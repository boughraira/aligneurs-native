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


const Post = ({ navigation: { goBack } }) => {
  return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <Text>
     post
       </Text>
   </View>
  );
};

export default Post;