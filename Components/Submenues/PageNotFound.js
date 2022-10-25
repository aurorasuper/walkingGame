import { StyleSheet, Text, View, Button, Pressable, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fontStyles } from '../../Utils/Fonts';
import { darkGreen, white } from '../../Utils/Colors';

// Knappen har ingen style!!
export default function PageNotFound() {
    const navigation = useNavigation();

    return (
        <View style={internalStyles.textContainer}>
            <Text style={fontStyles.heading2}>Hoppsan!</Text>
            <Text style={[fontStyles.baseText, {marginTop: '3%'}]}>Sidan kunde inte hittas.</Text>
            <Text style={fontStyles.baseText}>Förmodligen är den inte helt klar än.</Text>
            <Pressable style={internalStyles.button}
              title="Tillbaka"
              // Behöver vad som händer vid onPress
              onPress={() => navigation.goBack()}
            >
                <Text style={internalStyles.buttonText}>Tillbaka</Text>
            </Pressable>
        </View>
    )
}

const internalStyles = StyleSheet.create({
    textContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40%',
        width: '100%',
        height: '50%',
    },
    buttonText:{
        fontFamily:'Raleway_600SemiBold',
        fontSize: 16,
        color: white,
        textAlign: 'center'
    },
    button:{
        margin: '10%',
        justifyContent:'center',
        backgroundColor: darkGreen,
        borderRadius: 20,
        height: 42,
        width: '30%'
    }
})