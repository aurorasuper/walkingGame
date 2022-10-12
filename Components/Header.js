
import { StyleSheet, Text, View , Image} from 'react-native';
import { teaGreen, gold } from '../Utils/Colors';
import BrittaProfilBild from '../assets/BrittaProfilBild.jpeg'
import * as Progress from 'react-native-progress';

export default function Header({style, user}) {
    let progressPercent = user.points/500;
    return (
        <View style={internalStyles.header}>
            <View style={internalStyles.userBar}>
                <View style={{justifyContent:'left'}}>
                    <Text style={style.heading6}>{user.firstName}</Text>
                    <Text style={style.basetext}>Nivå {user.level}</Text>
                </View>
                <Image style={internalStyles.img} source={BrittaProfilBild} alt=' din profilbild'/>
                <View style={{flexDirection: 'column', justifyContent: 'right'}}>
                    <Text style={style.heading6}>Steg</Text>
                    <Text style={style.basetext}>1000</Text>
                </View>
            </View>
            <Progress.Bar progress={progressPercent} width={200} />

        </View>

    );
}

const internalStyles = StyleSheet.create({
    header:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: teaGreen,
        width: '100%',
        height: '10%',
    },
    userBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom:10,
    },
    img:{
        width:60,
        height:60,
        borderRadius:50,
    }
  });