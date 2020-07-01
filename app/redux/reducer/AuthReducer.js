import { SIGN_UP } from "../action/types";
import { Alert } from "react-native";

// let initialState={}

const AuthReducer = (state = {}, action)=>{
    
   const {type, payload} = action
   switch (type) {
       case SIGN_UP:
            Alert.alert("Authentication:", "Registration Successful")
           return {
               ...state,
               ...payload
           }
           
           
   
       default:
           break;
   }
   
    return state;
}



export default AuthReducer;