import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';
import { useState } from 'react';
import * as React from 'react';
import { teaGreen, gold, midGreen, darkGreen, white } from '../../Utils/Colors';


export function ProfileHomeScreen(){
  
  const [user, setUser] = useState({firstName: 'Britta', lastName: 'Larsson', level: 10, points: 375, steps: null});
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
            <Text>Välkommen till din profil, {user.firstName}! </Text>
        </View>
    </View>
    );
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
        flex: 1,
        flexDirection: 'row',
        top: 0,
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'orange'
    },
    profileNavigation:{
        justifyContent: 'center',
        backgroundColor: 'purple',
        width: '120px',
        height: '66px',
        margin:'auto',
    },
});