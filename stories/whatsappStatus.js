import React,{Component} from "react";
import ImageViewer from "react-native-image-zoom-viewer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import  Icon  from "react-native-vector-icons/AntDesign";
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Animated,
    SafeAreaView,
    ScrollView

} from 'react-native'
const content = [
    {
        id:1,
        title:'Shakeeb',
        image: require('../src/nature1.jpg'),
        status:'unseen',
        time:'9:30',
        day:'yesterday'
    },
    {
        id:2,
        title:'Shameem',
        image: require('../src/nature2.jpg'),
        status:'unseen',
        time:'7:30',
        day:'yesterday'
        
    },
    {
        id:3,
        title:'Robin',
        image: require('../src/car1.jpeg'),
        status:'unseen',
        time:'3:10',
        day:'yesterday'
    },
    {
        id:4,
        title:'Ashik',
        image: require('../src/car2.jpeg'),
        status:'unseen',
        time:'9:33',
        day:'yesterday'
    },
    {
        id:5,
        title:'Ismail',
        image: require('../src/it1.jpg'),
        status:'unseen',
        time:'5:52',
        day:'yesterday'
    },
    {
        id:7,
        title:'Shakeeb',
        image: require('../src/it2.jpg.webp'),
        status:'unseen',
        time:'12:30',
        day:'yesterday'
    }

    
]

 export default class whatsapp extends Component{
     render(){


        const renderItem = ({ item }) => (

            <View style={{height:120, width:'170%', marginTop:20, borderRadius:5, backgroundColor:'black', marginLeft:20}}>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Images', {imagePath: item.image})}>
                 <Image style={{height:80, width:60, position:'absolute', right:320, marginTop:20, borderRadius:40}} source={item.image}></Image> 
                 
            </TouchableHighlight>
            <TouchableHighlight style={{position:'absolute', top:5, left:10}}>
                <Button title='view' color='green'
            onPress={()=> this.props.navigation.navigate('Images', {imagePath: item.image})}></Button>
            </TouchableHighlight>
            
            <Text style={{fontSize:35, color:'white', position:'absolute', left:20, top:30, paddingLeft:-30}} >{item.title}</Text>
            <Text style={{position:'absolute', color:'#fff', top:80, left:20}}>{item.time}</Text>
            <Text style={{position:'absolute', color:'#fff', top:95, left:20}}>{item.day}</Text>

            
            
            

            </View>
            
         )

         return(
            
        //   <SafeAreaView>
            //   <ScrollView>
             <View style={{height:'100%', width:'100%', backgroundColor:'#fff'}}>
                 
                 <View style={{height:70, width:399, backgroundColor:'green'}}>
                 
                     <Text style={{fontSize:24, fontWeight:'bold', color:'#fff', marginLeft:100, marginTop:1}}>Demo - Status</Text>
                     <TouchableHighlight onPress={()=> this.props.navigation.navigate('Images')}>
                     <Image style={{height:1500, width:520, position:'absolute', marginLeft:120}}></Image>
                     </TouchableHighlight>
                 </View>

                 
                 
                
                 <FlatList
                 data={content}
                 renderItem={renderItem}>
                 </FlatList>
                 
                

            
                
               
             </View>
            
             
             


         )
     }
 }

 const styles = StyleSheet.create({

 })