import React from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import styles from "./styles"


const MyTextInput = (props) => {
    return (
        <KeyboardAvoidingView>
            <TextInput 
                    style={styles.label}
                    {...props}
            >
                    
            </TextInput>
                
        </KeyboardAvoidingView>
    )
}

export default MyTextInput

