import { Component } from "react/cjs/react.production.min";
import React from "react";
import ImageZoom from "react-native-image-pan-zoom";
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Modal
    //heyy???

} from 'react-native'
const content = [
    {
        id:'1',
        title:'Shakeeb',
        image: require('../src/nature1.jpg'),
        status:'false'
    },
    {
        id:'2',
        title:'Shameem',
        image: require('../src/nature2.jpg'),
        status:'false'
    }
    
]

 export default class whatsapp extends Component{
     render(){

        const renderItem = ({ item }) => (

            <View style={{height:120, width:'170%', marginTop:20, borderRadius:5, backgroundColor:'black', marginLeft:20}}>
            {/* <Image source={item.image} style={{height:100, width:100, borderRadius:60, position:'absolute', left:210, top:10}}></Image> */}
            <TouchableHighlight onPress={()=>this.props.navigation.navigate('Images')}>
                 <Image style={{height:80, width:60, position:'absolute', right:320, marginTop:20, borderRadius:40}} source={item.image}></Image>
           
            </TouchableHighlight>
            
            <Text style={{fontSize:35, color:'white', position:'absolute', left:20, top:30, paddingLeft:-30}} >{item.title}</Text>
            {/* <Button title='view'
            onPress={()=> this.props.navigation.navigate('Images')}></Button> */}
            

            </View>
            
         )

         return(
             <View style={{height:'100%', width:'100%', backgroundColor:'#fff'}}>
                 <View style={{height:70, width:399, backgroundColor:'green'}}>
                     <Text style={{fontSize:24, fontWeight:'bold', color:'#fff', marginLeft:100, marginTop:15}}>Demo - Status</Text>
                     <TouchableHighlight onPress={()=> this.props.navigation.navigate('Images')}>
                     <Image style={{height:1500, width:520, position:'absolute', marginLeft:120}}></Image>
                     </TouchableHighlight>
                 </View>
                 <FlatList
                 data={content}
                 renderItem={renderItem}></FlatList>

                <FlatList
                 data={content}
                 renderItem={renderItem}></FlatList>
             </View>
         )
     }
 }

 const styles = StyleSheet.create({

 })