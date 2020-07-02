import React, { Component } from 'react'
import { Text, View, TouchableOpacity,FlatList } from 'react-native'
import CardImages from '../components/CardImages'
import imageData from "../service/imageData"
import styles from "../components/CardImages/styles"
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import CardSender from './CardSender'




export default class CardPage extends Component {
    state = {
        data:{},
        
    }

    renderItem = ({item})=>{
        // console.log(item)
        return (
           <TouchableOpacity onPress={()=>this.PressImage({img:item.img})} >
           
                
                    
                    {/* <CardImages 
                        source={item.img}
                        resizeMode="contain"
                    /> */}
                
                    <Card
                        title='Birthday Cards'
                        image={item.img}>
                        <Text style={{marginBottom: 10}}>
                            Share Heart warming gifts and cards with your loved ones
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Preview' 
                            onPress={()=>this.props.navigation.navigate("CardSender",{img:item.img})}
                        />
                    </Card>
                
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
                            horizontal={false}
                        />
                </View>
                {/* <View >

                    <FlatList
                            data = {imageData}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                            ItemSeparatorComponent={this.seperator}
                            horizontal={true}
                        />
                </View>                 */}
            </View>
        )
    }
}
