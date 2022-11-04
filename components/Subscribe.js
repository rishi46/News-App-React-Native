import React from "react";
import {Text, View, StyleSheet,TextInput,TouchableOpacity} from 'react-native'

export default function Subscribe(){
    return(
        <View style={style.container}>
            <Text style={{color:'#072D4B', fontSize:18,}}>Subscribe to our newsletter</Text>
            <TextInput 
                placeholder="Enter Email"
                placeholderTextColor={'#B6C4CB'}
                keyboardType={'email-address'}
            style={style.SubscribeTextInput}/>
            <TouchableOpacity style={style.subscribeBtn}>
                <Text style={style.subscribeBtnText}>Subscribe</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:15,
        marginTop:45,
        backgroundColor:'#FFFFFF',
        width:380,
        height:190,
        padding:15,
        borderRadius:6,
        elevation:3,
    },
    SubscribeTextInput:{
        backgroundColor:'#f5f9f8',
        marginTop:10,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderRightWidth:1,
        borderRadius:3,
        borderColor:'#B6C4CB',
        paddingHorizontal: 15

    },
    subscribeBtn:{
        
        marginTop:15,
        padding:15,
        borderRadius:5,
        backgroundColor:'#E37627',
        alignItems:'center'

    },
    subscribeBtnText:{
        color:'#072D4B',
        fontWeight:'bold'

    }

})