import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Header from '../Header';
import { useState } from 'react';
import * as React from 'react';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from  '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from  '@expo-google-fonts/open-sans';
import Navbar from '../Navbar';
import { white, gold } from '../../Utils/Colors';
import { fontStyles } from '../../Utils/Fonts.js' 
import PageNotFound from './PageNotFound';

export function SocialHomeScreen(){


  return(
    <SafeAreaView style={internalStyles.container}>
      <PageNotFound/>
    </SafeAreaView>
    
    );
}

const internalStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: white,
    },
});