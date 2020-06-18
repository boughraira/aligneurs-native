import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  keyboard: {
    flex: 1,
  },

  iconView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 10,
  },
  footerText: {
    color: Colors.second,
    fontSize: 15,
  },
  addIcon: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 10,
    zIndex: 1,
    position:'absolute',
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
 

  orders: { flex: 1 },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(30),
  
    paddingBottom: 20,
  },
  textHeader: {
    fontSize: 22,
    paddingHorizontal: RFValue(20),
    fontFamily:'Poppins-SemiBold'
   
  },
  badgeStyle: {
    position: "absolute",
    top: -3,
    right: -3,
    zIndex: 1,
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: Colors.primary,
  },
  badgeText: {
    paddingHorizontal: 6,
    color: "white",
  },
  inputContainer: {
    paddingHorizontal: RFValue(10),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.second,
    borderWidth: 0.2,
    width: "90%",
    marginHorizontal: RFValue(20),
  },
  input: {
    flex: 4,
  },

  titles: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(30),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 15,
  },
  cardsContainer: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
  },
  cards: {
    width: "95%",
    height:120,

    paddingHorizontal: RFValue(20),
    justifyContent: "center",
    flexDirection: "column",
    alignSelf:"center",
  },
  textStyle: {
    color: Colors.second,
    fontSize: 13,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  textName: {
    fontSize: 15,
    fontFamily:'Poppins-SemiBold'
  },
  search: {
    padding: RFValue(10),
  },
});

export default styles;