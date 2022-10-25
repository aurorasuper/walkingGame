import MapView, { Marker, Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect} from 'react';
import {navBlue, white, goldOpacity80, gold, black, darkGreen} from '../Utils/Colors';
import {isPointWithinRadius} from 'geolib';
import { Dimensions,  Modal, Pressable } from 'react-native';
import CustomMarker from './CustomMarker';
import { fontStyles } from '../Utils/Fonts';

const  width = Dimensions.get('window').width;
const  height = Dimensions.get('window').height;

export default function Map(){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [popup, setPopup] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalObject, setModalObject]=useState(null);
  
    let lat =0;
    let long=0;
  
    let aspectRatio = width/height;
    let text1;
    const places = [{id:1, name: "Hitta fontänen!", description:"Hitta fontänen och ta en bild på den", points: 100, category: "Landmärke", latitude:63.8205327116849,  longitude: 20.30580963424095},
    {id:2, name: "Kinabron", description:"Hitta kinabron och ta en bild på den", points: 100, category: "Bro", latitude:63.82789806738576, longitude: 20.333345704375727},
    {id:3, name: "Skin 4", description:"Hitta den stora skulpturen", points: 100,  category: "Skulptur", latitude:63.819722, longitude:20.278889, imageSrc:null},
    {id:4, name: "2 x 3^2 Cube", description:"Hitta skulpturen!", points: 100,  category: "Skulptur", latitude:63.819167, longitude: 20.281111, imageSrc: '../assets/BrittaProfilBild.jpeg'}];

    // request current location 
    useEffect(() => {
      
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);

          // request for updates in the background
          let backPerm = await Location.requestBackgroundPermissionsAsync();

          // update locations each 3000ms
          let locations = await Location.watchPositionAsync({
              accuracy: Location.Accuracy.High,
              distanceInterval: 2,
              timeInterval: 3000 
            }, 
            (loc) => { setLocation(loc) });

        })();
      }, []);
      // handle error message from request
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
        lat = location.coords.latitude;
        long = location.coords.longitude;
      }
      let latDelta = 0.1;
      let longDelta = latDelta*aspectRatio;

      const isNear = (o) =>{


        if(isPointWithinRadius({latitude: lat, longitude: long},{latitude: o.latitude, longitude: o.longitude}, 300)
        ){
          return true;
        }
        return false;
      }
      
      const openModal = (o) =>{
        if(isNear(o)){
          setModalVisible(true);
          setModalObject(o);
        }
      };

      const closeModal = () =>{
        setModalVisible(true);
        setModalObject(null);
      }

      if(errorMsg){
        return(
            <View>
                <Text>Error</Text>
            </View>
        )
      }else{
        return(
            <View>
              {modalObject &&
                  <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    closeModal();
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={[styles.modalText, fontStyles.heading1]}>{modalObject.name}</Text>
                      {modalObject.imageSrc ? 
                        <Image style={styles.img} 
                        source={modalObject.imageSrc} 
                        alt={modalObject.name}
                      /> : null
                      }
                      <Text style={[styles.modalText, fontStyles.baseText]}>{modalObject.description}</Text>
                      
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeModal()}
                      >
                        <Text style={[styles.textStyle, fontStyles.baseText, {color:white} ]}>Ta en bild</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              }
                  <MapView
                        style={styles.map}
                        region={{
                            latitude:lat,
                            longitude:long,
                            latitudeDelta: latDelta,
                            longitudeDelta: longDelta
                        }}
                        showsUserLocation={true}
                        zoomEnabled={true}
                    >
                      

                      {places.map((obj)=>(
                        
                        <View key={obj.id}>
                  
                        <Marker
                          coordinate={{latitude: obj.latitude, longitude: obj.longitude}}
                          title={obj.name}
                          description={obj.category}
                          onPress={()=>openModal(obj)}
                          >
                            <CustomMarker item={obj} near={isNear(obj)}/>
                               <Callout>
                                <View style={styles.card}>
                                    <Text style={[styles.calloutText, fontStyles.heading6]}>{obj.category}</Text>
                                </View>
                              </Callout>
                          </Marker>
                        </View>
                      ))}
                      
                   </MapView>
            </View>
    
          )
      }

    
}

const styles = StyleSheet.create({
    map:{
        width: '100%',
        height: '100%',
      },
    card:{
      backgroundColor:white,
      width: width*0.3,
      borderRadius: 6,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    calloutText:{
      textAlign: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: white,
      borderRadius: 20,
      borderStyle:'solid',
      borderColor: gold,
      borderWidth: 3,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: darkGreen,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    img:{
      width:100,
      height:100,
  }
})
