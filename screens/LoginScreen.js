import React,{useState, useEffect} from 'react';
import { StackActions } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,

} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;


export default function LoginScreen({navigation}) {

  useEffect(() => {
    AsyncStorage.getItem('Username').then((response)=>{
      
      if(response !== null){
       
        navigation.dispatch(
          StackActions.replace('HomeScreen')
      )
      }
    })
   
},[]);


  const [name,setName]= useState();
  const [password,setPassword]=useState('');
  

    const setData = async ()=>{
        if(!name){
           Alert.alert('Warning!',' Please write your UserName ')
        }else{
          if(name.length>3){
            try{
              let username = JSON.stringify(name);
              await AsyncStorage.setItem("Username",username);
              setName("");
              setPassword('')
         
            navigation.dispatch(
                StackActions.replace('HomeScreen')
            )
            }
            catch(e) {
              console.log('error in LoginScreen',e);
            }
          }else{
            Alert.alert('Warning!',' Please enter UserName more than 3 character ')
          }
                      

        }
    }
    return (
      
      <View style={style.container}>
  
        <View style={style.loginCard}>
            <Text style={style.header}>Log In</Text>
            <View style={style.textBoxContainer}>
                <TextInput  
                    placeholder="UserName"
                    placeholderTextColor="#BEBDC0"
                    style={style.textInputBox}
                    keyboardType={'default'}
                    value={name}
                    onChangeText={(value)=>setName(value)}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#BEBDC0"
                    returnKeyType="go"
                    secureTextEntry
                    autoCorrect={false}
                    style={style.textInputBox}
                    onTextInput={(password)=>setPassword(password)}
                />
            </View>
            <View>
                <TouchableOpacity style={style.logInButton} onPress={setData}>
                    <Text style={style.btnText}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
      </View>
    );
  }
  

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f5f9f8',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  loginCard:{
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    marginHorizontal:15,
    backgroundColor:'#FFFFFF',
    width:380,
    height:400,
    paddingHorizontal:15,
    borderRadius:6,
    elevation:3,
  
  },
  header:{
      color:'#323232',
      fontFamily:'Arial',
      fontSize:40,
      fontWeight:'bold',
      marginBottom:15,
      marginTop:-20

  },

  textInputBox:{
        marginTop:20,
        backgroundColor:'#f5f9f8',
        padding:15,
        width:windowWidth-70,
        fontSize:20,
        color:'#323232',
        borderRadius:10,
  },

  logInButton:{
    marginTop:25,
    backgroundColor:'#E37627',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:50,
    paddingRight:50,
    borderRadius:50, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btnText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:2,
  },


});