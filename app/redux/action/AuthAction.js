import { SIGN_UP, LOGIN } from "./types"





export const RegisterAction=(data)=>{
    
    return dispatch=>dispatch({
        type:SIGN_UP,
        payload:data
    })
}
export const LoginAction=(data)=>{
    
    return dispatch=>dispatch({
        type:LOGIN,
        payload:data
    })
}


