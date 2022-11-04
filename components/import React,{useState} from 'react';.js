// import React,{useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   Alert,
//   SafeAreaView 
// } from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// const windowWidth = Dimensions.get('window').width;


// export default function LoginScreen({navigation}) {

//   const [name,setName]= useState('')
//     const setData =()=>{
//         if(name.length == 0){
//            Alert.alert('Warning!',' Please write your Email ')
//         }else{
//             // console.log(name);          
//             setName("");
//             navigation.navigate('HomeScreen')
//         }
//     }
//     return (
      
//       <View style={style.container}>
  
//         <View style={style.loginCard}>
//             <Text style={style.header}>Log In</Text>
//             <View style={style.textBoxContainer}>
//                 <TextInput
//                     placeholder="UserName"
//                     placeholderTextColor="#BEBDC0"
//                     style={style.textInputBox}
//                     keyboardType={'default'}
//                     onChange={(value)=>setName(value)}
//                 />
//                 <TextInput
//                     placeholder="Password"
//                     placeholderTextColor="#BEBDC0"
//                     returnKeyType="go"
//                     secureTextEntry
//                     autoCorrect={false}
//                     style={style.textInputBox}
//                 />
//             </View>
//             <View>
//                 <TouchableOpacity style={style.logInButton} onPress={setData}>
//                     <Text style={style.btnText}>Login</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{marginTop:50,flex:1,flexDirection:'row'}}>
//                 <Text style={{color:'black'}}>
//                     Dont have Account ?</Text>
//                     <TouchableOpacity >
//                         <Text style={{color:'#E37627',fontSize:15,fontWeight:'600'}}> Register</Text>
//                     </TouchableOpacity>
                
//             </View>
//         </View>
//       </View>
//     );
//   }
  

// const style = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#f5f9f8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginCard:{
//     alignItems:'center',
//     justifyContent:'center',
//     marginHorizontal:15,
//     backgroundColor:'#FFFFFF',
//     width:380,
//     height:430,
//     paddingHorizontal:15,
//     borderRadius:6,
//     elevation:3,
//   },
//   header:{
//       color:'#323232',
//       fontFamily:'Arial',
//       fontSize:40,
//       fontWeight:'bold',
//       marginBottom:15,
//       marginTop:20

//   },

//   textInputBox:{
//         marginTop:20,
//         backgroundColor:'#f5f9f8',
//         padding:15,
//         width:windowWidth-70,
//         fontSize:20,
//         color:'#323232',
//         borderRadius:10,
//   },

//   logInButton:{
//     marginTop:25,
//     backgroundColor:'#E37627',
//     paddingTop:10,
//     paddingBottom:10,
//     paddingLeft:50,
//     paddingRight:50,
//     borderRadius:50, 
//     justifyContent: 'center', 
//     alignItems: 'center'
//   },
//   btnText:{
//     color:'white',
//     fontSize:20,
//     fontWeight:'bold',
//     marginTop:2,
//   },


// });






// NewsCard



// import axios from "axios";
// import React,{useEffect,useState} from "react";
// import {Text, View, Image, StyleSheet,TouchableOpacity,FlatList,Linking} from 'react-native'
// import response from '../smaple.json'

// const NewsCatagory=[

//     {
//         "Business Articles":"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da67bbe761614dc389e9061fd014ac83"
//     },
//     {
//         'TechCrunch':'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da67bbe761614dc389e9061fd014ac83'
//     },
//     {
//         'Wall Street':'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=da67bbe761614dc389e9061fd014ac83'
//     },
//     {
//         'Apple Articles':'https://newsapi.org/v2/everything?q=apple&from=2022-10-14&to=2022-10-14&sortBy=popularity&apiKey=da67bbe761614dc389e9061fd014ac83'
//     },
// ]

