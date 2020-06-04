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
    paddingHorizontal: RFValue(20),
  },
  cards: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(20),
    height: 80,
    width: 175 * 2,
  },
  cardsContainer: {
    paddingVertical: RFValue(10),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 175 * 2,
    backgroundColor: Colors.primary,
  },
  textButton: {
    color: "white",
    fontSize: 17,
  },
});

export default styles;
