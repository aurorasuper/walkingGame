import react from "react";
import { StyleSheet, Text, View , Image, VirtualizedList} from 'react-native';
import { teaGreen, gold, midGreen, darkGreen } from '../Utils/Colors';
import { useState } from 'react';

export default function QuestList({style}) {
    const [location, setLocation] = useState({X: '63.8225153', Y: '20.2713224', name: 'Döbelns park', description: '', image: ''});
  
    data = [
      {
        id: 1,
        title: 'Find ' + location.name + '!', 
        location: location, 
        points: 20
      },
      {
        id: 2,
        title: 'Go to an event!', 
        location: location, 
        points: 45
      },
      {
        id: 3,
        title: 'Walk 10000 steps!', 
        location: null, 
        points: 25
      },
      {
        id: 4,
        title: 'Find ' + location.name + '!', 
        location: location, 
        points: 35
      },
      {
        id: 5,
        title: 'Take a picture at a new location!', 
        location: null, 
        points: 15
      }
    ];
  
    const getItem = (data, index) => {
      return data[index];
    };
    
    const Item = (item) => (
      <View style={style.item}>
        <Text style={style.heading6}>{item.title}</Text>
      </View>
    );

    return (
        
        <View style={internalStyles.questContainer}>   
        <View style={internalStyles.questHeadline}>
        <Text style={style.heading5white}>Uppdrag</Text>
        <Image style={internalStyles.icon} source={require('../assets/Arrow.png')}/>
        </View>
        <VirtualizedList showsVerticalScrollIndicator={false}
        style = {internalStyles.list}
        data={data}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} key={item.id} />}
        keyExtractor={item => item.id}
        getItemCount={data => data.length}
        getItem={getItem}
        />
        </View>
    );
};

const internalStyles = StyleSheet.create({

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

});