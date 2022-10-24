import { StyleSheet, Pressable, Text, View , Image, Button, TouchableOpacity } from 'react-native';
import { white } from '../Utils/Colors';
import mapIcon from '../assets/mapIcon.svg';
import mapIconActive from '../assets/mapIconActive.svg';
import socialIcon from '../assets/socialIcon.svg';
import socialIconActive from '../assets/socialIconActive.svg';
import profileIcon from '../assets/profileIcon.svg';
import profileIconActive from '../assets/profileIconActive.svg';
import { fontStyles } from '../Utils/Fonts';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';


// setstate is async in nature will not update immediately? slight delay so component will render before state is set, soulution?

export default function Navbar (){

    const navigation = useNavigation();
    const [navBarIconState, setNavBarIconState] = useState(2);

    return (
        <View style={internalStyles.navBar}>
            <View style={internalStyles.iconsContainer}>
                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(1) ; navigation.navigate('SocialHomeScreen')}}>
                    <Image style={navBarIconState === 1 ? internalStyles.navIconsActive : internalStyles.navIcons} 
                    profile source = {navBarIconState === 1 ? socialIconActive : socialIcon} alt='Socialt'/>
                    <text style={navBarIconState === 1 ? fontStyles.navBarTextActive : fontStyles.navBarText}>Socialt</text>
                </TouchableOpacity>

                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(2) ; navigation.navigate('MapHomeScreen')}}>    
                    <Image style={navBarIconState === 2 ? internalStyles.navIconsActive : internalStyles.navIcons} 
                    profile source = {navBarIconState === 2 ? mapIconActive : mapIcon} alt='Karta'/>
                    <text style={navBarIconState === 2 ? fontStyles.navBarTextActive : fontStyles.navBarText}>Karta</text>
                </TouchableOpacity>

                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(3) ; navigation.navigate('ProfileHomeScreen')}}>
                    <Image style={navBarIconState === 3 ? internalStyles.navIconsActive : internalStyles.navIcons}
                    profile source = {navBarIconState === 3 ? profileIconActive : profileIcon} alt='Profil'/>
                    <text style={navBarIconState === 3 ? fontStyles.navBarTextActive : fontStyles.navBarText}>Profil</text>   
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
    },
    mapIconStyle:{
        width: '49px',
        height: '49px',
        margin:'auto',
    },
    navIcons:{
        width: '44px',
        height: '44px',
        margin:'auto'
    },
    navIconsActive:{
        width: '44px',
        height: '44px',
        margin:'auto'
    },
    iconsContainer:{
        margin: 'auto',
        gridGap: '64px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
    },
    navBarButtonStyle:{
        justifyContent: "center",
        backgroundColor: white,
        width: '70px',
        height: '70px',
        margin:'auto',
    }
  });