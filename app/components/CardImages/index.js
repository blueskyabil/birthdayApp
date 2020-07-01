import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import styles from "./styles"


const CardImages = (props) => {
    return (
        <View style={styles.container} >
            <View style={styles.imageCont}>

                <Image
                    {...props}
                    style={styles.image}
                    resizeMode="cover"

                />
            </View>
            
        </View>
    )
}

export default CardImages
