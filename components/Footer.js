import React from "react";
import {Text, View, StyleSheet} from 'react-native'


export default function Footer(){
    return(
        <View>
            <View style={style.footerLine}></View>
            <View style={style.footerTextContainer}>
                <Text style={style.footerText}>{'\u00A9'}Rishi News,2022</Text>
                <Text style={style.footerText}>Privacy Policy</Text>
                <Text style={style.footerText}>Terms of  Service</Text>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    footerLine:{
        marginTop:80,
        borderBottomColor: '#B6C4CB',
        borderBottomWidth: 0.9,
        alignItems:'space-between',
        marginBottom:30,
        marginHorizontal:20
    },
    footerTextContainer:{
        flex:1,
        flexDirection:'row',
        marginHorizontal:15,
        marginTop:10,
        marginBottom:50
        
        
    },
    footerText:{
        flex:1,
        alignContent:'space-around',
        textAlign:'center',
        color:'#BBC5CD',
        fontSize:11,
        
    }
})