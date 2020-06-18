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
    alignItems:'center',
  
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
    paddingLeft:RFValue(20),
    paddingTop:RFValue(20),
  },
  cards: {
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    width:251,height:80,
    justifyContent:'center'
  },
  cardView: {
    paddingVertical: RFValue(20),
    flexDirection: "row",
  },
  modalView:{
    //alignSelf: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    height: '30%',


  },
  title: {
    fontSize: 16,
    fontFamily:'Poppins-Medium',
    fontWeight:'500'

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
   
    paddingVertical:RFValue(20),
   
   

  },
  gradient: {
    width: 150,
    height: 136,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: RFValue(20),
    marginTop: 10,
    marginBottom:10,
    marginRight:20,
   

  },
 
  number: {
    color: "white",
    fontSize: 50,
    fontWeight: "700",
  },
});

export default styles;
