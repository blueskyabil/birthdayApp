import React from 'react';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        padding:200,
        // marginVertical:,
        marginHorizontal:20

    },
    imageCont:{
        backgroundColor:"red",
        width:200,
        height:200
       
    },
    image:{
        width:"100%",
        height:"100%"
        
        // backgroundColor:"transparent"
    },
    
        centeredView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
        },
        modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        },
        openButton: {
          backgroundColor: "#F194FF",
          borderRadius: 20,
          padding: 10,
          elevation: 2
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        }
});
      
