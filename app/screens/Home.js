import React from 'react'
import { View, Text, Button } from 'react-native'

class About extends React.Component {
    state={
        data:this.props.route.params.data
    }
    componentDidMount(){
        this.setState({
            data:this.props.route.params.data
        })
    }

    pressButton = ()=>{
        this.props.navigation.navigate("CardPage")
    }
    
    render(){
        // const { username } = this.props.route.params;
    // const { otherParam } = route.params;
    

        return (
            <View styles={{flex:1,justifyContent:"center",alignItems:"center",padding:20}}>
                <Text>welcome {this.state.data.username} </Text>
                <Text>BIRTHDAY CARDS</Text>
                <Button
                    title="view our collection"
                    onPress={()=>this.pressButton()}
    
                    
                />
            </View>
        )
    }
}

export default About
