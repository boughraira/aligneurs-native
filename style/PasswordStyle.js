import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:30,
        borderBottomWidth: 1,
        borderBottomColor: "#dbdbdb",
        paddingBottom: 20,


    },
    titleHeader:{
        fontSize:22,
        paddingHorizontal:20,
        fontFamily:'Poppins-SemiBold'
        
    },
    inputsButtons:{
        flexDirection:'column',
        paddingVertical:20,
        paddingHorizontal:20
    },
    cards:{
        paddingVertical:20,
        paddingHorizontal:20,
        height:80,
        width:175*2
    },
    cardsContainer:{
        paddingVertical:10
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        height:80,
        width:175*2,
        backgroundColor:Colors.primary

    },
    textButton:{
        color:'white',
        fontSize:17
    }
});

export default styles;
