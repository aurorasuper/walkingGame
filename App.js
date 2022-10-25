import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './Components/Navbar';
import { MapHomeScreen } from './Components/Submenues/MapHomeScreen';
import { ProfileHomeScreen } from './Components/Submenues/ProfileHomeScreen';
import { SocialHomeScreen } from './Components/Submenues/SocialHomeScreen';
import { useFonts } from 'expo-font';
import { Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';

const Stack = createNativeStackNavigator();


function App() {
  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_700Bold,
    OpenSans_400Regular
  })

  if(!fontsLoaded){
    return(<View><Text>Loading...</Text></View>)
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MapHomeScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name="SocialHomeScreen" component={SocialHomeScreen} />
          <Stack.Screen name="MapHomeScreen" component={MapHomeScreen} />
          <Stack.Screen name="ProfileHomeScreen" component={ProfileHomeScreen} />
          
      </Stack.Navigator>
      <Navbar/>
    </NavigationContainer>
  );
}

export default App;