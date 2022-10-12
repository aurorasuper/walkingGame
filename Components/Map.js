import MapView, { Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View} from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect} from 'react';
import {navBlue, white} from '../Utils/Colors'
export default function Map(){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    let lat =0;
    let long=0;

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
      let longDelta = 0.07;

      if(errorMsg){
        return(
            <View>
                <Text>Error</Text>
            </View>
        )
      }else{
        return(
            <View>
     
                   <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude:lat,
                            longitude:long,
                            latitudeDelta: latDelta,
                            longitudeDelta: longDelta
                        }}
                    >
                        <Circle 
                            center={{latitude:lat, longitude:long}}
                            radius = {200}
                            strokeWidth= {3}
                            strokeColor={white}
                            fillColor={navBlue}
                        />
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
})