import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, SafeAreaView, VirtualizedList} from 'react-native';
import { white, teaGreen, black, midGreen, darkGreen, goldBrown, gold } from './Utils/Colors';
import Header from './Components/Header';
import Map from './Components/Map';
import QuestList from './Components/QuestList';
import { useState } from 'react';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold, Raleway_300Light_Italic } from  '@expo-google-fonts/raleway';
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
        <Map style={styles}/>
        <QuestList style={styles}/>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  questContainer: {
    backgroundColor:darkGreen,
    borderRadius:10,
    flex:0.975,
    margin:10,
    padding:10
  },
  questHeadline: {
    flexDirection:'row', 
    justifyContent: 'space-between', 
    margin:5
  },
  icon: {
    width: 18,
    height:10,
    margin: 10,
  },
  item: {
    height: 100,
    alignSelf: 'stretch',
    padding: 16,
    margin: 7,
    backgroundColor: teaGreen,
    borderRadius: 10
  },
  list:{
    alignSelf:"stretch",
  },
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
  heading5white:{
    fontSize:20,
    fontFamily: 'Raleway_700Bold',
    color: white,
  },
  heading6:{
    fontSize:18,
    fontFamily: 'Raleway_700Bold',
    color: darkGreen,
  },
  heading6white:{
    fontSize:18,
    fontFamily: 'Raleway_700Bold',
    color: white,
  },
  showHeader:{
    height: '120 px',
  },
});
