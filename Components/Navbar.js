import { StyleSheet, Pressable, Text, View ,TouchableOpacity } from 'react-native';
import { navGrey, teaGreen, white } from '../Utils/Colors';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { black, gold, goldBrown } from '../Utils/Colors';
import { fontStyles } from '../Utils/Fonts';



// setstate is async in nature will not update immediately? slight delay so component will render before state is set, soulution?

export default function Navbar (){

    const navigation = useNavigation();
    const [navBarIconState, setNavBarIconState] = useState(2);

    const renderMapIcon = () =>{
        if(navBarIconState==2){
            return(
                <View style={{alignItems:'center'}}>
                <Ionicons name="ios-map"  size={32} color={gold} />
                <Text style={[fontStyles.navBarText, {color:goldBrown}]}>Karta</Text>
            </View>
            )
        }else{
            return(
                <View style={{alignItems:'center'}}>
                    <Ionicons name="ios-map-outline"  size={32} color={black} />
                    <Text style={[fontStyles.navBarText, {color:black}]}>Karta</Text>
                </View>
            )
        }
    }

    const renderSocialIcon = () =>{
        if(navBarIconState==1){
            return(
                <View style={{alignItems:'center'}}>
                    <Ionicons name="ios-people"  size={32} color={gold} />
                    <Text style={[fontStyles.navBarText, {color:goldBrown}]}>Socialt</Text>
                </View>
                
            )
        }else{
            return(
                <View style={{alignItems:'center'}}>
                    <Ionicons name="ios-people-outline"  size={32} color={black} />
                    <Text style={[fontStyles.navBarText, {color:black}]}>Socialt</Text>
                </View>
            )
        }
    }

    const renderProfileIcon = () =>{
        if(navBarIconState==3){
            return(
                <View style={{alignItems:'center'}}>
                    <Ionicons name="ios-person" size={32} color={gold} />
                    <Text style={[fontStyles.navBarText, {color:goldBrown}]}>Profil</Text>
                </View>
                
            )
        }else{
            return(
                <View style={{alignItems:'center'}}>
                    <Ionicons name="ios-person-outline" size={32} color={black}  />
                    <Text style={[fontStyles.navBarText, {color:black}]}>Profil</Text>
                </View>
                
            )
        }
    }
    return (
        <View style={internalStyles.navBar}>
            <View style={internalStyles.iconsContainer}>
                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(1) ; navigation.navigate('SocialHomeScreen')}}>
                    {renderSocialIcon()}
                </TouchableOpacity>

                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(2) ; navigation.navigate('MapHomeScreen')}}>    
                    {renderMapIcon()}
                </TouchableOpacity>

                <TouchableOpacity style={internalStyles.navBarButtonStyle} onPress={() => {setNavBarIconState(3) ; navigation.navigate('ProfileHomeScreen')}}>
                    {renderProfileIcon()}
                      
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
        justifyContent: 'center',
        
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