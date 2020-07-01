import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableHighlight, TextInput, Alert } from 'react-native'
import MyTextInput from "../components/MyTextInput"
import Container from '../components/Container'
import MyTouchHighlight from '../components/MyTouchHighlight.js'
import {verifyPassword, verifyUsername, verifyPhone, verifyEmail} from "../helper/index"
import styles from "../components/MyTextInput/styles"
import {connect} from "react-redux"
import { RegisterAction } from '../redux/action/AuthAction'

 class Register extends Component {
    state = {
        data:{},
        error:{}
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
        
        if (keys[0] == 'phone'){
            if(values.phone.length > 0){
                this.setState(prevState=>{
                    return{
                        error:{
                            ...prevState.error,
                            phone:false
    
                        }
                    }
                })
            }
        }

        // if (keys[0] == 'email'){
        //     if(values.email.length > 0){
        //         this.setState(prevState=>{
        //             return{
        //                 error:{
        //                     ...prevState.error,
        //                     email:false
    
        //                 }
        //             }
        //         })
        //     }
        // }
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

    pressLogin = ()=>{
        this.props.navigation.navigate("Login",{name:this.state.data})
        
    }
    handleRegister = ()=>{
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
            let checkPhone = verifyPhone(this.state.data.password)
            if (checkPhone.error){
                this.setState(prevState=>{
                    return{
                        error:{

                            ...prevState.error,
                            phone:checkPhone.error
                        }
                    }
                })
            }
            let checkEmail = verifyEmail(this.state.data.password)
            if (checkEmail.error){
                this.setState(prevState=>{
                    return{
                        error:{

                            ...prevState.error,
                            email:checkEmail.error
                        }
                    }  
                })
            }
            if(checkPassword.error || checkUsername.error || checkPhone.error || checkEmail.error){
                return;
            }
            else{
                Alert.alert("Registration Successful ")
                this.props.navigation.navigate("Login",{data:this.state.data})
            }
            const {username,phone,email,password} = this.state.data
            let registerData = {username,phone,email,password}
            this.props.registerProp(registerData)


    }
    render() {
        
        return (
            <ImageBackground
                source={require("../assets/bday1.gif")}
                style={{flex:1}}
                
            >
                
                <Container>
                    <Text>{this.state.data.username}</Text>
                    <Text>{this.state.data.phone}</Text>
                    <Text>{this.state.data.email}</Text>

                    <MyTextInput 
                        placeholder="Username"
                        keyboardType="default"
                        onChangeText={(username)=>this.changeInput({username})}
                        value={this.state.data.username}
                        
                    />
                    <Text style={styles.errorText}>{this.state.error.username}</Text>
                    <MyTextInput 
                        placeholder="Phone Number"
                        keyboardType="numeric"
                        onChangeText={(phone)=>this.changeInput({phone})}
                       
                    />
                    <Text style={styles.errorText}>{this.state.error.phone}</Text>
                    <MyTextInput 
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={(email)=>this.changeInput({email})}
                    />
                    <Text style={styles.errorText}>{this.state.error.email}</Text>
                    <MyTextInput 
                        placeholder="Password"
                        keyboardType="default"
                        secureTextEntry={true}
                        maxlength="10"
                        coloredinputtext="green"
                        onChangeText={(password)=>this.changeInput({password})}
                    />
                    <Text style={styles.errorText}>{this.state.error.password}</Text>
                    <MyTextInput 
                        placeholder="Confirm password"
                        keyboardType="default"
                        secureTextEntry={true}
                        maxlength="10"
                        coloredinputtext="green"
                        onChangeText={(password)=>this.changeInput({password})}
                    />
                    <Text style={styles.errorText}>{this.state.error.password}</Text>
                   
                    <MyTouchHighlight show="Register" onButton={()=>this.handleRegister()} />
                    <MyTouchHighlight show="Login" onButton={()=>this.pressLogin()} />
               
           
                </Container>
            </ImageBackground>
        )
    }
}

const mapDispatchToProps = (dispatch)=> ({
    registerProp: (data)=>dispatch(RegisterAction(data))
})
 export default connect(null, mapDispatchToProps)(Register)