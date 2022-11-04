import React from "react";
import {Text,TouchableOpacity,View,StyleSheet,Dimensions,Modal,Image} from 'react-native'
const WIDTH=Dimensions.get('window').width

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Model(props){
    const {setIsLogOutModelVisible,navigation}=props 

    const LogOut=async()=>{
        await AsyncStorage.clear()
            navigation.replace('LoginScreen')
            
    }


    return(
        <Modal
        transparent={true}
        visible={true}
        animationType="fade"
            // disabled={true}
            
        >
            <View style={style.model}>
                <View style={style.textView}>
                    <Text style={style.text}>Do You Want To Log Out</Text>
                    <Text style={style.descText}>If You LogOut You May Have To Enter User Name & Password Again</Text>
                    <View style={style.btnView}>
                        <TouchableOpacity
                            style={style.Btn}
                            onPress={() => setIsLogOutModelVisible(false)}
                        >
                            <Text style={[style.BtnText,{color:'blue'}]}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={ style.Btn}
                        onPress={LogOut}
                        >   
                            <Text style={[style.BtnText,{fontWeight:'bold'}]}>Log Out</Text>
                            <Image resizeMethod="auto" style={style.logoutImage} source={require('../assets/logout.png')} />
                        </TouchableOpacity>
                </View>
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
        justifyContent: 'center',
        alignItems:'center'
    },textView:{
        backgroundColor:'#FFFFFF',
        width: '90%',
        paddingTop: 20,
        padding:20,
        borderTopStartRadius: 5,
        borderTopEndRadius: 4,
        
    },
    text:{
        margin:5,
        fontSize:20,
        fontWeight:'bold',
        color:'#072D4B',

    },
    descText:{
        margin:5,
        fontSize:15,
        color:'#072D4B',

    },
    btnView:{
 
        flexDirection:'row',
        width:'100%',
        marginLeft:25
    },
    Btn:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
        alignItems:'center',
        marginTop:15
  
    },
    BtnText:{
        color:'#072D4B',
        fontSize:16
    },
    logoutImage:{
        width: 25,
        height: 23,
        // marginLeft:windowWidth-240,
        marginLeft:10
        
    }
})
