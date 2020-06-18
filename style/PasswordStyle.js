import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(30),
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  titleHeader: {
    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily: "Poppins-SemiBold",
  },
  inputsButtons: {
    flexDirection: "column",
    paddingVertical: RFValue(20),
    //paddingHorizontal: RFValue(0),
  },
  cards: {
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    height: 65,
  
    width: 315,
    alignSelf:"center",
    justifyContent:'center',
   // alignItems:'center'
  },
  cardsContainer: {
    paddingVertical: RFValue(10),
   
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    width: 315,
    backgroundColor: Colors.primary,
    alignSelf:"center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity:  0.4,
    shadowRadius: 4,
    elevation: 20,

  },
  textButton: {
    color: "white",
    fontSize: 16,
    fontFamily:'Poppins-SemiBold',
    fontWeight:'600'
  },
});

export default styles;
