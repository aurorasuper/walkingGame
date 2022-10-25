import { StyleSheet, Pressable, Text, View , Image, Button, TouchableOpacity } from 'react-native';
import { white } from '../Utils/Colors';
import mapIcon from '../assets/mapIcon.svg';
import mapIconActive from '../assets/mapIconActive.svg';
import SocialIcon from '../assets/socialIcon.svg';
import SocialIconActive from '../assets/socialIconActive.svg';
import profileIcon from '../assets/profileIcon.svg';
import profileIconActive from '../assets/profileIconActive.svg';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { black, gold } from '../Utils/Colors';



// setstate is async in nature will not update immediately? slight delay so component will render before state is set, soulution?

export default function Navbar (){

    const navigation = useNavigation();
    const [navBarIconState, setNavBarIconState] = useState(2);

    const renderMapIcon = () =>{
        if(navBarIconState==2){
            return(
                <Ionicons name="ios-map" size={32} color={gold} />
            )
        }else{
            return(
                <Ionicons name="ios-map-outline"  size={32} color={black}  />
            )
        }
    }

    const renderSocialIcon = () =>{
        if(navBarIconState==1){
            return(
                <Ionicons name="ios-people"  size={32} color={gold} />
            )
        }else{
            return(
                <Ionicons name="ios-people-outline"  size={32} color={black}  />
            )
        }
    }

    const renderProfileIcon = () =>{
        if(navBarIconState==3){
            return(
                <Ionicons name="ios-person" size={32} color={gold} />
            )
        }else{
            return(
                <Ionicons name="ios-person-outline" size={32} color={black}  />
            )
        }
    }
    return (
        <View style={internalStyles.navBar}>
            <View style={internalStyles.iconsContainer}>
                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(1) ; navigation.navigate('SocialHomeScreen')}}>
                    {renderSocialIcon()}
                    <Text>Socialt</Text>
                </TouchableOpacity>

                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(2) ; navigation.navigate('MapHomeScreen')}}>    
                    {renderMapIcon()}
                    <Text>Karta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(3) ; navigation.navigate('ProfileHomeScreen')}}>
                    {renderProfileIcon()}
                    <Text>Profil</Text>   
                </TouchableOpacity>
            </View> 
        </View>
    );
}

const internalStyles = StyleSheet.create({
    navBar:{
        backgroundColor: white,
        width: '100%',
        height: '10%',
        position: 'absolute',
        bottom:0,
        left:0,
        flex:1,
        justifyContent: 'center'
    },
    mapIconStyle:{
        width: 49,
        height: 49,
        margin:'auto',
    },
    navIcons:{
        width: 44,
        height: 44,
        margin:'auto',
    },
    navIconsActive:{
        width: 44,
        height: 44,
        margin:'auto',

    },
    iconsContainer:{
        width:'90%',
        marginHorizontal: '5%',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    navBarButtonStyle:{
        flexDirection: 'column',
        alignItems: 'center',
        width: 70,
        height: 70
    }
  });