import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Header from '../Header';
import { useState } from 'react';
import * as React from 'react';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from  '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from  '@expo-google-fonts/open-sans';
import Navbar from '../Navbar';
import { white } from '../../Utils/Colors';
import { fontStyles } from '../../Utils/Fonts.js' 

export function MapHomeScreen(){
  
  const [user, setUser] = useState({firstName: 'Britta', lastName: 'Larsson', level: 10, points: 375, steps: null});

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold
  });

  if(!fontsLoaded){
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }else{
  return(
    <View style={internalStyles.container}>
      <Header user={user}/>
      <Text style={fontStyles.heading1}>Välkommen till promix, {user.firstName}! </Text>
      <Text style={fontStyles.baseText}>Open up App.js to start working on your app!</Text>
    </View>
    );
  }
}

const internalStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: white,
    },
});