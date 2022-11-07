import React from "react";
import {Text,TouchableOpacity,View,StyleSheet,Dimensions,Modal,Image} from 'react-native'
const WIDTH=Dimensions.get('window').width
const HEIGHT=Dimensions.get('window').height

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Errorhandler(){



    return(
        <Modal
        transparent={true}
        visible={true}
        animationType="fade"
            // disabled={true}
            
        >
            <View style={style.model}>
                <View>
                    <Text style={style.text}>Some Thing Went Wrong...</Text>
                </View>
            </View>
        </Modal>
            
        )
    }

    const style=StyleSheet.create({
        container:{
            flex:1,
    
        },
        model:{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
            alignItems:'center',

        },
        text:{ 
            color:'#FFFFFF',
            fontSize:15,
            backgroundColor:'#ff0000',
            width:WIDTH,
            textAlign:'center',
            paddingVertical:13,
            marginBottom:5,
        }
    })

   