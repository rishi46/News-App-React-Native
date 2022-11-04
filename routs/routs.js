import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { enableScreens } from 'react-native-screens';
enableScreens();
const Stack = createStackNavigator();


export default function Router(props){  


  const [navigate,setNavigation]=useState('')

  return(
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{headerShown:false}}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/> 
            </Stack.Navigator>
          </NavigationContainer>
  )}

    

    //reset stack with home screen navigation screen

    //splash screen