import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Alert } from 'react-native'
import styles from '../MyTouchHighlight.js/styles'


export default class MyTouchHighlight extends Component {
  state ={

  }
  onPressButton() {
    this.props.onButton()
  }
    render() {

      
    
        return (
            <TouchableHighlight onPress={()=>this.onPressButton()} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.show}</Text>
          </View>
        </TouchableHighlight>
        )
    }
}
