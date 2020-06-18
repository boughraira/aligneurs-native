import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Card from "../UI/Card";
import { RFValue } from "react-native-responsive-fontsize";
import Upload from "../subscreen/Upload";
import Post from "../subscreen/Post";
import Colors from "../constants/Colors";

const Imprint = (props) => {
  const [visiblePost, setVisiblePost] = useState(false);
  const [visibleUpload, setVisibleUpload] = useState(false);

  const showPost = () => {
    setVisiblePost(true);
    setVisibleUpload(false);
  };

  const showUpload = () => {
    setVisiblePost(false);
    setVisibleUpload(true);
  };

  

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cards}>
        <TouchableOpacity onPress={showPost} activeOpacity={0.8}>
          <Card
            style={styles.card}
            border={{
              borderColor: visiblePost ? Colors.primary : null,
              borderWidth: visiblePost ? 2 : 0,
            }}
          >
            <Image
              style={styles.image}
              source={require("../Photos/post.png")}
            />

            <Text
              style={{
                fontSize: 16,
                color: "#575757",
                fontFamily: "Poppins-Medium",
                fontWeight: "600",
                paddingVertical: 10,
              }}
            >
              By post
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={showUpload} activeOpacity={0.8}>
          <Card style={styles.card}
           border={{
            borderColor: visibleUpload ? Colors.primary : null,
            borderWidth: visibleUpload ? 2 : 0,
          }}
          >
            <Image
              styles={styles.image}
              source={require("../Photos/upload.png")}
            />
            <Text
              style={{
                fontSize: 16,
                color: "#575757",
                fontFamily: "Poppins-Medium",
                fontWeight: "600",
                paddingVertical: 10,
              }}
            >
              Upload STL online
            </Text>
          </Card>
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        {visiblePost ? <Post {...props}/> : null || visibleUpload ? <Upload {...props}/> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: 126,
    width: 149,
    borderRadius: 10,
    alignSelf: "center",
    //borderColor:visiblePost ? Colors.primary : null || visibleUpload? Colors.primary : null,
    //borderWidth:visiblePost ? 2 : 0 || visibleUpload? 2 : 0,
  },
  image: {
    width: 51,
    height: 51,
  },
});

export default Imprint;
