import axios from "axios";
import React,{useEffect,useState} from "react";
import {Text, View, Image, StyleSheet,TouchableOpacity,FlatList,Linking,SafeAreaView,ActivityIndicator,Alert} from 'react-native'


const NewsCatagory=[

    {
        "Business Articles":"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da67bbe761614dc389e9061fd014ac83"
    },
    {
        'TechCrunch':'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=da67bbe761614dc389e9061fd014ac83'
    },
    {
        'Wall Street':'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=da67bbe761614dc389e9061fd014ac83'
    },
    {
        'Apple Articles':'https://newsapi.org/v2/everything?q=apple&from=2022-10-14&to=2022-10-14&sortBy=popularity&apiKey=da67bbe761614dc389e9061fd014ac83'
    },
]

export default function NewsCard(){
const [data, setData]= useState([])
const [showMore, setShowMore] = useState(false);
const [loading,setLoading]= useState(false)
const [btnId,setbtnId] = useState(0)
    useEffect(() => {
        const getNewsData=async()=>{
            setLoading(true)
            let urlData=NewsCatagory.map((items)=>items)
            await axios.get(urlData[0]['Business Articles'])
            
            .then(function (response) { 
                // console.log(showMore);
                setData((response.data.articles));
                // console.log(response.data.articles);
            }) 
            .catch(function (error) {
                console.log("News card error",error)
                Alert.alert('Warning!',' Some thing went wrong')
            })
            setLoading(false)
            // setData(response.articles)
        }
        getNewsData();
        // setData(response.articles)

        },[])

        const changeCategory = async(item,keys) => {
           url=item[keys]
            setLoading(true)
            await axios.get(url)
            
            .then(function (response) {
                setData((response.data.articles));
                // console.log(response.data.articles);
            }) 
            .catch(function (error) {
                console.log("News card error",error)
                setLoading(false)
                Alert.alert('Warning!',' Some thing went wrong')
            })
            setLoading(false)
        }
        
        function List({item,index}){
            // console.log('index of item',item)
            return(
                <TouchableOpacity onPress={()=>{changeCategory(item,Object.keys(item)[0]),  setbtnId(index)}}>
                    <Text style={btnId===index ? style.onClicklistItem:style.listItem}>{Object.keys(item)}</Text>
                </TouchableOpacity>
          
            );
    
        }

        function description(item){
            return(item.description!==null?  item.description.slice(0,100)+'...':'No Description')
        }

    return ( 
           
        <SafeAreaView>
 
            <FlatList 
                data={NewsCatagory}
                // keyExtractor={KeyExtractor(data)}
                renderItem={List}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            { loading?<ActivityIndicator size="large" color="#00ff00" />:
                <FlatList
                    data={!showMore? data.slice(0,4):data.slice(0,30)}
                    renderItem={({item})=>
    
                    <TouchableOpacity style={style.cardStyle} onPress={()=>Linking.openURL(`${item.url}`)}>
                        <View style={style.upCard}>
                            <View style={{flex:0.6,flexDirection:'column'}}>
                                <Text style={style.cardHeader}>{item.title}</Text>  
                                <Text style={style.cardDesc}>{description(item)}</Text>
                            </View>
                            {
                                item.urlToImage==null?<Text style={style.imageOnErrorText}>Image not found</Text> : <Image source={{uri:`${item.urlToImage}`}} style={style.cardImageStyle}/>
                            }
                        </View>
                        <View style={style.lowerCard}>
                            <Text style={style.lowerCardText}>{item.author}</Text>
                            <Image resizeMethod="auto" style={style.circleIcon} source={require('../assets/circle.png')}/>
                            <Text style={style.lowerCardText}>7 hours ago</Text>
                            <Image resizeMethod="auto" style={style.lowerCardIcon} source={require('../assets/pocket.png')}/>
                        </View>
                    </TouchableOpacity> 
                    }
                />
            }
                <TouchableOpacity style={style.btncontainer} onPress={() => setShowMore(!showMore)}>
                    {showMore? <Text style={style.btnText}> Show Less </Text>:<Text style={style.btnText}> Show More </Text>}
                 </TouchableOpacity>

        </SafeAreaView>
  
    )   

}
const style=StyleSheet.create({
    listItem:{
        color:'#072D4B',
        marginHorizontal:8,
        marginTop:8,
        marginBottom:20,
        backgroundColor:'#FFFFFF',
        paddingVertical:13,
        paddingHorizontal:20,
        borderRadius:30
    },
    onClicklistItem:{
        color:'#FFFFFF',
        fontSize:15,        
        marginHorizontal:8,
        marginTop:8,
        marginBottom:20,
        backgroundColor:'#E37627',
        paddingVertical:13,
        paddingHorizontal:20,
        borderRadius:30,
        
    },
    cardStyle:{
        margin:15,
        backgroundColor:'#FFFFFF',
        width:380,
        height:280,
        padding:15,
        borderRadius:6,
        elevation:3,

    },
    upCard:{
        flex:1,
        flexDirection:'row'
    },

    cardHeader:{

        fontSize:18,
        fontWeight:'bold',
        color:'#072D4B'
    },
    cardDesc:{
        flex:1,
        
        color:'#072D4B'
    },
    imageOnErrorText:{
        fontSize:12,
        fontWeight:'bold',
        color:'#072D4B',
        left:70,
        top:70

    },
    cardImageStyle:{
        flex:0.4,
        width:170,
        height:130,
        resizeMode:'center',
        alignItems:'center',
        justifyContent:"center"

    },

    lowerCard:{
        flex:0.2,
        flexDirection:'row',
    },
    lowerCardText:{
        flex:1,
        color:'#BBC5CD',
        marginTop:5,
        flexWrap:'wrap'

    },
    circleIcon:{
        width:1,
        height:1,
        borderRadius:100,
        marginTop:20,
        marginLeft:20,
        marginRight:20

    },
    lowerCardIcon:{
  
        width: 25,
        height: 25,
        marginTop:5,
        
 
    },btncontainer:{
        alignItems:'center',
        marginTop:45,
    },
    btnText:{
        color:'#BBC5CD',
        borderWidth:1,
        borderColor:'#B9C6CC',
        borderRadius:1,
        paddingHorizontal:45,
        paddingVertical:10,           
    },

})




