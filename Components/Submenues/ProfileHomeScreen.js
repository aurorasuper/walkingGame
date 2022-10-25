import { StyleSheet, Text, View , Image, SafeAreaView} from 'react-native';
import { useState } from 'react';
import * as React from 'react';
import { teaGreen, gold, midGreen, darkGreen, white } from '../../Utils/Colors';
import BrittaProfilBild from '../../assets/BrittaProfilBild.jpeg'
import * as Progress from 'react-native-progress';
import { fontStyles } from '../../Utils/Fonts';


export function ProfileHomeScreen(){
  
  const [user, setUser] = useState({firstName: 'Britta', lastName: 'Larsson', level: 10, points: 375, steps: null});
  let progressPercent = user.points/500;
  return(
    <SafeAreaView style={internalStyles.container}>
            <View style={internalStyles.container}>
                <View style={internalStyles.headerContainer}>
                <Image style={internalStyles.img} source={BrittaProfilBild} alt=' din profilbild'/>
                <Text style={fontStyles.heading6}>{user.firstName}</Text>
                <Text style={fontStyles.baseText}>Nivå {user.level}</Text>
                <Progress.Bar progress={progressPercent} borderColor={midGreen} color={darkGreen} height={15} width={200} />
                        <View style={internalStyles.navigationContainer}>
                                <View style={internalStyles.profileNavigation}>
                                   
                                </View>
                                <View style={internalStyles.profileNavigation}>
                               
                                </View>
                                <View style={internalStyles.profileNavigation}>
                              
                                </View>
                                
                            </View>
                </View>
                

                <View style={internalStyles.contentContainer}> 
                    <Text>Välkommen till din profil, {user.firstName}! </Text>
                </View>
            </View>
    </SafeAreaView>

    );
}

const internalStyles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: teaGreen,
    position: 'relative'
    },
    contentContainer: {
        margin: 'auto',
        height: '70%',
        width: '100%',
        backgroundColor: white,
        position: 'absolute',
        bottom: 0
    },
    navigationContainer:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom:'1%',
        justifyContent: 'space-evenly'
 
    },
    profileNavigation:{
        justifyContent: 'center',
        margin: 'auto',
        width: '32%',
        height: 66,
        backgroundColor: white,
        borderRadius: 5
    },
    headerContainer:{
        margin: 'auto',
        height: '30%',
        width: '100%',
        backgroundColor: teaGreen,
        top: 0,
        position: 'absolute',
        alignItems: 'center'
    },
    img:{
        width:92,
        height:92,
        borderRadius:50,
    },
});