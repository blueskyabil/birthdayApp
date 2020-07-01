import React from 'react';
import { View, Image,Text } from 'react-native';
import CardImages from '../components/CardImages';


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
      console.log(this.state.data)
      if (this.state.data ) {
        return (
          <View>
            <CardImages
              source={this.state.data}
              resizeMode="contain"
            />
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