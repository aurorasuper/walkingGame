import react from "react";
import { StyleSheet, Text, View , Image, TouchableOpacity, VirtualizedList, Dimensions} from 'react-native';
import { teaGreen, gold, midGreen, darkGreen, white} from '../Utils/Colors';
import { useState } from 'react';
import BsStarFill from '../assets/BsStarFill.png';
import Arrow from '../assets/Arrow.png';
import dobelnsPlan from '../assets/dobelnsPlan.png';
import { fontStyles } from "../Utils/Fonts";


const  width = Dimensions.get('window').width;
const  height = Dimensions.get('window').height;

export default function QuestList() {
    const [location, setLocation] = useState({X: '63.8225153', Y: '20.2713224', name: 'Döbelns park', description: '', image: '../assets/döbelnsPlan.png'});
    const [shouldShow, setshouldShow] = useState(false);

    data = [
      {
        id: 1,
        title: 'Hitta ' + location.name + '!', 
        location: location, 
        points: 20
      },
      {
        id: 2,
        title: 'Gå på ett event!', 
        location: location, 
        points: 45
      },
      {
        id: 3,
        title: 'Gå 10000 steg!', 
        location: null, 
        points: 25
      },
      {
        id: 4,
        title: 'Hitta ' + location.name + '!', 
        location: location, 
        points: 35
      },
      {
        id: 5,
        title: 'Ta en bild på en ny plats!', 
        location: null, 
        points: 15
      }
    ];
  
    const getItem = (data, index) => {
      return data[index];
    };
    
    const Item = (item) => (
      <View style={internalStyles.item}>
      <Text style={item.location !== null ? internalStyles.heading6 : fontStyles.heading6}>{item.title}</Text>
        {
          item.location !== null ? (  
            <Image style={internalStyles.itemImage} source={dobelnsPlan}/>
          ) : null
        }
      </View>
    );



    return (
        
      <View style={shouldShow ? internalStyles.questContainerOpen : internalStyles.questContainerClosed}>   
        <View style={internalStyles.questHeadline}>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Image style={internalStyles.starIcon} source={BsStarFill}/>
            <Text style={[fontStyles.heading6, {color:white}]}>Uppdrag</Text>
          </View>
          <TouchableOpacity onPress={() => setshouldShow(!shouldShow)}>
           <Image style={shouldShow ? internalStyles.closeIcon : internalStyles.openIcon} source={Arrow}/>
          </TouchableOpacity>
        </View>
        {
          shouldShow ? ( 
                        
            <VirtualizedList showsVerticalScrollIndicator={false}
              style = {internalStyles.list}
              data={data}
              initialNumToRender={4}
              renderItem={({ item }) => <Item title={item.title} key={item.id} />}
              keyExtractor={item => item.id}
              getItemCount={data => data.length}
              getItem={getItem}
            />                  
                        
          ) : null
        }
      </View>
        
    );
};

const internalStyles = StyleSheet.create({

    questContainerClosed: {
        backgroundColor:darkGreen,
        borderRadius:30,   
        top:height*0.17,
        margin:10,
        paddingHorizontal:10, 
        position: "absolute",
        zIndex: 5,
        width: '95%'
    },
    questContainerOpen: {
      backgroundColor:darkGreen,
      borderRadius:15, 
      top:height*0.17,  
      margin:10,
      padding:10, 
      position: "absolute",
      zIndex: 5,
      width: '95%',
      maxHeight:'84%'
  },
    questHeadline: {
        flexDirection:'row', 
        justifyContent: 'space-between', 
        margin:5
    },
    openIcon: {
        width: 18,
        height:10,
        margin: 10,
    },
    closeIcon: {
      width: 18,
      height:10,
      margin: 10,
      transform: [{rotate: "180deg"}]
    },
    starIcon: {
      width: 18,
      height:15,
      marginRight: 8
    },
    item: {
        height: 100,
        alignSelf: 'stretch',
        padding: 16,
        margin: 7,
        backgroundColor: teaGreen,
        borderRadius: 10,
        flexDirection:'row', 
        justifyContent: 'space-between',
    },
    itemImage: {
      height: 100,
      width:100,
      borderRadius: 10,
      margin:-16     
    },
    heading6:{
      fontSize:18,
      fontFamily: 'Raleway_700Bold',
      color: darkGreen,
      width:200
    },
    list:{
        alignSelf:"stretch",
        flex: 0.5
    },

});
