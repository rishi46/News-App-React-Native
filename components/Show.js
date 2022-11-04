import React from "react";
import {Text,TouchableOpacity,StyleSheet} from 'react-native'

export default function Showbtn(){
    return(
        <TouchableOpacity style={style.btncontainer}>
            <Text style={style.btnText}> Show More </Text>
        </TouchableOpacity>
    );
}

const style= StyleSheet.create({
    btncontainer:{
        alignItems:'center',
        marginTop:45,
    },
    btnText:{
        color:'#BBC5CD',
        borderWidth:1,
        borderColor:'#B9C6CC',
        borderRadius:1,
        paddingHorizontal:45,
        paddingVertical:10,           
    }

})