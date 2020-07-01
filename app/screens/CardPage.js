import React, { Component } from 'react'
import { Text, View, TouchableOpacity,FlatList } from 'react-native'
import CardImages from '../components/CardImages'
import imageData from "../service/imageData"
import styles from "../components/CardImages/styles"

export default class CardPage extends Component {
    state = {
        data:{}
    }

    renderItem = ({item})=>{
        // console.log(item)
        return (
           <TouchableOpacity onPress={()=>this.PressImage({img:item.tmp})} >
           

                <CardImages 
                    source={item.img}
                    resizeMode="contain"
                />
                
           </TouchableOpacity>
 

        )
    }
    PressImage = (item)=>{
        console.log(item.img)
       this.props.navigation.navigate("CardSender",{img:item.img})
        // return(
        //         (item)
        //     )
    }
    keyExtractor = ({id})=>id

    seperator = ()=>{
        return(
            <Text></Text>
        )
    }
    render() {
        return (
            <View >
                <View >

                    <FlatList
                            data = {imageData}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                            ItemSeparatorComponent={this.seperator}
                            horizontal={true}
                        />
                </View>
                <View >

                    <FlatList
                            data = {imageData}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                            ItemSeparatorComponent={this.seperator}
                            horizontal={true}
                        />
                </View>                
            </View>
        )
    }
}
