import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import { white, teaGreen, black, midGreen, darkGreen, goldBrown, gold } from './Utils/Colors';
import Header from './Components/Header';
import Map from './Components/Map';
import { useState } from 'react';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from  '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from  '@expo-google-fonts/open-sans';


export default function App() {
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
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Header user={user} style={styles}/>  
        <Map/>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  baseText:{
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
    color: black,
  },
  heading1:{
    fontSize:32,
    fontFamily: 'Raleway_600SemiBold',
    color: darkGreen,
  },
  heading2:{
    fontSize:29,
    fontFamily: 'Raleway_600SemiBold',
    color: darkGreen,
  },
  heading3:{
    fontSize:26,
    fontFamily: 'Raleway_600SemiBold',
    color: darkGreen,
  },
  heading4:{
    fontSize:23,
    fontFamily: 'Raleway_600SemiBold',
    color: darkGreen,
  },
  heading5:{
    fontSize:20,
    fontFamily: 'Raleway_600SemiBold',
    color: darkGreen,
  },
  heading6:{
    fontSize:18,
    fontFamily: 'Raleway_700Bold',
    color: darkGreen,
  },
  showHeader:{
    height: '120 px',
  },
});
