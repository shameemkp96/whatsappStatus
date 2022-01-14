import { Component } from 'react'
import React from 'react'
import{
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native'
//

export default class Images extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const { imagePath } = this.props.route.params;

        return(
            <View style={styles.container}>
                <ImageBackground source={imagePath}
                style={{height:'100%',
                width:'100%'}}></ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'violet'
    },
    searchText:{
        fontSize:24,
        fontWeight:"bold",
        color:'#fff',
    }
})