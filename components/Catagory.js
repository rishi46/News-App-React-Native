import React from "react";
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native'


const NewsCatagory=['All','Apple Articles','Tesla Article','business articles','TechCrunch', 'Wall Street']

export default function Catagory(){


    function List({item}){
        return(
            <TouchableOpacity>
                <Text style={style.listItem}>{item}</Text>
            </TouchableOpacity>
      
        );

    }


    return(
        <View style={style.container}>
            <FlatList 
                data={NewsCatagory}
                renderItem={List}
                horizontal
            
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        // backgroundColor:'#f5f9f8',

    },
    listItem:{
        color:'#072D4B',
        marginHorizontal:8,
        marginTop:8,
        marginBottom:20,
        backgroundColor:'#FFFFFF',
        paddingVertical:13,
        paddingHorizontal:20,
        borderRadius:30
    }
})