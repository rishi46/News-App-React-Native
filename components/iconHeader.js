import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useEffect, useState} from "react";
import {Text, View, Image, StyleSheet,Dimensions,TouchableOpacity,SafeAreaView} from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default function IconHeader(props){

    const {setIsLogOutModelVisible}=props
    const [name,setname]=useState();

    useEffect(() => { 
        getData();
    },[])


    const getData = async () => {
        try {
            let username = await AsyncStorage.getItem("Username");
            let user = JSON.parse(username);
            if(user) {
                // console.log(user);
                setname(user);
            }
            else {
                setname('My Profile');
            }
        } catch (error) {
            console.log('error in IconHeader',error)
            Alert.alert('Warning!',' Some thing went wrong')
        }
  
    }

    return(
        <SafeAreaView>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex:1,flexDirection:"row"}}>
                    <Image resizeMethod="auto" style={style.menuImage} source={require('../assets/menu.png')}/>
                    <Image resizeMethod="auto" style={style.titleImage} source={require('../assets/in_step_logo.png')}/>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Image resizeMethod="auto" style={style.searchImage} source={require('../assets/search.png')}/> 
                    <Image resizeMethod="auto" style={style.profileImage} source={require('../assets/profile.png')}/>
                        <TouchableOpacity onPress={() => setIsLogOutModelVisible(true)}>
                            <Text style={style.profileText}>{name}</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        width:windowWidth,
        flex:1

    },
    menuImage:{
        width: 35,
        height: 27,
        marginVertical: 8,
        marginRight:8,
        marginLeft:13,
    },
    titleImage : {
        width: 73,
        height: 30,
        marginVertical: 8,
    
    },
    profileImage:{
        width: 19,
        height: 23,
        // marginLeft:windowWidth-240,
        marginRight:15,
    
    },
    searchImage:{
        width: 19,
        height: 23,
        // marginLeft:windowWidth-485,
        // marginTop:10,
        marginRight:15
  
    },
    profileText:{
        color:'black',
        fontWeight:'bold',
        fontSize:15,
        marginRight:8
        // position:'absolute',

    }
})