// export default function NewsCard(props){
//     // console.log("NewsCatagory",NewsCatagory)
//     const [data, setData]= useState([])
//     const [getItem, setItem]=useState('');
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         const getNewsData=async()=>{
//             let urlData=NewsCatagory.map((items)=>items)

//             await axios.get(urlData[0]['Business Articles'])
//             .then(function (response) { 
//                 // console.log(showMore);
//                 setData((response.data.articles).slice(0,4));
//                 // console.log(response.data.articles);
//             }) 
//             .catch(function (error) {
//                 console.log("News card error",error)
//             })
//             // setData(response.articles)
//         }
//         getNewsData();
//         // setData(response.articles)

//         },[])

//         // const getShowMore = async() => {
//         //     // let item=data.map((item)=>item)

//         //     // url=item[keys]
//         //     setShowMore(!showMore);
//         //     await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da67bbe761614dc389e9061fd014ac83")
//         //     .then(function (response) {
//         //         if(showMore === false){
//         //             setData((response.data.articles).slice(0,4));
//         //         }else{
//         //             setData((response.data.articles).slice(0,10));
//         //         }
//         //     }) 
//         //     .catch(function (error) {
//         //         console.log("News card error",error)
//         //     })
           
 
//         // }

//         const changeCategory = async(item,keys) => {
//            url=item[keys]

//             await axios.get(url)
//             .then(function (response) {
//                 setData((response.data.articles).slice(0,10));
//                 // console.log(response.data.articles);
//             }) 
//             .catch(function (error) {
//                 console.log("News card error",error)
//             })
//         }
        
//         function List({item}){
//             return(
//                 <TouchableOpacity onPress={()=>changeCategory(item,Object.keys(item)[0])}>
//                     <Text style={style.listItem}>{Object.keys(item)}</Text>
//                 </TouchableOpacity>
          
//             );
    
//         }

//         // function KeyExtractor(data){
//         //     return(
//         //     data.map((item)=>item.urlToImage)
//         //     )
//         // }
//         function description(item){
//             return(item.description!==null?  item.description.slice(0,100)+'...':'No Description')
//         }

//         function imageError(e){
//             return(e && 'Image Not Found')
//         }


//     return ( 
        
//         <>
//             <FlatList 
//                 data={NewsCatagory}
//                 // keyExtractor={KeyExtractor(data)}
//                 renderItem={List}
//                 horizontal
            
//             />
//         {
//             data.map((item) => (
//                 <TouchableOpacity style={style.cardStyle} onPress={()=>Linking.openURL(`${item.url}`)}>
//                 <View style={style.upCard}>
//                     <View style={{flex:0.6,flexDirection:'column'}}>
//                         <Text style={style.cardHeader}>{item.title}</Text>  
//                         <Text style={style.cardDesc}>{description(item)}</Text>
//                     </View>
//                         <Image onError={(error)=>imageError(error)} source={{uri:`${item.urlToImage}`}} style={style.cardImageStyle}/>
//                 </View>
//                 <View style={style.lowerCard}>
//                     <Text style={style.lowerCardText}>{item.author}</Text>
//                     <Image resizeMethod="auto" style={style.circleIcon} source={require('../assets/circle.png')}/>
//                     <Text style={style.lowerCardText}>7 hours ago</Text>
//                     <Image resizeMethod="auto" style={style.lowerCardIcon} source={require('../assets/pocket.png')}/>
//                 </View>
//                 </TouchableOpacity>

//             ))

//         }

           
//                 <TouchableOpacity style={style.btncontainer} onPress={() => getShowMore()}>
//                     <Text style={style.btnText}> Show More </Text>
//                  </TouchableOpacity>

  
//         </>
//     )   

// }
// const style=StyleSheet.create({
//     listItem:{
//         color:'#072D4B',
//         marginHorizontal:8,
//         marginTop:8,
//         marginBottom:20,
//         backgroundColor:'#FFFFFF',
//         paddingVertical:13,
//         paddingHorizontal:20,
//         borderRadius:30
//     },
//     cardStyle:{
//         margin:15,
//         backgroundColor:'#FFFFFF',
//         width:380,
//         height:280,
//         padding:15,
//         borderRadius:6,
//         elevation:3,

//     },
//     upCard:{
//         flex:1,
//         flexDirection:'row'
//     },

//     cardHeader:{

//         fontSize:18,
//         fontWeight:'bold',
//         color:'#072D4B'
//     },
//     cardDesc:{
//         flex:1,
        
//         color:'#072D4B'
//     },
//     cardImageStyle:{
//         flex:0.4,
//         width:170,
//         height:130,
//         resizeMode:'center',
//         alignItems:'center',
//         justifyContent:"center"

//     },

//     lowerCard:{
//         flex:0.2,
//         flexDirection:'row',
//     },
//     lowerCardText:{
//         flex:1,
//         color:'#BBC5CD',
//         marginTop:5,
//         flexWrap:'wrap'

//     },
//     circleIcon:{
//         width:1,
//         height:1,
//         borderRadius:100,
//         marginTop:20,
//         marginLeft:20,
//         marginRight:20

//     },
//     lowerCardIcon:{
  
//         width: 25,
//         height: 25,
//         marginTop:5,
        
 
//     },btncontainer:{
//         alignItems:'center',
//         marginTop:45,
//     },
//     btnText:{
//         color:'#BBC5CD',
//         borderWidth:1,
//         borderColor:'#B9C6CC',
//         borderRadius:1,
//         paddingHorizontal:45,
//         paddingVertical:10,           
//     }

// })