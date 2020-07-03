import React from 'react';
import { View, Image,Text } from 'react-native';
import CardImages from '../components/CardImages';
import MyComponent from '../components/ActivityIndicator';
import styles from "../components/styles/index"




class CardSender extends React.Component {
    state={
      data:false
    }
    componentDidMount(){
      this.setState({
          data:this.props.route.params.img
      })
  }
  
    render() {
      if (this.state.data ) {
        return (
          <View style={styles.imgContainer}>
            <View style={styles.imageCont}>
              <View style={{backgroundColor:"red"}}>
                <Image 
                source={this.state.data}
                resizeMode="contain"
                style={styles.image}
                />
                
              </View>
             
            </View>


          </View>
      
          
          
        )
      } 
      return(
        <View>
          <Text>Loading</Text> 
        </View>
      )
      
    }
}

export default CardSender

