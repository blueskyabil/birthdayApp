import React from "react"
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
    TextInput
} from "react-native"
import styles from "../components/styles/index"

class SignIn extends Component {
    static navigationOptions ={
        header:null
    }
    render (){
        return(
            <View style={{flex: 1 }}>
                <ImageBackground 
                    source={require("../assets/custombrain.png")}
                    style={{flex: 1}}
                >
                    <View style={{flex : 1, justifyContent:"center", alignItems:"center"}}>
                        <View style={{height:100,width:100,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontWeight:"bold",fontSize:26}}>SMILEBOX</Text>
                        </View>
                    </View>
                    {/* {BOTTOM HALF} */}
                    <View >
                        <View
                            style={{
                                height:150,
                                backgroundColor:"white"
                                }}
                        >  
                            <View 
                                style={{
                                    opacity:1, //animated
                                    alignItems:"flex-start",
                                    paddingHorizontal:25,
                                    marginTop: 25  //animated
                                }}
                            >
                                <Text 
                                    style={{fontSize:24,}}
                                > Personalize E-cards with Smilebox</Text>
                            </View>

                            <TouchableOpacity>
                                <View 
                                    style={{
                                        marginTop:25, //animated
                                        paddingHorizontal:25,
                                        flexDirection:"row"
                                    }}
                                >
                                    <Image
                                        source={require("../assets/check-1-icon.png")}
                                        style={{
                                            height:24,
                                            width:24,
                                            resizeMode:"contain"
                                        }}
                                    />
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            flex : 1
                                        }}
                                    >
                                        <TextInput 
                                            style = {{ flex : 1, fontSize: 20 }}
                                            placeholder="Username"
                                            underlineColorAndroid="transparent"
                                            
                                        />

                                    </View>
                                </View>
                            </TouchableOpacity>


                        </View>
                        <View 
                            style={{
                                height:70,
                                backgroundColor:"white",
                                alignItems:"flex-start",
                                justifyContent:"center",
                                borderTopColor: "#e8e8ec",
                                borderTopWidth: 1,
                                paddingHorizontal:25


                                }}
                        >
                            <Text
                                style={{color:"#5a7fdf",fontWeight:"bold"}}
                             >
                                Or connect using a social account</Text>
                        </View>
                    </View>
                </ImageBackground>

              
            </View>
        )
    }
}