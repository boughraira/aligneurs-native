import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors'
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  icons: {
    flexDirection: "row",
    alignItems:'center',
    
    
    
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
    paddingVertical: 10,
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
  iconView:{
    width:40,
    height:40,
    borderRadius:40/2,
  
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 10,
  },
  liens: {
    padding: 20,
  },
  cards: {
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  cardView: {
    paddingVertical: RFValue(20),
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
  },
  action: {
    fontSize: 17,
    paddingHorizontal: 10,
    fontFamily:'Poppins-SemiBold'
  },
  cardContainer: {
    paddingRight: RFValue(20),
  },
  taches: {
    paddingHorizontal: RFValue(20),
  },
  tacheContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: RFValue(20),
  },
  gradient: {
    width: 170,
    height: 160,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: RFValue(10),
  },
  textPatient: {
    color: "white",
    fontSize: 20,
    fontWeight: "normal",
    
  },
  number: {
    color: "white",
    fontSize: 50,
    fontWeight: "700",
  },
});

export default styles;
