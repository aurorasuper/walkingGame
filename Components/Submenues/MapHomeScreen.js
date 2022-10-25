import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import Header from '../Header';
import { useState } from 'react';
import * as React from 'react';
import { white, teaGreen } from '../../Utils/Colors';
import Map from '../Map'
import QuestList from '../QuestList';

export function MapHomeScreen(){
  
  const [user, setUser] = useState({firstName: 'Britta', lastName: 'Larsson', level: 10, points: 375, steps: null});

  return(
    <SafeAreaView style={internalStyles.container}>
            <Header user={user}/>
            <QuestList/>
            <Map/>
    </SafeAreaView>
    
    );
  
}

const internalStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: teaGreen,
    },
});