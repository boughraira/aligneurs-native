import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(30),
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },
  textHeader: {
    fontSize: 23,
    paddingVertical: RFValue(10),
    fontWeight: "100",
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
  userDetails: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(10),
  },
  headerContainer: {
    flexDirection: "column",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyling: {
    fontSize: 14,
    color: Colors.second,
    paddingBottom: 5,
  },
  info: {
    fontSize: 17,
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical:RFValue(10),
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb",
   
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPassword: {
    fontSize: 18,
    paddingHorizontal: RFValue(30),
  },
});
export default styles;
