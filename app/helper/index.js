export function verifyPassword(password) {
    let result= {}
    if (!password) {
        result={error:"Please enter password"}
        return result
        
    }
    if (password.length <= 6) {
        result={error:"Password is too short"}
        return result
        
    }
    return{
        error:false,
        value:password
    }
    
}
export function confirmPassword(confirm) {
    let result= {}
    if (!confirm) {
        result={error:"Please enter password"}
        return result
        
    }
    if (password.length <= 6) {
        result={error:"Password is too short"}
        return result
        
    }
    return{
        error:false,
        value:confirm
    }
    
}
export function checkPassword(password, confirm) {
    let result= {}
    if (password !== confirm) {
        result={error:"Password do not match"}
        return result
        
    }
   
    return{
        error:false,
        msg: pass
    }
    
}



export function verifyUsername(username) {
    let result= {}
    if (!username) {
        result={error:"Please enter username"}
        return result
        
    }
    if (username.length <= 6) {
        result={error:"username is too short"}
        return result
        
    }
    return{
        error:false,
        value:username
    }
    
}

export function verifyName(name) {
    let result= {}
    if (!name) {
        result={error:"Please enter fullname"}
        return result
        
    }
    return{
        error:false,
        value:name
    }
    
}

export function verifyPhone(phone) {
    let result= {}
    if (!phone) {
        result={error:"Please enter Phone number"}
        return result
        
    }
    if (phone.length <= 5) {
        result ={error:"Please enter correct Phone number"}
    }
    return{
        error:false,
        value:phone

    }
    
}

// export function verifyEmail(email){
//     result = {error:"Email is not a valid email"};
//     const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(validate.test(email)){
//         result = {error: false, value:email}
//     }
//     return result;
// }
   
export function verifyEmail(email) {
    let result= {}
    if (!email) {
        result={error:"Please enter email number"}
        return result
        
    }
    if (email.length <= 5) {
        result ={error:"Please enter correct email number"}
    }
    return{
        error:false,
        value:email

    }
    
}
 
