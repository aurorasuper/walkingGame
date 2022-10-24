import React from "react";
import {View, StyleSheet } from "react-native";
import {white, goldOpacity80, gold} from '../Utils/Colors';
import { AntDesign } from '@expo/vector-icons'; 
const Pulse = require('react-native-pulse').default;


export default function CustomMarker({item, near}){


    const Marker = () =>{
        if(near){
            return(
            <View style={styles.animatedMarker}>
                
                <Pulse color={gold} numPulses={5} initialDiameter={45} diameter={70} speed={50} duration={3000} />
                <AntDesign name="question" size={24} color={white} />
              
            </View>)
        }else{
            return(
            <View style={[styles.roundMarker]}>
                <AntDesign name="question" size={24} color={white} />
            </View>
            )
        }
    }
    return (
        <View >
            
            <Marker/>
            
        </View>
    )
}

const styles= StyleSheet.create({
    roundMarker:{
        justifyContent: 'center',
        alignItems:'center',
        margin: 'auto',
        height: 40,
        width: 40,
        backgroundColor: goldOpacity80,
        borderRadius:25,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: white,
    },
    animatedMarker:{
        justifyContent: 'center',
        alignItems:'center',
        margin: 'auto',
        height: 40,
        width: 40,
        backgroundColor: goldOpacity80,
        borderRadius:25,
    }
})