import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  screen: { flex: 1 },
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
    paddingHorizontal: RFValue(20),
    fontFamily:'Poppins-SemiBold'
   
  },
  uploadImage: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: RFValue(20),
  },
  circleCard: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 10,
  },
  titles: {
    flexDirection: "row",
    paddingTop: 20,
  },
  textStyle: {
    fontSize: 16,
    paddingHorizontal: RFValue(10),
    fontFamily:'Poppins-SemiBold',
    fontWeight:'600'
  },
  cards: {
    paddingVertical:RFValue (10),
    paddingHorizontal: RFValue(20),
    height: 70,
    width: "100%",
    alignSelf:"center",
  },
  cardsContainer: {
    paddingVertical:RFValue (10),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 175 * 2,
    backgroundColor: Colors.primary,
    alignSelf:"center",
  },
  textButton: {
    color: "white",
    fontSize: 17,
  },
  buttonRadio: {
    paddingVertical: 10,
    flexDirection:'row',
    alignItems:'center',
    
  },
  inputsButtons: {
    flexDirection: "column",
    //paddingVertical:10,
    paddingHorizontal: RFValue(20),
    alignSelf:"center",
  },
});

export default styles;
