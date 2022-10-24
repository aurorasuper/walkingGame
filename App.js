import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { white, teaGreen, black, midGreen, darkGreen, goldBrown, gold } from './Utils/Colors';
import Header from './Components/Header';
import { useState } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from  '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from  '@expo-google-fonts/open-sans';
import Navbar from './Components/Navbar';
import { MapHomeScreen } from './Components/Submenues/MapHomeScreen';
import { ProfileHomeScreen } from './Components/Submenues/ProfileHomeScreen';
import { SocialHomeScreen } from './Components/Submenues/SocialHomeScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProfileHomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="MapHomeScreen" component={MapHomeScreen} />
        <Stack.Screen name="ProfileHomeScreen" component={ProfileHomeScreen} />
        <Stack.Screen name="SocialHomeScreen" component={SocialHomeScreen} />
      </Stack.Navigator>
      <Navbar/>
    </NavigationContainer>
  );
}

export default App;