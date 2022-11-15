import React,{ useState } from 'react';
import {ScrollView,View,StyleSheet,SafeAreaView, } from 'react-native'
import IconHeader from '../components/iconHeader';
import Header from '../components/Header';
import NewsCard from '../components/Newscard';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Model from '../components/Model';



 export default function HomeScreen({navigation}){
 
    const [isLogOutModelVisible, setIsLogOutModelVisible] = useState(false)
 
    return(

        <SafeAreaView style={styles.sectionContainer}>

            <View >

                <ScrollView>  
                    <IconHeader setIsLogOutModelVisible={setIsLogOutModelVisible}/>
                    <Header/>
                    <NewsCard />
                    <Subscribe />
                    <Footer/>
                    {
                        isLogOutModelVisible &&
                        <Model setIsLogOutModelVisible={setIsLogOutModelVisible} navigation={navigation}/>
                    }

                </ScrollView>  

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      flex:1,
      
    },
    spinnerTextStyle: {
        color: '#FFF',
      },
  
  });