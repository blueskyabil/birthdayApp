import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from "../screens/Register"
import CardPage from '../screens/CardPage';
import Home from '../screens/Home';
import CardSender from "../screens/CardSender"
import Login from "../screens/Login"

const Stack = createStackNavigator ();

const ScreenComponent = () => (
    <Stack.Navigator >
        <Stack.Screen 
            name="Login"
            component={Login}
        />
        <Stack.Screen 
            name="Register"
            component={Register}
            options={{
                // header:()=>null to not show the header HOME
                // title:"house" to have a custom title
                headerTintColor:"green",
                // headerTintColor:"red"
                headerTitleStyle:{
                    fontSize:30,
                },
                headerStyle:{
                    backgroundColor:"red",
                }
            }}
        />
        <Stack.Screen 
            name="Home"
            component={Home}
        />
        <Stack.Screen 
            name="CardPage"
            component={CardPage}
        />
        <Stack.Screen 
            name="CardSender"
            component={CardSender}
        />
        

    </Stack.Navigator>
)
export default ()=>(
    <NavigationContainer>
        <ScreenComponent />
    </NavigationContainer>
)