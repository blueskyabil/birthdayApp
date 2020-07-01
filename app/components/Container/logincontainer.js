import React from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"

const LoginContainer = ({children}) => {
    return (
        <View style={styles.login}>
            {children}
        </View>
    )
}

export default LoginContainer





