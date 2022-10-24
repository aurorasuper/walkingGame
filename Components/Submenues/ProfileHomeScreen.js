import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';
import { useState } from 'react';
import * as React from 'react';
import { useFonts, Raleway_600SemiBold, Raleway_700Bold } from  '@expo-google-fonts/raleway';
import { OpenSans_400Regular } from  '@expo-google-fonts/open-sans';
import { fontStyles } from '../../Utils/Fonts.js'
import BrittaProfilBild from '../../assets/BrittaProfilBild.jpeg'
import { teaGreen, gold, midGreen, darkGreen, white } from '../../Utils/Colors';
import * as Progress from 'react-native-progress';


export function ProfileHomeScreen(){
  
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
       
        <View style={internalStyles.navigationContainer}>
            <View style={internalStyles.profileNavigation}>

            </View>
            <View style={internalStyles.profileNavigation}>

            </View>
            <View style={internalStyles.profileNavigation}>

            </View>
            
        </View>

        <View style={internalStyles.contentContainer}> 
            <Text style={fontStyles.navBarText}>Välkommen till din profil, {user.firstName}! </Text>
        </View>
    </View>
    );
  }
}

const internalStyles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: teaGreen,
    },
    contentContainer: {
        margin: 'auto',
        height: '70%',
        width: '100%',
        backgroundColor: white,
        bottom: 0,
        position: 'absolute',
    },
    navigationContainer:{
        margin: 'auto',
        gridGap: '6px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        top: '182px',
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileNavigation:{
        justifyContent: 'center',
        backgroundColor: white,
        width: '120px',
        height: '66px',
        margin:'auto',
    },
});