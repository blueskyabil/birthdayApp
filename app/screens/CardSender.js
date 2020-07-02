import React from 'react';
import { View, Image,Text } from 'react-native';
import CardImages from '../components/CardImages';
import { Card } from 'react-native-paper';


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
          
            <Card>
              <Card.Cover source={this.state.data} />
              
          </Card>
          
          
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

