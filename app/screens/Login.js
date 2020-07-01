import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import LoginContainer from "../components/Container/logincontainer"
import MyTextInput from "../components/MyTextInput"
import MyTouchHighlight from "../components/MyTouchHighlight.js"
import { verifyPassword, verifyUsername } from '../helper'
import styles from "../components/MyTextInput/styles"
import { connect } from 'react-redux'
import { LoginAction } from '../redux/action/AuthAction'


 class Login extends Component {
    state={
        data:{},
        error:{}
    }
    // componentDidMount(){
    //     console.log(this.props.registerState);
        
    // }
    // changeText = (value)=>{
    //     this.setState(prevState=>{
    //         return{
    //             data:{
    //                 ...prevState.data,
    //                 ...value
    //             }
    //         }
    //     })
    // }
    pressButton = ()=>{
        this.props.navigation.navigate("Register",{data:this.state.data})
        
    }
    handleLogin = async()=>{

        let checkUsername = verifyUsername(this.state.data.password)
        if (checkUsername.error){
            this.setState(prevState=>{
                return{
                    error:{

                        ...prevState.error,
                        username:checkUsername.error
                    }
                }
            })
        }
        
        let checkPassword = verifyPassword(this.state.data.password)
        if (checkPassword.error){
            this.setState(prevState=>{
                return{
                    error:{
                        ...prevState.error,
                        password:checkPassword.error

                    }
                }
            })
        }
      
        if(checkUsername.error || checkPassword.error){
            return;
        }
        if(!this.state.error.username || !this.state.error.password){
            Alert.alert("Login Successful ")
            this.props.navigation.navigate("Home",{data:this.state.data})
        }
        const {username,password} = this.state
            let loginData = {username,password}
            this.props.loginProp(loginData)
            console.log(loginData)

    }
    changeInput = (values)=>{
        let keys = Object.keys(values)

        if (keys[0] == 'username'){
            if(values.username.length > 0){
                this.setState(prevState=>{
                    return{
                        error:{
                            ...prevState.error,
                            username:false
    
                        }
                    }
                })
            }
        }
        if (keys[0] == 'password'){
            if(values.password.length > 0){
                this.setState(prevState=>{
                    return{
                        error:{
                            ...prevState.error,
                            password:false
    
                        }
                    }
                })
            }
        }

        this.setState(prevState=>{
            return{
                data:{
                    ...prevState.data,
                    ...values
                }
            }
        })

    }

    render() {
        return (
            <LoginContainer style={{backgroundColor:"blue"}}>
                <View >

                <MyTextInput 
                placeholder="Username"
                keyboardType="default"
                onChangeText={(username)=>this.changeInput({username})}
                value={this.state.data.username}
                
                />
                <Text style={styles.errorText}>{this.state.error.username}</Text>
                <MyTextInput 
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(password)=>this.changeInput({password})}
                value={this.state.data.password}
            
                />
                <Text style={styles.errorText}>{this.state.error.password}</Text>
                </View>
                <MyTouchHighlight show="Login" onButton={()=>this.handleLogin()} />
                <MyTouchHighlight show="Register" onButton={()=>this.pressButton()} />
            </LoginContainer>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    loginProp:(data)=> dispatch(LoginAction(data))
})
const mapStateToProps=(state)=>({
    registerState:state.AuthReducer
})
 export default connect(mapStateToProps, mapDispatchToProps)(Login)