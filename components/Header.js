import React from "react";
import {Text, View, StyleSheet} from 'react-native'

export default function Header(){

    return(
        <View style={style.container}>
            <View>
                <Text style={style.header}>Top News for you</Text>
            </View>
            <View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        // backgroundColor:'#f5f9f8'
    },
    header:{
        color:'#072D4B',
        fontWeight:'bold',
        fontSize:25,
        marginTop:30,
        paddingLeft:13,
        paddingBottom:25,
        


    }
})