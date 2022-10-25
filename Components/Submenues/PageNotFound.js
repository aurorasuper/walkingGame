import { StyleSheet, Text, View, Button, Alert} from 'react-native';

// Knappen har ingen style!!
export default function PageNotFound({style}) {
    return (
        <View style={internalStyles.textContainer}>
            <Text style={style.heading2}>Hoppsan!</Text>
            <Text style={style.baseText}>Sidan kunde inte hittas.</Text>
            <Text style={style.baseText}>Förmodligen är den inte helt klar än.</Text>
            <Button 
              title="Tillbaka"
              // Behöver vad som händer vid onPress
              onPress={() => Alert.alert('Button pressed!')}
            />
        </View>
    )
}

const internalStyles = StyleSheet.create({
    textContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '50%',
    }
})