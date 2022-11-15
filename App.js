/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import 'react-native-gesture-handler';
 import {
   StyleSheet,
   View,
 } from 'react-native';
 
 import Router from './routs/routs';

 const App= ()  => {
  
   return (
     <View style={styles.sectionContainer}>
        <Router/>  
    </View> 
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     flex:1,
     backgroundColor:'#f5f9f8',
     
   },
 
 });
 
 export default App;
 