
import { StyleSheet, Text, View , Image} from 'react-native';
import { teaGreen, gold, midGreen, darkGreen } from '../Utils/Colors';
import BrittaProfilBild from '../assets/BrittaProfilBild.jpeg'
import * as Progress from 'react-native-progress';
import { fontStyles } from '../Utils/Fonts.js' 

export default function Header({style, user}) {
    let progressPercent = user.points/500;
    return (
        <View style={internalStyles.header}>
            <View style={internalStyles.userBar}>
                <View style={{justifyContent:'left', paddingLeft:5}}>
                    <Text style={style.heading6}>{user.firstName}</Text>
                    <Text style={style.basetext}>Nivå {user.level}</Text>
                </View>
                <Image style={internalStyles.img} source={BrittaProfilBild} alt=' din profilbild'/>
                <View style={{flexDirection: 'column', justifyContent: 'right', paddingRight:5}}>
                    <Text style={style.heading6}>Steg</Text>
                    <Text style={style.basetext}>1000</Text>
                </View>
            </View>
            <Progress.Bar progress={progressPercent} borderColor={midGreen} color={darkGreen} height={15} width={200} />

        </View>
    );
}

const internalStyles = StyleSheet.create({
    header:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: teaGreen,
        width: '100%',
        height: '12%',
    },
    userBar: {
        width:'100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom:10,
    },
    img:{
        width:60,
        height:60,
        borderRadius:50,
    },
    progressStyle:{
        backgroundColor:'white',
        borderColor: midGreen,
    }
  });