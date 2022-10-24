import { useState, useEffect} from 'react';
import {navBlue, white, goldOpacity80, gold, black, goldBrown} from '../Utils/Colors';
import { StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native';

export default function Popup({props, style}){

  

    return (
        <View style={styles.popup}>
            <Text style={style.heading1}>{props.name}</Text>
            <Text style={style.basetext}>{props.description}</Text>
        </View>
    )



}
const styles = StyleSheet.create({
    popup:{
        top: 0,
        bottom: 0,
        margin: 'auto',
        position:'absolute',
        left: 0,
        right: 0,
        zIndex:10,
        width: Dimensions.get('window').width*0.8,
        height: Dimensions.get('window').height*0.8,
        backgroundColor: white,
        borderColor: goldBrown,
        border: 5,
        borderRadius: 10
    }
})